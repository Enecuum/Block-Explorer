# Enecuum explorer &alpha;lpha

### Usage


#### install dependencies
``` bash
npm install
```
  
##### serve with hot reload at localhost:8080 and BootNode address API_URL - ws://127.0.0.1:1554
```bash
npm run dev 
```

##### serve with hot reload at localhost:8080 and set current BootNode address API_URL
```bash
API_URL=ws://host:port npm run dev 
```

#### build for production with minification and BootNode address API_URL - ws://127.0.0.1:1554
```bash
npm run build
```
and configure root path for static web server to `dist/`

#### build for production and set current BootNode address API_URL
```bash
API_URL=ws://host:port npm run build
```

#### build for production and view the bundle analyzer report
```bash
npm run build --report
```

