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
        unstable_dev: true,
    },
}
