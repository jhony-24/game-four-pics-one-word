import React, { memo } from "react";
import Text from "src/components/atoms/Text";
import Fade from "src/components/dom/Fade";

const LoginLabel = ({ text }) => {
    return <Fade><Text color="color_smooth_darker">{text}</Text></Fade>
}

export default memo(LoginLabel);