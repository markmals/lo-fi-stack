# Remix Lo-Fi Stack

![The Remix Lo-Fi Stack](https://user-images.githubusercontent.com/39869007/204083687-88e86af6-c69b-4465-9212-4b6d8b634872.png)

Learn more about [Remix Stacks](https://remix.run/stacks).

```
npm init remix -- --template markmals/lo-fi-stack
```

## What's in the stack

-   [x] [Preact](https://preactjs.com) UI runtime
-   [x] Atomic styling with [Tailwind CSS](https://tailwindcss.com/)
    -   [x] Support for [`theme()`, `screen()`, `@apply`, and `@layer` functions and directives](https://tailwindcss.com/docs/functions-and-directives)
-   [x] Style processing with [PostCSS](https://postcss.org/)
    -   [x] Default support for [build-time imports](https://github.com/postcss/postcss-import), [nesting](https://tailwindcss.com/docs/using-with-preprocessors#nesting), and [autoprefixer](https://github.com/postcss/autoprefixer)
-   [ ] Optionally add UI libraries, such as Headless UI, TanStack Table, and Framer Motion
-   [ ] Firebase Firestore
-   [ ] Firebase Authentication
-   [ ] Deploy to Fly.io
-   [x] Component library stories with [Storybook](https://storybook.js.org)
-   [x] Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
-   [x] Code formatting with [Prettier](https://prettier.io)
-   [ ] Linting with [ESLint](https://eslint.org)
-   [x] Static types with [TypeScript](https://typescriptlang.org)
-   [x] [Flat routing convention](https://github.com/kiliman/remix-flat-routes)
-   [x] Reccomended VS Code extensions

Not a fan of bits of the stack? Fork it, change it, and use `npm init remix -- --template your/repo`! Make it your own.

## Development

-   This step only applies if you've opted out of having the CLI install dependencies for you:

    ```sh
    npx remix init
    ```

-   Validate the app has been set up properly (optional):

    ```sh
    npm run validate
    ```

-   Start dev server:

    ```sh
    npm run dev
    ```

This starts your app in development mode, rebuilding assets on file changes.

## Testing

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
