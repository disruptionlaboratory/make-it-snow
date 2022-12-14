import makeItSnow from "./make-it-snow.js";

const sizes = [25, 50, 100];

sizes.forEach((size) => {
  makeItSnow({ numberOfSnowflakes: 20, width: size, zIndex: 75 });
});
