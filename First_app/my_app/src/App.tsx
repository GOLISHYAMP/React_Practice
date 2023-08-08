import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DemoFunctional } from './components/demo_functional_comp';
import { ClassComponent } from './components/demo_class';
import { Demo } from './components/Demo';
import Class_prac from './components/prac_class';
import Prac_funct from './components/prac_funct';
import { Prac } from './components/prac';

function App() {
  return (
    <div>
      <DemoFunctional></DemoFunctional>
      <ClassComponent></ClassComponent>
      <Demo></Demo>
      <Class_prac id={0} name={''}></Class_prac>
      <Prac_funct></Prac_funct>
      <Prac></Prac>
    </div>
  );
}

export default App;
