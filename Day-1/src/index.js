//import namespace from module
import React from "react";
import reactDom from "react-dom";

var target= document.getElementById("root");

//stateless functional component
//JSX rules:-
/*
1. We can return only one element from our component
2. Parent element is to be unique from other contents
Ex: HTML semantics(div, article, section) or Fragment
3. Formatting
4. Always use camelCase
ex:- className, onClick
5. Close every element
6. stateless functional component always return JSX
*/

function Hello(){
  return(
    <section>
      <div>Gairik loves Sampriti</div>
      <div>Sampriti loves Soumya</div>
      <img src="#" alt="" />
    </section>
  )
}

// var Hello = ()=>{
//   return(
//     <h1>
//       Hi Good for nothings
//     </h1>
//   )
// }

//module.method()
reactDom.render(<Hello/>, target)