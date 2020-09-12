import SButtonPrimaryCircular from 'src/components/styled/buttons/SButtonPrimaryCircular';
import { withStyleDeep } from 'styletron-react';

export const SButtonViewInMobile = withStyleDeep(SButtonPrimaryCircular,{
	top: 0,
	background: "none",
	boxShadow: 0
})