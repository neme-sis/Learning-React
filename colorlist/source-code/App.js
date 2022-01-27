import React, { useState } from 'react';
// import UseStateBasics from './UseStateBasics';
// import UseStateObject from './UseStateObject';
// import Counter from './Counter';
import Description from './Description';

//We can't call hooks in a function, it must be a component
//Hookname starts with "use"
//We cant call it in conditional way like in if else



function App() {
  return(
    <>
      <Description/>
    </>
  )
}

export default App;
