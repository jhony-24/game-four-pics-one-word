import React from "react"
import Avatar from "src/components/atoms/Avatar/Avatar"
import Paragraph from "src/components/molecules/Paragraph"
import RowItem from "src/components/molecules/RowItem"
import style from "../../SettingsApp.style"
import SWrapperContainer from "src/components/styled/wrappers/SWrapperContainer"
import { css } from "aphrodite/no-important";

const RowSetting = ({rightBody,title,detail,icon,bgIcon,src,onClick}) => {
	return (
		<SWrapperContainer>
			<RowItem
				$hover
				styles={style.item}
				leftBody={<Avatar color={bgIcon} icon={icon} src={src} />}
				centerBody={
					<SWrapperContainer className={css(style.ctnParagraph)}>
						<Paragraph colordetail="gray" title={title} detail={detail} />
					</SWrapperContainer>
				}
				rightBody={rightBody}
				onClick={onClick}
			/>
		</SWrapperContainer>
	)
}

export default RowSetting
