import React from 'react';
import FloatingButton from 'src/components/atoms/FloatingButton';
import { IoIosOpen } from 'react-icons/io';
import { Portal } from 'react-portal';
import useResize from 'src/hooks/useResize';
import { StyleSheet } from 'aphrodite/no-important';

const styles = new StyleSheet.create({
  button: {
    top: 0,
    background: "none",
    boxShadow: 0
  }
})

const openWindow = () => {
	let location = window.location;
	let title = document.title;
	let target = '_blank';
	let features = 'width=300,height=400,scrollbars=NO,top=0,status=no';
	window.open(location, title, target, features);
}

const ButtonViewInMobile = () => {
  const [width] = useResize();
  const isMobile = () => width <= 400;
  if (!isMobile()) {
    return (
      <Portal>
        <FloatingButton styles={styles.button} onClick={() => openWindow()} ><IoIosOpen size={20} /></FloatingButton>
      </Portal>
    )
  }
  return null;
}

export default ButtonViewInMobile;
