import React, { memo } from "react"
import { SSkeletonCol, SSkeletonContainer, SSkeletonRow } from "./LoadingPlaceholder.style"
import Skeleton from "react-loading-skeleton"
import PropTypes from "prop-types"

const LoadingPlaceholder = ({ sizecircle, heightbar, repeat }) => {
	const array = Array(repeat).fill(0)
	return (
		<SSkeletonContainer>
			{array.map((_, i) => (
				<SSkeletonRow key={i}>
					<SSkeletonCol>
						<Skeleton width={sizecircle} height={sizecircle} circle={true} />
					</SSkeletonCol>
					<SSkeletonCol>
						<Skeleton width={250} height={heightbar} />
					</SSkeletonCol>
				</SSkeletonRow>
			))}
		</SSkeletonContainer>
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
