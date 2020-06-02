import React, { lazy } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import Flex from "src/components/dom/Flex"
import Card from "src/components/molecules/Card"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import LazyLoad from 'src/components/hoc/LazyLoad';

const images = [
  "https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985__340.jpg",
  "https://cdn.pixabay.com/photo/2020/05/18/22/17/travel-5188598__340.jpg",
  "https://cdn.pixabay.com/photo/2020/05/24/11/14/sea-5213746__340.jpg",
  "https://cdn.pixabay.com/photo/2020/04/17/19/57/anemone-5056690__340.jpg"
]

const Login = lazy(() => import("./Login"));

const ViewLogin = () => {
  return (
    <div className={css(style.viewLogin)}>
      <Card styles={style.card}>
        <Flex>
          <span className={css(style.smallTitle)}>iniciar</span>
        </Flex>
        <Flex>
          <h1 className={css(style.title)}>
            <span className={css(style.titleStrong)}>Bienvenido</span>
            <span className={css(style.titleThink)}>, es hora de comenzar a jugar</span>
          </h1>
          <CircleImageSquare images={images} styles={style.img} />
        </Flex>
      </Card>
      <Flex>
        <LazyLoad component={Login} />
      </Flex>
    </div>
  )
}

export default ViewLogin;
