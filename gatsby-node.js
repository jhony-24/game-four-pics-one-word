exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage.startsWith("develop")) {
		actions.setWebpackConfig({
			resolve: {
				alias: {
					"react-dom": "@hot-loader/react-dom",
				},
			},
			...(stage === "build-html" && {
				module: {
					rules: [
						{
							test: /bad-module/,
							use: loaders.null(),
						},
					],
				},
			})
		})
	}
}
