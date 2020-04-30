import React, { useState, useEffect } from 'react';
import style from './style';
import Position from 'src/components/dom/Position';
import Container from 'src/components/dom/Container';
import Flex from 'src/components/dom/Flex';
import Text from 'src/components/atoms/Text';
import { motion as Sheet, AnimatePresence } from "framer-motion";

const BottomSheet = ({ open, title, children, onClose }) => {
  const [isOpen, setOpen] = useState(open);
  const limitDrag = 10;
  const animations = {
    close: { y: "100%", transition: { type: "tween", duration: .1 }, },
    open: { y: 0, },
  }

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const onPan = (event, info) => {
    let differenceDrag = info.point.y;
    if (differenceDrag >= limitDrag)
      setOpen(false);
  }
  const onDragExit = () => {
    onClose(isOpen);
  }

  return (
    <AnimatePresence onExitComplete={onDragExit}>
      {isOpen && (
        <Position position="fixed" bottom="0" left="0">
          <Sheet.div
            variants={animations}
            initial="close"
            animate="open"
            drag="y"
            dragConstraints={{ top: 0 }}
            onPan={onPan}
            exit="close">
            <Container styles={style.card}>
              <Flex styles={style.flexContainer._definition}>
                <Container styles={[style.header, style.center]}>
                  <Container styles={style.bar} />
                  <Text>{title}</Text>
                </Container>
                <Container styles={style.body}>{children}</Container>
              </Flex>
            </Container>
          </Sheet.div>
        </Position>
      )}
    </AnimatePresence>
  )
}

export default BottomSheet;
