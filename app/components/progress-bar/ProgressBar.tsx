import { Label, ProgressBar as AriaProgressBar } from "react-aria-components"

export function ProgressBar() {
    return (
        <AriaProgressBar value={30} className="flex w-56 flex-col gap-3 text-sm">
            {({ percentage, valueText }) => (
                <>
                    <div className="flex">
                        <Label className="flex-1">Loading…</Label>
                        <span>{valueText}</span>
                    </div>
                    <div className="top-[50%] h-2 w-full translate-y-[-50%] transform rounded-full bg-white bg-opacity-40">
                        <div
                            className="absolute top-[50%] h-2 translate-y-[-50%] transform rounded-full bg-white"
                            style={{ width: percentage + "%" }}
                        />
                    </div>
                </>
            )}
        </AriaProgressBar>
    )
}
