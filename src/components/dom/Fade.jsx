import React from "react"
import { motion as Fade } from "framer-motion"

const initial = { x: "100%", opacity: 0 }
const animate = { x: 0, opacity: 1 }

export default ({ type, children }) => {
    if (type === "in") {
        return (
            <Fade.div initial={{opacity:0}} animate={{opacity:1}} >
                {children}
            </Fade.div>
        )
    }
    else {
        return (
            <Fade.div transition={{ type: "tween" }} initial={initial} animate={animate} >
                {children}
            </Fade.div>
        )
    }
}