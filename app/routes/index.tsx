// import type { LinksFunction } from "@remix-run/node"
// import { Button, links as buttonLinks } from "~/components/button"

// export const links: LinksFunction = () => [...buttonLinks()]

export default function Index() {
    const technologies = [
        {
            src: "preact.svg",
            alt: "Preact",
            href: "https://preactjs.com/",
        },
        {
            src: "tailwind.svg",
            alt: "Tailwind",
            href: "https://tailwindcss.com",
        },
        {
            src: "postcss.svg",
            alt: "PostCSS",
            href: "https://postcss.org/",
        },
        {
            src: "fly-io.svg",
            alt: "Fly.io",
            href: "https://fly.io",
        },
        {
            src: "firebase.svg",
            alt: "Firebase",
            href: "https://firebase.google.com/",
        },
        // {
        //     src: "headlessui.svg",
        //     alt: "Headless UI",
        //     href: "https://headlessui.com",
        // },
        // {
        //     src: "framer-motion.webp",
        //     alt: "Framer Motion",
        //     href: "https://www.framer.com/motion",
        // },
        {
            src: "storybook.svg",
            alt: "Storybook",
            href: "https://storybook.js.org",
        },
        {
            src: "prettier.svg",
            alt: "Prettier",
            href: "https://prettier.io",
        },
        {
            src: "eslint.svg",
            alt: "ESLint",
            href: "https://eslint.org",
        },
        {
            src: "vitest.svg",
            alt: "Vitest",
            href: "https://vitest.dev",
        },
        {
            src: "testing-library.png",
            alt: "Testing Library",
            href: "https://testing-library.com",
        },
        {
            src: "npm.svg",
            alt: "npm",
            href: "https://npmjs.com",
        },
        {
            src: "typescript.svg",
            alt: "TypeScript",
            href: "https://typescriptlang.org",
        },
        {
            src: "vscode.svg",
            alt: "Visual Studio Code",
            href: "https://code.visualstudio.com",
        },
    ]

    return (
        <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
            <div className="relative pb-10 sm:pb-16 sm:pt-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                        <div className="absolute inset-0">
                            <img
                                class="h-full w-full object-cover"
                                src="https://i.kym-cdn.com/photos/images/original/001/760/307/555.jpg"
                                alt="LoFi Girl"
                            />
                            <div class="absolute inset-0 bg-[color:rgba(20,184,166,0.65)] mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
                            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                                <span className="block uppercase text-teal-500 drop-shadow-md">
                                    Lo-Fi Stack
                                </span>
                            </h1>
                            <p class="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                                Check the{" "}
                                <a
                                    class="text-teal-500 shadow-md hover:underline"
                                    href="https://github.com/markmals/lo-fi-stack/blob/main/README.md"
                                >
                                    README.md
                                </a>{" "}
                                file for instructions on how to get this project deployed.
                            </p>
                            <a href="https://remix.run">
                                <img
                                    src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                                    alt="Remix"
                                    class="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
                    <div class="mt-6 flex flex-wrap justify-center gap-8">
                        {technologies.map(img => (
                            <a
                                key={img.href}
                                href={img.href}
                                target="_blank"
                                class="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                                rel="noreferrer"
                            >
                                <img alt={img.alt} src={img.src} class="object-contain" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
