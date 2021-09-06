## Project setup
```
yarn install
```

### set env
```
export VUE_APP_STARCOIN_FAUCET_API_DOMAIN=http://localhost:8000
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### history mode

nginx
```
location / {
  try_files $uri $uri/ /index.html;
}
```

[history mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html) 
