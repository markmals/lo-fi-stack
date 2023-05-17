import {
    Label,
    Slider as AriaSlider,
    SliderOutput,
    SliderThumb,
    SliderTrack,
} from "react-aria-components"

export function Slider() {
    return (
        <AriaSlider defaultValue={30} className="w-5/6">
            <div className="flex sm:text-sm">
                <Label className="flex-1">Opacity</Label>
                <SliderOutput />
            </div>
            <SliderTrack className="relative h-7 w-full">
                {state => (
                    <>
                        <div className="absolute top-[50%] h-2 w-full translate-y-[-50%] transform rounded-full bg-white bg-opacity-40" />
                        <div
                            className="absolute top-[50%] h-2 translate-y-[-50%] transform rounded-full bg-white"
                            style={{ width: state.getThumbPercent(0) * 100 + "%" }}
                        />
                        <SliderThumb className="top-[50%] h-7 w-7 cursor-grab rounded-full border border-purple-800/75 bg-white outline-none transition-colors data-[dragging]:cursor-grabbing data-[dragging]:bg-purple-100 data-[focus-visible]:ring-2 data-[focus-visible]:ring-black" />
                    </>
                )}
            </SliderTrack>
        </AriaSlider>
    )
}
