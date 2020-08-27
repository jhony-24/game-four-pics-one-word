import React from "react";
import { StyleSheet, css } from "aphrodite/lib";
import Text from "src/components/atoms/Text/Text";
import { AiOutlineSync } from "react-icons/ai";
import { TEXT_SECONDARY } from "src/theme";
import Fade from "src/components/dom/Fade";

const styles = StyleSheet.create({
    container: {
        margin: "auto",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        background: "white",
        padding: "2em",
        borderRadius: "20px",
        "@media screen and (max-width:400px)": {
            width: "80%"
        }
    },
    title: {
        marginBottom: "20px",
        color: "rgb(60,60,60)",
    }
})

const ErrorGetData = () => {
    return (
        <div className={css(styles.container)}>
            <Fade type="in">
                <h2 className={css(styles.title)} >Ups! An error has occurred</h2>
                <Text color="gray">the data was not obtained correctly</Text>
                <br />
                <a href={window.location}>
                    <AiOutlineSync size={30} color={TEXT_SECONDARY} />
                    <Text>reload</Text>
                </a>
            </Fade>
        </div>
    )
}

export default ErrorGetData;