import React from "react";
import Container from "src/components/dom/Container";
import Avatar from "src/components/atoms/Avatar";
import Flex from "src/components/dom/Flex";
import Text from "src/components/atoms/Text";

const style = {
    flex: {
        flexDirection: "column"
    },
    username: {
        fontSize: "1.5em",
        fontWeight: "bold"
    },
    margin: {
        margin: "5px 0"
    },
    marginAvatar: {
        margin: "2em 0 10px"
    }
}

const HeaderSettings = ({ avatar, title, details }) => {
    return (
        <Container>
            <Flex styles={style.marginAvatar}>
                <Avatar src={avatar} size="120px" />
            </Flex>
            <Flex styles={style.flex}>
                <Text styles={{ ...style.username, ...style.margin }}>{title}</Text>
                <Text styles={style.margin} color="gray" >{details}</Text>
            </Flex>
        </Container>
    )
}

export default HeaderSettings;