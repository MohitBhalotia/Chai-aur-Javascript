//  Immediately Invoked Function expression

// Named IIFE
(function chai() {
  console.log("DB Connected");
})();

// Un-named IIFE
((name) => {
  console.log(`DB Connected, ${name}`);
})("hitesh");
