import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DemoFunctional } from './components/demo_functional_comp';
import { ClassComponent } from './components/demo_class';
import { Demo } from './components/Demo';

function App() {
  return (
    <div>
      <DemoFunctional></DemoFunctional>
      <ClassComponent></ClassComponent>
      <Demo></Demo>
    </div>
  );
}

export default App;
