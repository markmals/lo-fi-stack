const { flatRoutes } = require("remix-flat-routes")

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    // Ignore all files in routes folder to prevent
    // default Remix convention from picking up routes
    ignoredRouteFiles: ["**/*"],
    routes: async defineRoutes => {
        return flatRoutes("routes", defineRoutes, {
            // We still want to ignore dotfiles
            ignoredRouteFiles: ["**/.*"],
        })
    },
}
