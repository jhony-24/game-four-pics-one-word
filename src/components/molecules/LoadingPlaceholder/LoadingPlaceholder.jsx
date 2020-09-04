import React, { memo } from "react"
import style, { SSkeletonRow } from "./LoadingPlaceholder.style"
import Flex from "src/components/dom/Flex"
import Skeleton from "react-loading-skeleton"
import PropTypes from "prop-types"

const LoadingPlaceholder = ({ sizecircle, heightbar, repeat }) => {
	const array = Array(repeat).fill(0)

	return (
		<Flex styles={style.f}>
			{array.map((e, i) => (
				<Flex styles={style.fr} key={i}>
					<SSkeletonRow>
						<Skeleton width={sizecircle} height={sizecircle} circle={true} />
					</SSkeletonRow>
					<SSkeletonRow>
						<Skeleton width={250} height={heightbar} />
					</SSkeletonRow>
				</Flex>
			))}
		</Flex>
	)
}

LoadingPlaceholder.defaultProps = {
	repeat: 5,
	sizecircle: 40,
	heightbar: 40,
}

LoadingPlaceholder.propTypes = {
	sizecircle: PropTypes.number,
	heightbar: PropTypes.number,
	repeat: PropTypes.number,
}

export default memo(LoadingPlaceholder)
