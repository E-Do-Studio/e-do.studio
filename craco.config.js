module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: [
              {
                loader: "@svgr/webpack",
                options: {
                  throwIfNamespace: false,
                },
              },
            ],
          },
        ],
      },
    },
  },
  babel: {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
    ],
    plugins: [
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
    ],
  },
};
