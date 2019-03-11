- Install `jest`

Jest is linked to node and it doesn't transform es6 and followings are needed to transform test return in es5.

From https://jestjs.io/docs/en/getting-started,
- Install `babel-jest @babel/core @babel/preset-env`
- Add `babel.config.js` file
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

To run,
- Add following scritp in `package.json`
```
"test": "jest"
```
- `npm jest`
