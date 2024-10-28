import React from 'react'
import Basic from '../a_basic';
import Props01 from './d_props/Props01';
import Props02 from './d_props/Props02';
import Rendering01 from './f_Rendering/Rendering01';
import Rendering02 from './f_Rendering/Rendering02';
import Handler01 from './g_Handler/Handler01';
import Handler02, { ChildComponent } from './g_Handler/Handler02';
import Handler03 from './g_Handler/Handler03';


export default function Index() {
  return (
    <div>
      <h1 style={{backgroundColor: "black", color: "white"}}>React Project</h1>
      <hr />
      <Props01 />
      <Props02 />

      <h2>f_Rendering 리액트의 조건부 렌더링</h2>

      <Rendering01 />

      <Rendering02 />

      <h2>g_Handler 이벤트</h2>
      <Handler01 />
      <br />
      <Handler02 />

      <ChildComponent count={123433333}></ChildComponent>

      <br />
      <Handler03 />

    </div>
  )
}