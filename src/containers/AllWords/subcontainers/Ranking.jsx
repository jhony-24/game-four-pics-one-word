import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import style from '../style';
import Flex from "src/components/dom/Flex"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import Card from "src/components/molecules/Card"
import Paragraph from "src/components/molecules/Paragraph"
import { FaStar, FaCog } from 'react-icons/fa';
import { TEXT_PRIMARY } from "src/tools/constants"
import { wordSelectors } from "src/ducks/word";
import { connect } from "react-redux";
import { navigate } from 'gatsby';

class Ranking extends Component {
  render() {
    const { title, topRanked } = this.props;

    return (
      <Card styles={{ ...style.card._definition }}>
        <Paragraph
          title={
            <Flex>
              {title}
              <FaCog onClick={() => navigate("/settings")} />
            </Flex>
          }
          colortitle={TEXT_PRIMARY}
          styles={{ ...style.title._definition }} />
        <Flex styles={{ ...style.container._definition }}>
          {
            topRanked.map((current, i) => {

              let center = (i === 1) ? style.rankHigh._definition : {};

              return (
                <Flex styles={{ ...style.flexCtnImg._definition }} key={i}>
                  <CircleImageSquare images={current.images} styles={{ ...style.circleImage._definition, ...center }} />
                  <FaStar />
                  <span className={css(style.textRank)}>{current.points}</span>
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
