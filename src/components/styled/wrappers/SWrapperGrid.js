import styled from "src/theme/styled"

export default styled("div", props => ({
	width: props.$width,
	gridGap: `${props.$spacing || 10}px`,
	margin: `${props.$verticalMargin || 0}px auto`,
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill,minmax(30px,1fr))",
}));