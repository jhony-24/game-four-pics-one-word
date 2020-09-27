import React from 'react';
import { IoIosOpen } from 'react-icons/io';
import { Portal } from 'react-portal';
import useResize from 'src/hooks/useInterfaceControls/useResize';
import { clientWindow } from 'src/resources/tools/functions';
import { SButtonViewInMobile } from './ButtonViewinMobile.style';

const openWindow = () => {
	let location = clientWindow().location;
	let title = document.title;
	let target = '_blank';
	let features = 'width=300,height=400,scrollbars=NO,top=0,status=no';
	clientWindow().open(location, title, target, features);
}

const ButtonViewInMobile = () => {
  const [width] = useResize();
  const isMobile = () => width <= 400;
  if (!isMobile()) {
    return (
      <Portal>
				<SButtonViewInMobile onClick={() => openWindow()}>
					<IoIosOpen size={20} />
				</SButtonViewInMobile>
      </Portal>
    )
  }
  return null;
}

export default ButtonViewInMobile;
