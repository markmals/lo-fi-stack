import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import type { ButtonProps } from "react-aria-components"
import {
    Button,
    Dialog,
    DialogTrigger,
    Heading,
    Modal as AriaModal,
    ModalOverlay,
} from "react-aria-components"
import { OverlayButton } from "../menu/OverlayButton"

export function Modal() {
    return (
        <DialogTrigger>
            <OverlayButton>Open dialog</OverlayButton>
            <ModalOverlay
                className={({ isEntering, isExiting }) =>
                    clsx(
                        "fixed inset-0 z-10 flex min-h-full items-center justify-center overflow-y-auto bg-black bg-opacity-25 p-4 text-center backdrop-blur",
                        isEntering && "animate-in fade-in fill-mode-forwards duration-300 ease-out",
                        isExiting && "animate-out fade-out fill-mode-forwards duration-200 ease-in"
                    )
                }
            >
                <AriaModal
                    className={({ isEntering, isExiting }) =>
                        clsx(
                            "w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl",
                            isEntering &&
                                "animate-in fade-in zoom-in-95 fill-mode-forwards duration-300 ease-out",
                            isExiting &&
                                "animate-out fade-out zoom-out-95 fill-mode-forwards duration-200 ease-in"
                        )
                    }
                >
                    <Dialog role="alertdialog" className="relative outline-none">
                        {({ close }) => (
                            <>
                                <Heading className="text-xl font-semibold leading-6 text-slate-700">
                                    Delete folder
                                </Heading>
                                <ExclamationTriangleIcon className="absolute right-0 top-0 h-6 w-6 stroke-2 text-red-500" />
                                <p className="mt-3 text-sm text-slate-500">
                                    Are you sure you want to delete "Documents"? All contents will
                                    be permanently destroyed.
                                </p>
                                <div className="mt-6 flex justify-end gap-2">
                                    <DialogButton
                                        className="bg-slate-200 text-slate-800 data-[hovered]:border-slate-300 data-[pressed]:bg-slate-300"
                                        onPress={close}
                                    >
                                        Cancel
                                    </DialogButton>
                                    <DialogButton
                                        className="bg-red-500 text-white data-[hovered]:border-red-600 data-[pressed]:bg-red-600"
                                        onPress={close}
                                    >
                                        Delete
                                    </DialogButton>
                                </div>
                            </>
                        )}
                    </Dialog>
                </AriaModal>
            </ModalOverlay>
        </DialogTrigger>
    )
}

function DialogButton({
    className,
    ...props
}: ButtonProps & React.RefAttributes<HTMLButtonElement>) {
    return (
        <Button
            {...props}
            className={`inline-flex cursor-pointer justify-center rounded-md border border-transparent px-5 py-2 text-sm font-medium outline-none transition-colors data-[focus-visible]:ring-2 data-[focus-visible]:ring-blue-500 data-[focus-visible]:ring-offset-2 ${className}`}
        />
    )
}
