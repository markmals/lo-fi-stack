import { CheckCircleIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import { Label, Radio, RadioGroup as AriaRadioGroup } from "react-aria-components"

export function RadioGroup() {
    return (
        <AriaRadioGroup className="space-y-2" defaultValue="Standard">
            <Label className="font-serif text-xl font-semibold text-slate-900">Shipping</Label>
            <MyRadio name="Standard" time="4-10 business days" price="$4.99" />
            <MyRadio name="Express" time="2-5 business days" price="$15.99" />
            <MyRadio name="Lightning" time="1 business day" price="$24.99" />
        </AriaRadioGroup>
    )
}

namespace MyRadio {
    export interface Props {
        name: string
        time: string
        price: string
    }
}

function MyRadio({ name, time, price }: MyRadio.Props) {
    return (
        <Radio
            value={name}
            className={({ isFocusVisible, isSelected, isPressed }) =>
                clsx(
                    "relative flex cursor-pointer rounded-lg border border-transparent bg-clip-padding px-4 py-3 shadow-lg focus:outline-none",
                    isFocusVisible && "ring-2 ring-blue-600 ring-offset-1 ring-offset-white/80",
                    isSelected && "border-white/30 bg-blue-600 text-white",
                    isPressed && !isSelected && "bg-blue-50",
                    !isSelected && !isPressed && "bg-white"
                )
            }
        >
            {({ isSelected }) => (
                <div className="flex w-full items-center justify-between gap-3">
                    <div className="shrink-0">
                        <CheckCircleIcon
                            className={clsx("h-6 w-6", isSelected ? "text-white" : "text-blue-100")}
                        />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div
                            className={clsx(
                                "font-serif font-semibold",
                                isSelected ? "text-white" : "text-gray-900"
                            )}
                        >
                            {name}
                        </div>
                        <div
                            className={clsx(
                                "inline text-sm",
                                isSelected ? "text-sky-100" : "text-gray-500"
                            )}
                        >
                            {time}
                        </div>
                    </div>
                    <div
                        className={clsx(
                            "font-mono text-sm font-medium",
                            isSelected ? "text-white" : "text-gray-900"
                        )}
                    >
                        {price}
                    </div>
                </div>
            )}
        </Radio>
    )
}
