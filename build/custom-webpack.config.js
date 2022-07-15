module.exports = (config) => {
  config.module.rules.push(
    {
      test: /styles.css$/i,
      use: [
        {
          loader: "css-loader",
          options: {
            // url:false
          },
        },
      ],
    },
    {
      test: /\.ttf$/,
      type: "assets/resource",
    }
  );
  return config;
};
