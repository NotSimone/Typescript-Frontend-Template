# Typescript Front End Template

Based on npm and webpack.

Quick start for Typescript frontend development with jQuery and Bootstrap.

- After cloning, run `npm install` to get the packages required.
- Build with `npm run build` or the VSCode debug interface.
- Debug with the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension.
- Use the copy-webpack-plugin configured in `webpack.config.js` to copy in any post-build files (e.g. css files).



package.json:
- Node/npm package management.
- Required for typescript to find the required modules.
- We don't actually use node, but installing it gives us npm.

tsconfig.json:
- Controls the typescript transpilation.

webpack.config.js:
- Webpack takes all the imported modules and packs them into a single js file.
- Configured to also copy the css files from the node_modules folder on build to simplify updating.