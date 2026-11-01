# Commands

```sh
pnpm install
pnpm start                 # Storybook on :6006
pnpm build-storybook       # static Storybook → storybook-static/
pnpm deploy-storybook      # build + gh-pages deploy
```

There is no library `build`/`publish` script — consumers transpile source via `exports` → `src/`.
