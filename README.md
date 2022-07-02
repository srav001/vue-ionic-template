# A Production Ready Starter Template

Well I think the title says it all. This is a starter template aimed to be used at apps that will go into production release. It has eslint, prettier and ionic added to it, so that not only does linting and formatting like most projects but also can be made a mobile app when needed with capacitor.

-   `It uses the latest tech in vue ecosystem. For example pinia for store and vite for building.` [Click here for more info](https://twitter.com/youyuxi/status/1464058813649088516?lang=en)

## Why Bootstrap and Tailwind together ?

Simple, I think bootstrap's grid is most superior in terms of functionality compared to rest like bulma. At the same time it is easy to use. That is why only the grid system from Bootstrap is used.

### Then why tailwind also ?

As given in the example you can write all your classes in a stylesheet with `@apply` added to a class and use it. Thus keeping your html clean ( Alot people hate that about tailwind, when your html is filled with classes).

### So then why use Tailwind instead of writing css as it is instead of tailwind classes ?

When there are more than 1 person working on project, maintaining a structure or format for classes and variables can be difficult. By using tailwind classes in your stylesheet ( or directly in your HTML ) it makes it easy. Plus tailwind has excellent documentation.

## Why use this template ?

-   You might don't want to go through the hassle of setting up linter, formatter, router, store etc and still want the [latest vue](https://twitter.com/youyuxi/status/1464058813649088516?lang=en) has to offer ( All of it is setup ).
-   If you use the ionic components as your base for components, in future you can build your web app as an android or ios app with capacitor.
-   You can remove - all capacitor dependencies from `package.json` and `capacitor.config.js` to get all other features except build a mobile app.
-   Husky is setup and is being used for commit linting.
-   Eslint for linting and prettier for formatting files.
-   Vite is used for superior dev experience..

###

Note:

> This project will be updated bi-yearly, updating all dependencies to the latest version and maybe even replace some tech for newer and better ones or remove deprecated ones.

-   ` Examples are included for the most common ones and rest is left for developer decision.`

## Custom Scripts:

```
pnpm project-setup: 'Runs pnpm install and setups up husky for commit linting'
pnpm lint: 'Runs eslint in src directory and fixes all autofixeable errors'
pnpm format: 'Runs src directory through prettier and formats all files and'
```
