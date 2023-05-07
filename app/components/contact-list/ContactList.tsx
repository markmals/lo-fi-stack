import type { JSXElementConstructor, ReactElement, ReactNode } from "react"
import { Collection, Header, Item, ListBox, Section, Text } from "react-aria-components"
import { people } from "../popover/people"

export function ContactList() {
    return (
        <ListBox
            aria-label="Contacts"
            selectionMode="multiple"
            selectionBehavior="replace"
            className="flex max-h-[290px] w-72 scroll-pt-6 flex-col gap-2 overflow-auto rounded-lg bg-white p-2 text-gray-700 shadow outline-none"
        >
            <ContactSection title="Favorites">
                <Contact
                    id="wade"
                    name="Tony Baldwin"
                    handle="@tony"
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
                <Contact
                    id="arelene"
                    name="Julienne Langstrath"
                    handle="@jlangstrath"
                    avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
                <Contact
                    id="tom"
                    name="Roberto Gonzalez"
                    handle="@rgonzalez"
                    avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
            </ContactSection>
            <ContactSection title="All Contacts" items={people}>
                {item => <Contact name={item.name} handle={item.username} avatar={item.avatar} />}
            </ContactSection>
        </ListBox>
    )
}

namespace ContactSection {
    export interface Props<T extends object[]> {
        title: string
        items?: T
        children?:
            | ReactNode
            | ((item: T[number]) => ReactElement<any, string | JSXElementConstructor<any>>)
    }
}

function ContactSection<T extends object[]>({ title, children, items }: ContactSection.Props<T>) {
    return (
        <Section>
            <Header className="sticky -top-2 z-10 mb-1 bg-white px-2 font-serif text-sm font-bold text-slate-700">
                {title}
            </Header>
            <Collection items={items}>{children}</Collection>
        </Section>
    )
}

namespace Contact {
    export interface Props {
        id?: string
        avatar: string
        name: string
        handle: string
    }
}

function Contact({ id, avatar, name, handle }: Contact.Props) {
    return (
        <Item
            id={id}
            textValue={name}
            className="group peer relative grid cursor-pointer auto-cols-max grid-flow-col grid-rows-2 gap-x-3 rounded px-2 py-1 text-sm text-slate-700 outline-none ring-blue-500 ring-offset-2 aria-selected:bg-blue-500 aria-selected:text-white aria-selected:peer-aria-selected:rounded-t-none data-[focus-visible]:ring-2 aria-selected:[&:has(+[aria-selected=true])]:rounded-b-none [&[aria-selected=false]:has(+[aria-selected=false])_.divider]:block [&[aria-selected=true]:has(+[aria-selected=true])_.divider]:block"
        >
            <img
                src={avatar}
                alt=""
                className="row-span-2 h-8 w-8 place-self-center rounded-full"
            />
            <Text slot="label" className="truncate font-medium">
                {name}
            </Text>
            <Text
                slot="description"
                className="truncate text-xs text-slate-600 group-aria-selected:text-white"
            >
                {handle}
            </Text>
            <div className="divider absolute bottom-0 left-12 right-2 hidden h-px bg-gray-200 group-aria-selected:bg-blue-400" />
        </Item>
    )
}
