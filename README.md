# Remix Lo-Fi Stack

![The Remix Lo-Fi Stack](https://user-images.githubusercontent.com/39869007/204083687-88e86af6-c69b-4465-9212-4b6d8b634872.png)

Learn more about [Remix Stacks](https://remix.run/stacks).

```
npm init remix -- --template markmals/lo-fi-stack
```

## What's in the stack

-   [Preact](https://preactjs.com) UI runtime
-   Atomic styling with [Tailwind CSS](https://tailwindcss.com/)
    -   Support for [`theme()`, `screen()`, `@apply`, and `@layer` functions and directives](https://tailwindcss.com/docs/functions-and-directives)
-   Style processing with [PostCSS](https://postcss.org/)
    -   Default support for [build-time imports](https://github.com/postcss/postcss-import), [nesting](https://tailwindcss.com/docs/using-with-preprocessors#nesting), and [autoprefixer](https://github.com/postcss/autoprefixer)
-   Store and sync app data with [Cloud Firestore](https://firebase.google.com/products/firestore) using [Holocron](https://github.com/markmals/holocron-db)
-   Simple sign-in and account management with [Firebase Authentication](https://firebase.google.com/products/auth)
-   Deploy to [Fly.io](https://fly.io/)
-   Component stories with [Storybook](https://storybook.js.org)
-   Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
-   Code formatting with [Prettier](https://prettier.io)
-   Linting with [ESLint](https://eslint.org)
-   Git hooks with [Husky](https://typicode.github.io/husky)
-   Static types with [TypeScript](https://typescriptlang.org)
-   [Flat routing convention](https://github.com/kiliman/remix-flat-routes)
-   [Type-safe routing](https://github.com/yesmeck/remix-routes)
-   Reccomended [Visual Studio Code extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions)

Not a fan of bits of the stack? Fork it, change it, and use `npm init remix -- --template your/repo`! Make it your own.

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Firebase

### Setup

1. [Create a Firebase Project](https://console.firebase.google.com)
2. Enable Auth (with email) and Firestore
3. Add a Web App
4. Get the [admin-sdk](https://firebase.google.com/docs/admin/setup#initialize-sdk) and [Web Client Config Object](https://support.google.com/firebase/answer/7015592#web)
5. Save them to SERVICE_ACCOUNT and CLIENT_CONFIG in the `.env`-file

### Auth

#### `app/lib/firebase/auth.server.ts`

`signIn` returns a Firebase session-cookie-string, when sign-in is successfull. Then Remix `cookieSessionStorage` is used to set, read and destroy it.

`signUp` creates a user and calls sign-in to receive the session cookie.

`requireAuth` uses `firebase-admin` to verify the session cookie. When this check fails, it throws a `redirect` to the login page. Use this method to protect loaders and actions. The returned `UserRecord` can be handy to request or manipulate data from the Firestore for this user.

### Firestore

#### `app/lib/firebase/db.server.ts`

The default setup exports [Holocron](https://github.com/markmals/holocron-db) databases connected to Firestore collections.

Requests to the Firestore are made using the `firebase-admin`-SDK. You need to check validity of your requests manually, since `firestore.rules` don't apply to admin requests.

### Links

-   [Holocron docs](https://github.com/markmals/holocron-db)
-   [Firebase Session Cookies](https://firebase.google.com/docs/auth/admin/manage-cookies)
-   [Remix `cookieSessionStorage`](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)
-   [Remix Firebase example project](https://github.com/remix-run/examples/tree/main/firebase)

## Testing

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.

## Deploying

### Fly Setup

1. [Install `flyctl`](https://fly.io/docs/getting-started/installing-flyctl/)

2. Sign up and log in to Fly

```sh
flyctl auth signup
```

3. Setup Fly. It might ask if you want to deploy, say no since you haven't built the app yet.

```sh
flyctl launch
```

### Fly Deployment

Once you've followed the setup instructions, all you need to do is run this:

```sh
npm run deploy
```

You can run `flyctl info` to get the url and ip address of your server.

Check out the [fly docs](https://fly.io/docs/languages-and-frameworks/remix) for more information.

### Building a Static Site

This repo has been modified to add static site generation capabilities.

Ensure you have `wget` installed:

```sh
which wget
```

If not, install it:

```sh
brew install wget
```

To build your site statically, first do a normal build and boot the production server as shown above.

Then, in a separate terminal tab do:

```sh
npm run build-static
```

This will generate a `static` directory with the HTML files and assets you need to serve a fully hydrated Remix site. It uses `wget` to pull HTML, CSS, and JS from the server you have running in the other tab. It pulls all [the URLs listed in `static-urls.txt`](static-urls.txt). Once it completes, you can shut down the local server.

To test out your static build, run:

```sh
npm run serve-static
```

To deploy, just copy the `static` dir to your static hosting provider.

**IMPORTANT**

This isn't typically how Remix works (we usually have a server) so you'll want to note a few things about this setup:

-   `loader` still works (see `app/routes/one.tsx` and `app/routes/two.tsx`) so you can still grab data from the filesystem or from your database and put it into your markup via `useLoaderData`
-   Although the page is fully hydrated with React on it (we are still rendering the `<Scripts>` element in `app/root.tsx`) all navigation on the site should be done with a full document reload (using `<Link reloadDocument>`). This is because no server is running to be able to dynamically serve the data we need for the new route when we do a client-side transition to it. However, the data is already encoded in the HTML in the `static` output directory we generated in the `build-static` command.
-   Other features that require a server (like `action`) will not work.
