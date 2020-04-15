import React, { Component } from "react"
import Letter from "src/components/molecules/Letter"
import Grid from "src/components/dom/Grid"
import { PRIMARY_COLOR, SILVER_COLOR, TEXT_PRIMARY } from "src/tools/constants";
import { connect } from "react-redux";
import { discoverActions } from "src/ducks/discover";




class TestLetters extends Component {

    
    handlerPressLetter = (paramsLetter) => {
        this.props.dispatch(discoverActions.giveBackLetter(paramsLetter));
    }


    letterEmpty = (letter) => letter !== 0;


    render() {
        const { letters } = this.props;
        return (
            <Grid verticalMargin={20} >
                {
                    letters.map((letter, index) => (
                        <Letter
                            key={index}
                            text={letter}
                            visibilityText={this.letterEmpty(letter)}
                            color={this.letterEmpty(letter) ? TEXT_PRIMARY : "black"}
                            background={this.letterEmpty(letter) ? PRIMARY_COLOR : SILVER_COLOR}
                            onPressLetter={() => this.letterEmpty(letter) && this.handlerPressLetter({ letter, index })} />
                    ))
                }
            </Grid>
        )
    }

}





export default connect()(TestLetters);
