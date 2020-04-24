import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import FloatingButton from '../FloatingButton/FloatingButton';
import { IoIosOpen } from 'react-icons/io';
import { Portal } from 'react-portal';

const SEO = ({ children, ...props }) => {
  return (
    <Fragment>
      <Helmet {...props} />
      <div className="root">
        {children}
      </div>
      <ButtonOpenResize />
    </Fragment>
  )
}

// test
// button to view game in desktop in mode phone
function ButtonOpenResize({ visible = true}) {
  const openWindow = () => {
    let location = window.location;
    let title = document.title;
    let target = '_blank';
    let features = 'width=300,height=400,scrollbars=NO,top=0,status=no';
    window.open(location, title, target, features);
  }

  return (visible && (
    <Portal>
      <FloatingButton onClick={() => openWindow()} ><IoIosOpen size={20} /></FloatingButton>
    </Portal>
  ))
}

export default SEO;
