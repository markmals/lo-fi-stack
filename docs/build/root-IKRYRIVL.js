import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-WAKR6VHE.js";
import {
  o
} from "/build/_shared/chunk-463ARVA7.js";

// app/lib/helpers.ts
var createStyleLink = (href) => ({
  rel: "stylesheet",
  href
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-DXOYATQN.css";

// app/root.tsx
var links = () => [createStyleLink(tailwind_default)];
var meta = () => ({
  charset: "utf-8",
  title: "Remix Lo-Fi Stack",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ o("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ o("head", {
        children: [
          /* @__PURE__ */ o(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 19,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ o(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 20,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ o("body", {
        children: [
          /* @__PURE__ */ o(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 23,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ o(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 24,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ o(Scripts, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 25,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ o(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 26,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-IKRYRIVL.js.map
