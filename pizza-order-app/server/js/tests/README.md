 # Jest + bable-jest(to transform es6 for jest) config 
[Commit for set-up](https://github.com/hardiksf/front-end-challenges/commit/102ca465834035f75d9e0b5c4e99a8a8f268d20a)

- Install `jest`
- Add Jest configuration; this can be added in `package.json`
```
    "jest": {
        "verbose": true,
        "transform": {
            "^.+\\.js$": "babel-jest"
        }
    },
```
    - `transform` option is for transforming es6 in test

Jest is linked to node and it doesn't transform es6 and followings are needed to transform test return in es5
- Install `babel-jest` and `babel-preset-es2015`
- Add `.babelrc` file
```
{
    "presets": ["es2015"]
}
```
