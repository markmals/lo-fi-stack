import { Link } from "@remix-run/react"

const technologies = [
    {
        src: "react.svg",
        alt: "React",
        href: "https://react.dev",
    },
    {
        src: "tailwind.svg",
        alt: "Tailwind",
        href: "https://tailwindcss.com",
    },
    {
        src: "postcss.svg",
        alt: "PostCSS",
        href: "https://postcss.org",
    },
    {
        src: "vercel.svg",
        alt: "Vercel",
        href: "https://vercel.com/docs/frameworks/remix",
    },
    {
        src: "postgres.svg",
        alt: "PostgreSQL",
        href: "https://vercel.com/docs/storage/vercel-postgres/quickstart",
    },
    {
        src: "prisma.svg",
        alt: "Prisma",
        href: "https://www.prisma.io",
    },
    {
        src: "react-aria.svg",
        alt: "React Aria",
        href: "https://react-spectrum.adobe.com/react-aria/react-aria-components.html",
    },
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

export default function Index() {
    return (
        <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
            <div className="relative pb-10 sm:pb-16 sm:pt-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="https://i.kym-cdn.com/photos/images/original/001/760/307/555.jpg"
                                alt="LoFi Girl"
                            />
                            <div className="absolute inset-0 bg-[color:rgba(20,184,166,0.65)] mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
                            <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                                <span className="block font-montserrat uppercase text-teal-500 drop-shadow-md">
                                    Lo-Fi Stack
                                </span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                                Check out the{" "}
                                <Link
                                    className="text-teal-500 shadow-md hover:underline"
                                    to="/docs/intro/getting-started"
                                >
                                    documentation
                                </Link>{" "}
                                for instructions on how to get started.
                            </p>
                            <a href="https://remix.run">
                                <img
                                    src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                                    alt="Remix"
                                    className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
                    <div className="mt-6 flex flex-wrap justify-center gap-8">
                        {technologies.map(img => (
                            <a
                                key={img.href}
                                href={img.href}
                                target="_blank"
                                className={`flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0 ${
                                    img.src === "vercel.svg" && "opacity-40 hover:opacity-100"
                                }`}
                                rel="noreferrer"
                            >
                                <img alt={img.alt} src={img.src} className="object-contain" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
