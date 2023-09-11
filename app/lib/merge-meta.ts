import type { V2_HtmlMetaDescriptor, V2_MetaFunction } from "@remix-run/node"

// TODO: How to strongly type these?
export const mergeMeta = (
    overrideFn: V2_MetaFunction<any, any>,
    appendFn?: V2_MetaFunction<any, any>
): V2_MetaFunction<any, any> => {
    return arg => {
        // get meta from parent routes
        let mergedMeta = arg.matches.reduce((acc, match) => {
            return acc.concat(match.meta || [])
        }, [] as V2_HtmlMetaDescriptor[])

        // replace any parent meta with the same name or property with the override
        let overrides = overrideFn(arg)
        for (let override of overrides) {
            let index = mergedMeta.findIndex(
                meta =>
                    ("name" in meta && "name" in override && meta.name === override.name) ||
                    ("property" in meta &&
                        "property" in override &&
                        meta.property === override.property) ||
                    ("title" in meta && "title" in override)
            )
            if (index !== -1) {
                mergedMeta.splice(index, 1, override)
            }
        }

        // append any additional meta
        if (appendFn) {
            mergedMeta = mergedMeta.concat(appendFn(arg))
        }

        return mergedMeta
    }
}
