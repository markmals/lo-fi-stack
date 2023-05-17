import { BellIcon } from "@heroicons/react/20/solid"
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"
import type { PopoverProps } from "react-aria-components"
import { Dialog, DialogTrigger, OverlayArrow, Popover as AriaPopover } from "react-aria-components"
import { OverlayButton } from "../menu/OverlayButton"
import { people } from "./people"

export function Popover() {
    return (
        <DialogTrigger>
            <OverlayButton aria-label="Notifications">
                <BellIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </OverlayButton>
            <MyPopover className="group w-[280px] data-[placement=bottom]:mt-2 data-[placement=top]:mb-2">
                <OverlayArrow>
                    <svg
                        viewBox="0 0 12 12"
                        className="block h-4 w-4 fill-white group-data-[placement=bottom]:rotate-180"
                    >
                        <path d="M0 0,L6 6,L12 0" />
                    </svg>
                </OverlayArrow>
                <Dialog className="p-2 text-gray-700 outline-none">
                    <div className="flex flex-col">
                        <Notification
                            avatar={people[4].avatar}
                            name={people[4].name}
                            time="2h"
                            text="This looks great! Let's ship it."
                        />
                        <Notification
                            avatar={people[1].avatar}
                            name={people[1].name}
                            time="4h"
                            text="Can you add a bit more pizzazz?"
                        />
                        <Notification
                            avatar={people[6].avatar}
                            name={people[6].name}
                            time="1d"
                            text="Here's a first pass. What do you think?"
                        />
                    </div>
                </Dialog>
            </MyPopover>
        </DialogTrigger>
    )
}

export function MyPopover(props: PopoverProps & React.RefAttributes<HTMLElement>) {
    return (
        <AriaPopover
            {...props}
            className={({ isEntering, isExiting }) => `
        rounded-lg bg-white px-4 ring-1 ring-black/10 drop-shadow-lg sm:px-0 ${
            props.className || ""
        }
        ${
            isEntering
                ? "animate-in fade-in data-[placement=bottom]:slide-in-from-top-1 data-[placement=top]:slide-in-from-bottom-1 fill-mode-forwards duration-200 ease-out"
                : ""
        }
        ${
            isExiting
                ? "animate-out fade-out data-[placement=bottom]:slide-out-to-top-1 data-[placement=top]:slide-out-to-bottom-1 fill-mode-forwards duration-150 ease-in"
                : ""
        }
      `}
        />
    )
}

namespace Notification {
    export interface Props {
        avatar: string
        name: string
        time: string
        text: string
    }
}

function Notification({ avatar, name, time, text }: Notification.Props) {
    return (
        <a
            href="javascript:{}"
            className="grid grid-cols-[theme(width.5)_1fr_theme(width.4)] gap-x-2 rounded-lg p-2 hover:bg-gray-100"
        >
            <img alt="" src={avatar} className="row-span-3 h-5 w-5 rounded-full" />
            <div className="text-sm font-semibold text-gray-800">{name}</div>
            <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4 stroke-2 text-gray-400" />
            <div className="col-span-2 text-xs text-gray-500">Commented {time} ago</div>
            <p className="col-span-2 mt-1 line-clamp-2 overflow-hidden text-ellipsis text-xs">
                {text}
            </p>
        </a>
    )
}
