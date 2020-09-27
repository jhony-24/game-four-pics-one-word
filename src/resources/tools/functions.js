export const clientWindow = (defaultValue = "") => {
	return typeof window !== "undefined" ? window : defaultValue
}
