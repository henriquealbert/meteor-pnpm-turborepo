## Turborepo + PNPM Workspaces + Meteor

Known issues:

- You cannot use a single lockfile for your workspace. You must use a lockfile for each project. This is a limitation on MeteorJS.

`shared-workspace-lockfile=true` in `.npmrc` is not supported.

How to use:
`pnpm install` in the root of the workspace.
`pnpm run dev` in the root of the workspace.
