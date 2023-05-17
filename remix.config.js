/** @type {import("@remix-run/dev").AppConfig} */
export default {
    ignoredRouteFiles: ["**/.*"],
    serverModuleFormat: "esm",
    tailwind: true,
    postcss: true,
    future: {
        v2_meta: true,
        v2_routeConvention: true,
        v2_normalizeFormMethod: true,
        v2_errorBoundary: true,
        // unstable_dev: true,
    },
    async mdx() {
        const [remarkGFM, rehypePrettyCode, rehypeSlug] = await Promise.all([
            import("remark-gfm").then(mod => mod.default),
            import("rehype-pretty-code").then(mod => mod.default),
            import("rehype-slug").then(mod => mod.default),
        ])

        const options = {
            theme: {
                dark: "github-dark",
                light: "github-light",
            },
            // Keep the background or use a custom background color?
            keepBackground: false,
        }

        return {
            remarkPlugins: [remarkGFM],
            rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
        }
    },
}
