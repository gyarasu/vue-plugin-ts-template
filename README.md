# vue-plugin-ts-template
This is the npm package template to create and publish vue.js plugin by yourself.


## How to publish package on NPM?
### 0. Requirements
You need your [NPM](https://www.npmjs.com/) account to publish your own package.
If you don't have the account, let's register on NPM.

### 1. initialize
Run the command to initialize your package.

```bash
$ yarn init
```

There will be some questions as below.
- name
- version
- description
- entrypoint
- repository
- author
- license
- private

I recommend that you set `entrypoint` to `index.js`(default) because of default setting in `tsconfig.json`.

### 2. development
You can create your plugin in `src/`.

### 3. build
Run the command to build your typescript code.

```bash
$ yarn build
```

### 4. commit and create tag
Before publication, commit your code and create version tag on your repository.

### 5. Publication
Run the command to publish your package.

```bash
$ npm adduser 
$ npm publish ./
```

## Reference
- https://vuejs.org/v2/guide/plugins.html
