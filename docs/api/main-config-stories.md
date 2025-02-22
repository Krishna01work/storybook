---
title: 'stories'
---

(**Required**)

Parent: [main.js|ts configuration](./main-config.md)

Type:

```ts
| (string | StoriesSpecifier)[]
| async (list: (string | StoriesSpecifier)[]) => (string | StoriesSpecifier)[]
```

Configures Storybook to load stories from the specified locations. The intention is for you to colocate a story file along with the component it documents:

```
•
└── components
    ├── Button.ts
    └── Button.stories.ts
```

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/main-config-stories.js.mdx',
    'common/main-config-stories.ts.mdx',
  ]}
/>

<!-- prettier-ignore-end -->

<Callout variant="info" icon="💡">

If you want to use a different naming convention, you can alter the glob using the syntax supported by [picomatch](https://github.com/micromatch/picomatch#globbing-features).

Keep in mind that some addons may assume Storybook's default naming convention.

</Callout>

## With an array of globs

Storybook will load stories from your project as found by this array of globs (pattern matching strings).

Stories are loaded in the order they are defined in the array. This allows you to control the order in which stories are displayed in the sidebar:

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/main-config-stories-ordered.js.mdx',
    'common/main-config-stories-ordered.ts.mdx',
  ]}
/>

<!-- prettier-ignore-end -->

## With a configuration object

Additionally, you can customize your Storybook configuration to load your stories based on a configuration object. This object is of the type `StoriesSpecifier`, defined below.

For example, if you wanted to load your stories from a `packages/components` directory, you could adjust your `stories` configuration field into the following:

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/main-config-stories-with-object.js.mdx',
    'common/main-config-stories-with-object.ts.mdx',
  ]}
/>

<!-- prettier-ignore-end -->

When Storybook starts, it will look for any file containing the `stories` extension inside the `packages/components` directory and generate the titles for your stories.

### `StoriesSpecifier`

Type:

```ts
{
  directory: string;
  files?: string;
  titlePrefix?: string;
}
```

#### `StoriesSpecifier.directory`

(**Required**)

Type: `string`

Where to start looking for story files, relative to the root of your project.

#### `StoriesSpecifier.files`

Type: `string`

Default: `'**/*.@(mdx|stories.@(mdx|js|jsx|mjs|ts|tsx))'`

A glob, relative to `StoriesSpecifier.directory` (with no leading `./`), that matches the filenames to load.

#### `StoriesSpecifier.titlePrefix`

Type: `string`

Default: `''`

When [auto-titling](../configure/sidebar-and-urls.md#csf-30-auto-titles), prefix used when generating the title for your stories.

## With a custom implementation

<Callout variant="info" icon="💡">

💡 Storybook now statically analyzes the configuration file to improve performance. Loading stories with a custom implementation may de-optimize or break this ability.

</Callout>

You can also adjust your Storybook configuration and implement custom logic to load your stories. For example, suppose you were working on a project that includes a particular pattern that the conventional ways of loading stories could not solve. In that case, you could adjust your configuration as follows:

<!-- prettier-ignore-start -->

<CodeSnippets
  paths={[
    'common/main-config-stories-with-logic.js.mdx',
    'common/main-config-stories-with-logic.ts.mdx',
  ]}
/>

<!-- prettier-ignore-end -->
