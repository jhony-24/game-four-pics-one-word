import React from "react";
import Text from "src/components/atoms/Text";
import Fade from "src/components/dom/Fade";

const LoginLabel = ({ text }) => {
    return (
        <Fade><Text color="gray">{text}</Text></Fade>
    )
}

export default LoginLabel;