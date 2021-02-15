# React Front-end test of [Jüssi](https://jussi.com.br/)

Please, follow the above comands to run, start, test or build the application.

The page will be served by http://localhost:3000/loja-vtex-jussi as it needs this parameter to be acessed by Github Pages. You can access the deployed version at https://aderbalfilho.github.io/loja-vtex-jussi/

### Project setup

```shell
yarn
```

### Compiles and hot-reloads for development

```shell
yarn start
```

### Compiles and minifies for production

```shell
yarn build
```

### Run the unit tests

```shell
yarn test
```

### Design System

I've tried to do something similar to a Design System in the ui folder, inside components.

### Search

I found no good open search API for products, so I've used the [`openfoodfacts`](https://world.openfoodfacts.org/data) one. To request data you'll need to search for an `barcode`, a very popular one, preferentially from an EUA product, the result will be shown in the console. Here some of them:

- 737628064502
- 051500720011
- 051500700303
