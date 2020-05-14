import { StyleSheet } from "aphrodite"

export const styleDynamic = (propertiesStyles = {}) => {
    let nameStyle = "s-df10";
    let styles = StyleSheet.create({
        [nameStyle] : propertiesStyles
    })
    return styles[nameStyle];
}

