import React from 'react';
import style from './style';
import Position from 'src/components/dom/Position';
import Container from 'src/components/dom/Container';
import Flex from 'src/components/dom/Flex';
import Text from 'src/components/atoms/Text';

const BottomSheet = ({ title = "cambiar mi nombre", children }) => {
  return (
    <Position position="fixed" bottom="0">
      <Container styles={style.card}>
        <Flex styles={style.flexContainer._definition}>
          <Container styles={[style.header, style.center]}>
            <Text>{title}</Text>
          </Container>
          <Container styles={style.body}>
            {children}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde, ad fugit voluptate perferendis minus. Aliquid, error excepturi laudantium sunt ipsa, cumque obcaecati, nulla dolor sint voluptas incidunt blanditiis vel.
          </Container>
        </Flex>
      </Container>
    </Position>
  )
}

export default BottomSheet;
