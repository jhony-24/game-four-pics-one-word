import React from "react";
import Container from "src/components/dom/Container";
import Avatar from "src/components/atoms/Avatar";
import Flex from "src/components/dom/Flex";
import Position from "src/components/dom/Position";
import HeaderSettingsUsername from "./HeaderSettingsUsername";
import { StyleSheet } from "aphrodite/no-important";
import HeaderSettingsAvatarChange from "./HeaderSettingsAvatarChange";

const style = new StyleSheet.create({
    marginAvatar: {
        margin: "2em 0 10px",
        position: "relative",
    }
})

const HeaderSettings = ({ avatar, title, details }) => {
    return (
        <Container>
            <Flex styles={style.marginAvatar}>
                <Avatar src={avatar} size="120px" />
                <Position position="absolute">
                    <HeaderSettingsAvatarChange />
                </Position>
            </Flex>
            <HeaderSettingsUsername title={title} details={details} />
        </Container>
    )
}

export default HeaderSettings;