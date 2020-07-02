module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@core":"./src/core",
            "@shared":"./src/shared",
            "@modules": "./src/modules",
            "@img":"./assests/img",
            "@Home":"./src/modules/Home",
            "@Register": "./src/modules/Users/components/Register/Register",
            "@Login" : "./src/modules/Users/components/Login/Login",
          }
        },
      ],
    ],
  };
};
