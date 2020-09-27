import { clientWindow } from "src/resources/tools/functions";

const useSiteMetadata = () => {
	return {
		siteURL : clientWindow().location.pathname 
	};
}

export default useSiteMetadata
