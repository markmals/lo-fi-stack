import clsx from "clsx"
import type { TabPanelProps, TabProps } from "react-aria-components"
import { Tab, TabList, TabPanel, TabPanels, Tabs as AriaTabs } from "react-aria-components"

export function Tabs() {
    return (
        <AriaTabs>
            <TabList
                aria-label="Feeds"
                className="flex space-x-1 rounded-full border border-white/30 bg-green-900/40 bg-clip-padding p-1"
            >
                <MyTab id="blog">Blog</MyTab>
                <MyTab id="releases">Releases</MyTab>
                <MyTab id="docs">Docs</MyTab>
            </TabList>
            <TabPanels>
                <MyTabPanel id="blog">
                    <div className="flex flex-col">
                        <Article
                            title="Taming the dragon: Accessible drag and drop"
                            summary="We are excited to announce the release of drag and drop support in React Aria and React Spectrum! This includes a suite of hooks for implementing drag and drop interactions, with support for both mouse and touch, as well as full parity for keyboard and screen reader input."
                        />
                        <Article
                            title="Date and Time Pickers for All"
                            summary="We are very excited to announce the release of the React Aria and React Spectrum date and time picker components! This includes a full suite of fully featured components and hooks including calendars, date and time fields, and range pickers, all with a focus on internationalization and accessibility. It also includes @internationalized/date, a brand new framework-agnostic library for locale-aware date and time manipulation."
                        />
                        <Article
                            title="Creating an accessible autocomplete experience"
                            summary="After many months of research, development, and testing, we’re excited to announce that the React Spectrum ComboBox component and React Aria useComboBox hook are now available! In this post we'll take a deeper look into some of the challenges we faced when building an accessible and mobile friendly ComboBox."
                        />
                    </div>
                </MyTabPanel>
                <MyTabPanel id="releases">
                    <div className="flex flex-col">
                        <Article
                            title="February 23, 2023 Release"
                            summary="In this release, we have added support for Node ESM to all of our packages. We have also been busy at work on our pre-releases and improving our focus management in collections."
                        />
                        <Article
                            title="December 16, 2022 Release"
                            summary="It is our last release of the year and we are happy to share a new TableView feature, now in beta. Using the new allowsResizing prop on a Column in TableView gives users the ability to dynamically adjust the width of that column. TableView column resizing supports mouse, keyboard, touch, and screen reader interactions to allow all users to take advantage of a customizable table."
                        />
                        <Article
                            title="November 15, 2022 Release"
                            summary="We are excited to announce the release of drag and drop support in React Aria and React Spectrum! This includes a suite of hooks for implementing drag and drop interactions. There is also an update to all Spectrum colors, aligning React Spectrum with the latest Spectrum designs. Finally, React Aria includes a new simplified API for overlays such as popovers and modals."
                        />
                    </div>
                </MyTabPanel>
                <MyTabPanel id="docs">
                    <div className="flex flex-col">
                        <Article
                            title="React Stately"
                            summary="A library of React Hooks that provides cross-platform state management for your design system."
                        />
                        <Article
                            title="React Aria"
                            summary="A library of React Hooks that provides accessible UI primitives for your design system."
                        />
                        <Article
                            title="React Spectrum"
                            summary="A React implementation of Spectrum, Adobe’s design system."
                        />
                    </div>
                </MyTabPanel>
            </TabPanels>
        </AriaTabs>
    )
}

function MyTab(props: TabProps) {
    return (
        <Tab
            {...props}
            className={({ isSelected, isFocusVisible }) =>
                clsx(
                    "w-full cursor-pointer rounded-full py-2.5 text-center font-medium leading-5 outline-none ring-black transition-colors sm:text-sm",
                    isFocusVisible && "ring-2",
                    isSelected
                        ? "bg-white text-emerald-700 shadow"
                        : "text-lime-50 data-[hovered]:bg-white/[0.12] data-[pressed]:bg-white/[0.12] data-[hovered]:text-white data-[pressed]:text-white"
                )
            }
        />
    )
}

function MyTabPanel(props: TabPanelProps) {
    return (
        <TabPanel
            {...props}
            className="mt-2 rounded-2xl bg-white p-2 font-serif text-gray-700 shadow ring-black focus:outline-none data-[focus-visible]:ring-2"
        />
    )
}

namespace Article {
    export interface Props {
        title: string
        summary: string
    }
}

function Article({ title, summary }: Article.Props) {
    return (
        <a href="javascript:{}" className="h-[69px] rounded-lg p-2 hover:bg-gray-100">
            <h3 className="mb-0.5 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                {title}
            </h3>
            <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">{summary}</p>
        </a>
    )
}
