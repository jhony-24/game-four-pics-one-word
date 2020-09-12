import React, { Component } from "react"
import Letter from "src/components/molecules/Letter"
import SWrapperGrid from "src/components/styled/wrappers/SWrapperGrid"
import { TEXT_PRIMARY, SILVER_COLOR } from "src/theme";
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

    letterEmpty = (letter = 0) => letter !== 0;

    render() {
        const { letters, pressLetterToAssignTest } = this.props;
        return (
            <SWrapperGrid $verticalMargin={20} >
                {letters.map((letter, index) => (
                    <MotionLetter.div
                        key={index}
                        initial={this.effectInitial()}
                        animate={this.effectStart()}
                        transition={this.transition()}>
                        <Letter
                            background={this.letterEmpty(letter) ? "gray" : SILVER_COLOR}
                            color={TEXT_PRIMARY}
                            text={letter}
                            visibilityText={this.letterEmpty(letter)}
                            onPressLetter={() => this.letterEmpty(letter) && pressLetterToAssignTest({ letter, index })} />
                    </MotionLetter.div>
                ))}
            </SWrapperGrid>
        )
    }
}

const mapStateToProps = ({ discover }) => ({
    letters: discover.messyLetters,
    stateDiscover: discover.stateDiscover
})
const mapDispatchToProps = (dispatch) => ({
    pressLetterToAssignTest(parametersLetters){
        let indexed = new Indexed();
        indexed.read("sound", ({ enableSound }) => {
            dispatch(discoverActions.getEnableSound({ enableSound }));
        })
        dispatch(discoverActions.assignLetterToOrder(parametersLetters));
    }
}) 
export default connect(mapStateToProps,mapDispatchToProps)(MessUpLetters);