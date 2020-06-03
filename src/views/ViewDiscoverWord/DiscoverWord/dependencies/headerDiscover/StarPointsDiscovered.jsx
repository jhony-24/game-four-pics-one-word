import React from 'react'
import { connect } from 'react-redux'
import IconNatural from "src/components/atoms/IconNatural"
import { IoMdStar } from "react-icons/io"

const StarPointsDiscovered = ({ points }) => {
    return (
        <IconNatural
            icon={<IoMdStar size={20} />}
            text={points.toString()}
            colortext="white"
            coloricon="yellow" />
    )
}

const mapStateToProps = (state) => ({
    points: state.discover.wordData ? state.discover.wordData.points : 0
})
export default connect(mapStateToProps)(StarPointsDiscovered);