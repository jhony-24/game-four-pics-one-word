import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import style from '../style';
import Flex from "src/components/dom/Flex"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Card from "src/components/molecules/Card"
import Paragraph from "src/components/molecules/Paragraph"
import { FaStar } from 'react-icons/fa';
import { TEXT_PRIMARY } from "src/tools/constants"
import { wordSelectors } from "src/ducks/word";
import { connect } from "react-redux"; 

const images = Array(3).fill([
  "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1769369/pexels-photo-1769369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
])



class Ranking extends Component {

  render() {

    const { title, topRanked } = this.props;

    return (
      <Card styles={{ ...style.card._definition }}>
        <Paragraph
          title={title}
          colortitle={TEXT_PRIMARY}
          styles={{ ...style.title._definition }} />
        <Flex styles={{ ...style.container._definition }}>
          {
            images.map((current, i) => {

              let center = (i === 1) ? style.rankHigh._definition : {};

              return (
                <Flex styles={{ ...style.flexCtnImg._definition }} key={i}>
                  <CircleImageSquare images={current} styles={{ ...style.circleImage._definition, ...center }} />
                  <FaStar />
                  <span className={css(style.textRank)}>324</span>
                </Flex>
              )

            })
          }
        </Flex>
      </Card>
    )
  }

}



Ranking.defaultProps = {
  title: "Los mas descubiertos"
}


const mapStateToProps = state => ({
  topRanked: wordSelectors.getWordsTopRanked(state)
})
export default connect(mapStateToProps)(Ranking);
