export const SITE = {
    title: "Lo-Fi Stack",
    description: "Get Your Websites & Web Apps Up and Running Quickly with Remix",
    defaultLanguage: "en-us",
} as const

export type Sidebar = Record<string, { text: string; link: string }[]>
export type NewSidebar = Record<
    string,
    { collapsed: boolean; children: { text: string; link: string }[] }
>

export const SIDEBAR: Sidebar = {
    Introduction: [
        { text: "Getting Started", link: "intro/getting-started" },
        { text: "Why Lo-Fi Stack?", link: "intro/why-lofi" },
        // { text: "YouTube Tutorials", link: "intro/tutorials" },
        // { text: "Quick Links", link: "guides/quick-links" },
        { text: "Application Holotypes", link: "intro/holotypes" },
        { text: "FAQs", link: "intro/faqs" },
        { text: "UX & DX Opportunities", link: "intro/opportunities" },
    ],
    // Fundamentals: [
    //     { text: "Fundamentals", link: "fundamentals" },
    //     { text: "Learn HTML", link: "fundamentals/html" },
    //     { text: "Learn Forms", link: "fundamentals/forms" },
    //     { text: "Learn Accessibility", link: "fundamentals/a11y" },
    //     { text: "Learn CSS", link: "fundamentals/css" },
    //     { text: "Learn Images", link: "fundamentals/images" },
    //     { text: "Learn JavaScript", link: "fundamentals/javascript" },
    //     { text: "Learn TypeScript", link: "fundamentals/typescript" },
    //     { text: "Learn Fetch", link: "fundamentals/fetch" },
    //     { text: "Learn React", link: "fundamentals/react" },
    // ],
    // Basics: [
    //     { text: "Project Structure", link: "basics/project-structure" },
    //     { text: "Package Manager", link: "basics/npm" },
    //     { text: "Routing", link: "basics/routing" },
    //     { text: "Data Loading", link: "basics/loading" },
    //     { text: "Data Mutations", link: "basics/mutations" },
    //     { text: "Data Storage", link: "basics/databases" },
    //     { text: "Endpoints", link: "basics/endpoints" },
    //     { text: "Streaming HTML", link: "basics/streaming" },
    //     { text: "Markdown & MDX", link: "basics/markdown" },
    //     { text: "Missing Content", link: "basics/404s" },
    //     { text: "Deployment", link: "basics/deployment-adapters" },
    // ],
    Advanced: [
        // { text: "Optimistic Updates", link: "guides/optimistic-ui" },
        // { text: "Error Handling", link: "guides/error-handling" },
        // { text: "Authentication", link: "guides/auth" },
        // { text: "Form Validation", link: "guides/forms" },
        // { text: "File Uploads", link: "guides/file-uploads" },
        // { text: "Background & Cron Jobs", link: "guides/background-cron-jobs" },
        // { text: "Email Delivery", link: "guides/email" },
        // { text: "Realtime Updates", link: "guides/realtime" },
        // { text: "Edge Rendering", link: "guides/edge" },
        { text: "Serverless Data", link: "guides/serverless-db" },
        // { text: "PWA Capabilities", link: "guides/pwa" },
        // { text: "Native Apps", link: "guides/native" },
    ],
    // Tooling: [
    //     { text: "Editor", link: "tooling/editor" },
    //     { text: "Formatting & Linting", link: "tooling/formatting-linting" },
    //     { text: "Testing", link: "tooling/testing" },
    //     { text: "Design Systems", link: "tooling/design-systems" },
    //     { text: "Dev Tools", link: "guides/dev-tools" },
    //     { text: "Monorepos", link: "guides/monorepos" },
    //     { text: "Multi-Tenant Apps", link: "guides/multi-tenancy" },
    // ],
    // "User Interface": [
    //     { text: "React Aria Components", link: "guides/aria-components" },
    //     { text: "React Aria Hooks", link: "guides/aria-hooks" },
    //     { text: "Atomic Styling", link: "guides/atomic-css" },
    //     { text: "Modern CSS", link: "guides/modern-css" },
    //     { text: "Icons", link: "guides/icons" },
    //     { text: "Fonts", link: "guides/fonts" },
    //     { text: "Animation", link: "guides/animation" },
    // ],
    // Articles: [
    //     { text: "Stack Layouts", link: "articles/stack-layouts" },
    //     { text: "Search", link: "articles/search" },
    //     { text: "Pagination & Infinite Scrolling", link: "articles/pagnination" },
    //     { text: "Responsive Design", link: "articles/responsive" },
    //     { text: "Custom Fonts & Icons", link: "articles/fonts-icons" },
    //     { text: "Localization", link: "articles/localization" },
    //     { text: "Privacy", link: "articles/privacy" },
    // ],
}
