import { ChevronLeftIcon, ChevronRightIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import {
    Button,
    Calendar,
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHeader,
    CalendarHeaderCell,
    DateInput,
    DatePicker as AriaDatePicker,
    DateSegment,
    Dialog,
    Group,
    Heading,
    Label,
} from "react-aria-components"
import { MyPopover } from "../popover/Popover"

export function DatePicker() {
    return (
        <AriaDatePicker className="flex w-5/6 flex-col gap-1">
            <Label className="text-sm">Date</Label>
            <Group className="flex rounded-lg bg-white/90 pl-3 text-left text-gray-700 shadow-md transition focus-within:bg-white focus:outline-none data-[focus-visible]:ring-black [&:has([data-pressed])]:bg-white data-[focus-visible]:[&:not(:has(button[data-focus-visible]))]:ring-2">
                <DateInput className="input flex flex-1 py-2 sm:text-sm">
                    {segment => (
                        <DateSegment
                            segment={segment}
                            className="group box-content rounded-sm px-0.5 text-right tabular-nums caret-transparent outline-none focus:bg-violet-700 focus:text-white data-[placeholder]:italic"
                        />
                    )}
                </DateInput>
                <Button className="cursor-pointer rounded-r-lg border-l border-l-purple-200 px-2 outline-none transition data-[pressed]:bg-purple-100 data-[focus-visible]:ring-2 data-[focus-visible]:ring-black">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </Button>
            </Group>
            <MyPopover>
                <Dialog className="p-6 text-gray-600">
                    <Calendar>
                        <header className="flex w-full items-center px-1 pb-4 font-serif">
                            <Heading className="ml-2 flex-1 text-2xl font-semibold" />
                            <Button
                                slot="previous"
                                className="ml-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full outline-none data-[hovered]:bg-gray-100 data-[pressed]:bg-gray-200 data-[focus-visible]:ring data-[focus-visible]:ring-violet-600 data-[focus-visible]:ring-opacity-70 data-[focus-visible]:ring-offset-2"
                            >
                                <ChevronLeftIcon className="h-6 w-6" />
                            </Button>
                            <Button
                                slot="next"
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full outline-none data-[hovered]:bg-gray-100 data-[pressed]:bg-gray-200 data-[focus-visible]:ring data-[focus-visible]:ring-violet-600 data-[focus-visible]:ring-opacity-70 data-[focus-visible]:ring-offset-2"
                            >
                                <ChevronRightIcon className="h-6 w-6" />
                            </Button>
                        </header>
                        <CalendarGrid className="border-separate border-spacing-1">
                            <CalendarGridHeader>
                                {day => (
                                    <CalendarHeaderCell className="text-xs font-semibold text-gray-500">
                                        {day}
                                    </CalendarHeaderCell>
                                )}
                            </CalendarGridHeader>
                            <CalendarGridBody>
                                {date => (
                                    <CalendarCell
                                        date={date}
                                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-sm outline-none data-[hovered]:bg-gray-100 data-[pressed]:bg-gray-200 data-[selected]:bg-violet-700 data-[selected]:data-[hovered]:bg-violet-700 data-[outside-month]:text-gray-300 data-[selected]:text-white data-[focus-visible]:ring data-[focus-visible]:ring-violet-600 data-[focus-visible]:ring-opacity-70 data-[focus-visible]:ring-offset-2"
                                    />
                                )}
                            </CalendarGridBody>
                        </CalendarGrid>
                    </Calendar>
                </Dialog>
            </MyPopover>
        </AriaDatePicker>
    )
}
