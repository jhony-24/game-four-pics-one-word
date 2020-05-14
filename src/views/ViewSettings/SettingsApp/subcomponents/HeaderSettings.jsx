import React from "react";
import Container from "src/components/dom/Container";
import Avatar from "src/components/atoms/Avatar";
import Flex from "src/components/dom/Flex";
import Text from "src/components/atoms/Text";
import { IoIosCamera } from "react-icons/io";
import Position from "src/components/dom/Position";
import { motion as HoverAvatar } from "framer-motion";
import { useState } from "react";

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
        margin: "2em 0 10px",
        position: "relative",
    }
}


const HeaderSettings = ({ avatar, title, details }) => {
    const [hover, setHover] = useState(false);
    const defineSetHover = (value) => () => {
        setHover(value);
    }
    return (
        <Container>
            <Flex styles={style.marginAvatar}>
                <Avatar src={avatar} size="120px" />
                <Position position="absolute">

                    <HoverAvatar.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hover ? 1 : 0 }}
                        onMouseOver={defineSetHover(true)}
                        onMouseLeave={defineSetHover(false)}
                    >
                        <Avatar
                            icon={
                                hover ? (
                                    <IoIosCamera color="white" size={40} onClick={() => console.log("ok")} />)
                                    :
                                    null
                            }
                            color="rgba(0,0,0,.3)"
                            size="120px" />
                    </HoverAvatar.span>

                </Position>
            </Flex>
            <Flex styles={style.flex}>
                <Text styles={{ ...style.username, ...style.margin }}>{title}</Text>
                <Text styles={style.margin} color="gray" >{details}</Text>
            </Flex>
        </Container>
    )
}

export default HeaderSettings;