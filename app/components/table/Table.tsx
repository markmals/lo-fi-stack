import { ArrowUpIcon } from "@heroicons/react/20/solid"
import type { ReactNode } from "react"
import { useMemo, useState } from "react"
import type { CellProps, ColumnProps, RowProps } from "react-aria-components"
import {
    Cell,
    Column,
    Row,
    Table as AriaTable,
    TableBody,
    TableHeader,
} from "react-aria-components"
import stocks from "./stocks.json"

export interface SortDescriptor {
    column: keyof (typeof stocks)[number]
    direction: "ascending" | "descending"
}

export function Table() {
    let [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "symbol",
        direction: "ascending",
    })

    let sortedItems = useMemo(() => {
        return stocks.sort((a, b) => {
            let first = a[sortDescriptor.column]
            let second = b[sortDescriptor.column]
            let cmp = String(first).localeCompare(String(second))
            if (sortDescriptor.direction === "descending") {
                cmp *= -1
            }
            return cmp
        })
    }, [sortDescriptor])

    return (
        <div className="relative max-h-[280px] overflow-auto rounded-lg bg-white text-gray-600 shadow">
            <AriaTable
                aria-label="Stocks"
                selectionMode="single"
                selectionBehavior="replace"
                sortDescriptor={sortDescriptor}
                // FIXME: Typing
                onSortChange={setSortDescriptor as any}
                className="border-separate border-spacing-0"
            >
                <TableHeader>
                    <StockColumn id="symbol" allowsSorting>
                        Symbol
                    </StockColumn>
                    <StockColumn id="name" isRowHeader allowsSorting>
                        Name
                    </StockColumn>
                    <StockColumn id="marketCap" allowsSorting>
                        Market Cap
                    </StockColumn>
                    <StockColumn id="sector" allowsSorting>
                        Sector
                    </StockColumn>
                    <StockColumn id="industry" allowsSorting>
                        Industry
                    </StockColumn>
                </TableHeader>
                <TableBody items={sortedItems}>
                    {item => (
                        <StockRow>
                            <StockCell>
                                <span className="rounded border border-slate-200 bg-slate-100 px-1 font-mono group-aria-selected:border-slate-800 group-aria-selected:bg-slate-700">
                                    ${item.symbol}
                                </span>
                            </StockCell>
                            <StockCell className="font-semibold">{item.name}</StockCell>
                            <StockCell>{item.marketCap}</StockCell>
                            <StockCell>{item.sector}</StockCell>
                            <StockCell>{item.industry}</StockCell>
                        </StockRow>
                    )}
                </TableBody>
            </AriaTable>
        </div>
    )
}

function StockColumn<T extends object>(props: ColumnProps<T> & { children: ReactNode }) {
    return (
        <Column
            {...props}
            className="sticky top-0 cursor-pointer whitespace-nowrap border-b border-slate-300 bg-slate-200 px-4 py-2 text-left text-sm font-bold outline-none first:rounded-tl-lg last:rounded-tr-lg data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:-outline-offset-4 data-[focus-visible]:outline-slate-600"
        >
            {({ allowsSorting, sortDirection }) => (
                <span className="flex items-center">
                    {props.children}
                    {allowsSorting && (
                        <span aria-hidden="true" className="ml-1 h-4 w-4">
                            {sortDirection && (
                                <ArrowUpIcon
                                    className={`h-4 w-4 transition ${
                                        sortDirection === "descending" ? "rotate-180" : ""
                                    }`}
                                />
                            )}
                        </span>
                    )}
                </span>
            )}
        </Column>
    )
}

function StockRow<T extends object>(props: RowProps<T>) {
    return (
        <Row
            {...props}
            className="group cursor-default outline-none even:bg-slate-100 aria-selected:bg-slate-600 aria-selected:text-white data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:-outline-offset-4 data-[focus-visible]:outline-slate-600 aria-selected:data-[focus-visible]:outline-white"
        />
    )
}

function StockCell(props: CellProps) {
    return (
        <Cell
            {...props}
            className={`px-4 py-2 text-sm ${props.className} data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:-outline-offset-4 data-[focus-visible]:outline-slate-600 group-aria-selected:data-[focus-visible]:outline-white`}
        />
    )
}
