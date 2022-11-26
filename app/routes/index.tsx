// import { LinksFunction } from "@remix-run/node"
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
            src: "https://postcss.org/assets/postcss.83d93145.svg",
            alt: "PostCSS",
            href: "https://postcss.org/",
        },
        {
            src: "firebase.svg",
            alt: "Firebase",
            href: "https://firebase.google.com/",
        },
        {
            src: "storybook.svg",
            alt: "Storybook",
            href: "https://storybook.js.org/",
        },
        {
            src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
            alt: "Vitest",
            href: "https://vitest.dev",
        },
        {
            src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
            alt: "Testing Library",
            href: "https://testing-library.com",
        },
        {
            src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
            alt: "Prettier",
            href: "https://prettier.io",
        },
        {
            src: "npm.svg",
            alt: "npm",
            href: "npmjs.com",
        },
        {
            src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
            alt: "TypeScript",
            href: "https://typescriptlang.org",
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
            alt: "Visual Studio Code",
            href: "https://code.visualstudio.com",
        },
    ]

    return (
        <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
            <div className="relative sm:pb-16 sm:pt-8">
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
                                Check the README.md file for instructions on how to get this project
                                deployed.
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
                                class="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
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
