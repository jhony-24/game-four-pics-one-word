import React, { Component } from "react"
import Letter from "src/components/molecules/Letter"
import Grid from "src/components/dom/Grid"
import { TEXT_PRIMARY } from "src/resources/tools/constants";
import PropTypes from "prop-types";
import { motion as MotionLetter } from "framer-motion"
import { discoverActions } from "src/redux/discover";
import { connect } from "react-redux";
import Indexed from "src/models/indexed";

class MessUpLetters extends Component {
    effectStart = () => ({
        y: 0,
        opacity: 1
    })

    effectInitial = () => {
        let max = 1000;
        let min = -max;
        return {
            y: Math.random() * (max - min) + min,
            opacity: 0
        }
    }

    transition = () => ({
        duration: Math.random() * 2
    })

    handlerPressLetter = (paramsLetter) => {
        let dispatch = this.props.dispatch;
        let indexed = new Indexed();
        indexed.read("sound", ({ enableSound }) => {
            dispatch(discoverActions.getEnableSound({ enableSound }));
        })
        dispatch(discoverActions.assignLetterToOrder(paramsLetter));
    }

    letterEmpty = (letter = 0) => letter !== 0;

    render() {
        const { letters } = this.props;
        return (
            <Grid verticalMargin={20} >
                {
                    letters.map((letter, index) => (
                        <MotionLetter.div
                            key={index}
                            initial={this.effectInitial()}
                            animate={this.effectStart()}
                            transition={this.transition()}>
                            <Letter
                                background={this.letterEmpty(letter) && "gray"}
                                color={TEXT_PRIMARY}
                                text={letter}
                                visibilityText={this.letterEmpty(letter)}
                                onPressLetter={() => this.letterEmpty(letter) && this.handlerPressLetter({ letter, index })} />
                        </MotionLetter.div>
                    ))
                }
            </Grid>
        )
    }
}

MessUpLetters.defaultProps = {
    letters: []
}

MessUpLetters.propTypes = {
    letters: PropTypes.array
}

export default connect()(MessUpLetters);