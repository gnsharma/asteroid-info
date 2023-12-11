import antfu from "@antfu/eslint-config";

export default antfu({
	rules: {
		"no-restricted-imports": [
			"error",
			{
				patterns: ["src/features/*/*"],
			},
		],
	},
});
