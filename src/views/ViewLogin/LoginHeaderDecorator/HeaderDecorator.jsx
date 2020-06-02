import React from 'react'
import Card from "src/components/molecules/Card"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Flex from "src/components/dom/Flex"
import { StyleSheet, css } from "aphrodite/no-important"
import HeaderTitleMessage from './HeaderTitleMessage'

const style = new StyleSheet.create({
    card: {
        borderRadius: "0 0 2em 7em",
        boxShadow: "0 20px 30px rgba(0,0,0,.1)",
        marginBottom: "3em"
    },
    smallTitle: {
        width: "100%",
        textAlign: "center",
        padding: 10,
        fontSize: ".8em",
        userSelect: "none",
    },
    img: {
        marginRight: "1em",
        width: "5em",
        height: "5em",
    }
})

const images = [
    "https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985__340.jpg",
    "https://cdn.pixabay.com/photo/2020/05/18/22/17/travel-5188598__340.jpg",
    "https://cdn.pixabay.com/photo/2020/05/24/11/14/sea-5213746__340.jpg",
    "https://cdn.pixabay.com/photo/2020/04/17/19/57/anemone-5056690__340.jpg"
]

const HeaderDecorator = () => {
    return (
        <Card styles={style.card}>
            <Flex>
                <span className={css(style.smallTitle)}>iniciar</span>
            </Flex>
            <Flex>
                <HeaderTitleMessage/>
                <CircleImageSquare images={images} styles={style.img} />
            </Flex>
        </Card>
    )
}

export default HeaderDecorator;