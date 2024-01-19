# pnpm + aspect-build/rules_js example monorepo
Example of https://github.com/aspect-build/rules_js/issues/1448

`a` is a TS project that depends on the `b/proto` project 

See comment in `/b/proto/BUILD.bazel` to fix the issue by setting the npm_package name attribute equal to the default target

