import { Item, ListBox, Text } from "react-aria-components"
import { useAsyncList } from "react-stately"

interface UnsplashImage {
    id: string
    alt_description: string
    urls: { regular: string }
    user: { name: string }
}

// TODO: we need a way to pass in a custom keyboard delegate so grid navigation works.
export function ImageGrid() {
    let list = useAsyncList<UnsplashImage>({
        async load({ signal, cursor }) {
            let page = cursor || 1
            let res = await fetch(
                `https://api.unsplash.com/photos?page=${page}&per_page=25&client_id=AJuU-FPh11hn7RuumUllp4ppT8kgiLS7LtOHp_sp4nc`,
                { signal }
            )
            let items = (await res.json()) as UnsplashImage[]
            return { items, cursor: String(Number(page) + 1) }
        },
    })

    return (
        <ListBox
            aria-label="Images"
            items={list.items}
            selectionMode="single"
            selectionBehavior="replace"
            className="grid max-h-[550px] grid-cols-6 gap-5 overflow-auto rounded-lg bg-white p-5 shadow outline-none"
        >
            {item => (
                <Item
                    textValue={item.user.name}
                    className="group cursor-default rounded outline-none"
                >
                    <img
                        src={item.urls.regular}
                        alt={item.alt_description}
                        className="h-[80px] w-full rounded object-cover group-aria-selected:ring-2 group-aria-selected:ring-sky-600 group-aria-selected:ring-offset-2"
                    />
                    <Text
                        slot="label"
                        className="mt-1 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-semibold text-gray-700"
                    >
                        {item.user.name}
                    </Text>
                </Item>
            )}
        </ListBox>
    )
}
