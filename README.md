# make-it-snow
### Adding some festive cheer to a website by making it snow. Ho-ho-ho. ###

#### If you already have the http-server package installed globally... ####

```shell
npm run start
```

#### And if you don't... ####

```shell
npm install
npm run start
```

Open your browser and go to: 
http://localhost:8181

### Options ###

| Attribute          | Type    | Options |
--------------------|---------|---|
| zIndex             | integer | negative and positive
| numberOfSnowflakes | number  | 1-10000 +
| width              | number  | 25-250
| directionBias | integer | [-1,0,1]
| step | number | [1-5]

directionBias is about making the snowflakes fall more to the left, right or vertically.

```js
import makeItSnow from "./make-it-snow.js";

const sizes = [25, 50, 100];

sizes.forEach((size) => {
  makeItSnow({ numberOfSnowflakes: 20, width: size, zIndex: 75 });
});
```


![index.html](screenshot.png)

