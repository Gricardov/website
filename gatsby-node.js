exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /plyr/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}