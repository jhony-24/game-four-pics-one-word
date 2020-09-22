import { useTranslation } from "gatsby-plugin-react-i18next"

const useLanguage = (prefix = "", namespace = []) => {
	const { t, i18n } = useTranslation(namespace)
	return {
		translate: (value = "", params = {}) => t(prefix + value, params),
		changeLanguage: value => i18n.changeLanguage(value),
	}
}

export default useLanguage
