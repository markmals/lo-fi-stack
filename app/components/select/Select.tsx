import { ChevronUpDownIcon } from "@heroicons/react/20/solid"
import {
    Button,
    Label,
    ListBox,
    Popover,
    Select as AriaSelect,
    SelectValue,
} from "react-aria-components"
import { ListBoxItem } from "./ListBoxItem"

export function Select() {
    return (
        <AriaSelect className="flex w-5/6 flex-col gap-1">
            <Label className="text-sm">Favorite Animal</Label>
            <Button className="relative flex w-full cursor-pointer rounded-lg bg-white bg-opacity-90 py-2 pl-3 pr-2 text-left text-gray-700 shadow-md transition focus:outline-none data-[focus-visible]:border-indigo-500 data-[pressed]:bg-opacity-100 data-[focus-visible]:ring-2 data-[focus-visible]:ring-black sm:text-sm">
                <SelectValue className="flex-1 truncate data-[placeholder]:italic" />
                <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            </Button>
            <Popover className="data-[entering]:animate-in data-[entering]:fade-in data-[exiting]:animate-out data-[exiting]:fade-out fill-mode-forwards max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                <ListBox className="p-1 outline-none [--focus-bg:theme(colors.rose.600)]">
                    <ListBoxItem>Aardvark</ListBoxItem>
                    <ListBoxItem>Cat</ListBoxItem>
                    <ListBoxItem>Dog</ListBoxItem>
                    <ListBoxItem>Kangaroo</ListBoxItem>
                    <ListBoxItem>Panda</ListBoxItem>
                </ListBox>
            </Popover>
        </AriaSelect>
    )
}
