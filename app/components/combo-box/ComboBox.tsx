import { ChevronUpDownIcon } from "@heroicons/react/20/solid"
import {
    Button,
    ComboBox as AriaComboBox,
    Input,
    Label,
    ListBox,
    Popover,
} from "react-aria-components"
import { ListBoxItem } from "../select/ListBoxItem"

export function ComboBox() {
    return (
        <AriaComboBox className="flex w-5/6 flex-col gap-1">
            <Label className="text-sm text-black">Favorite Animal</Label>
            <div className="relative w-full cursor-pointer overflow-hidden rounded-lg bg-white bg-opacity-90 text-left shadow-md transition focus-within:bg-opacity-100 sm:text-sm [&:has([data-focus-visible])]:ring-2 [&:has([data-focus-visible])]:ring-black">
                <Input className="w-full border-none bg-transparent py-2 pl-3 pr-10 leading-5 text-gray-900 outline-none sm:text-sm" />
                <Button className="absolute inset-y-0 right-0 flex cursor-pointer items-center border-l border-l-sky-200 px-2 transition data-[pressed]:bg-sky-100">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </Button>
            </div>
            <Popover className="data-[exiting]:animate-out data-[exiting]:fade-out fill-mode-forwards max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 duration-100 ease-in sm:text-sm">
                <ListBox className="p-1 outline-none [--focus-bg:theme(colors.sky.600)]">
                    <ListBoxItem>Aardvark</ListBoxItem>
                    <ListBoxItem>Cat</ListBoxItem>
                    <ListBoxItem>Dog</ListBoxItem>
                    <ListBoxItem>Kangaroo</ListBoxItem>
                    <ListBoxItem>Panda</ListBoxItem>
                </ListBox>
            </Popover>
        </AriaComboBox>
    )
}
