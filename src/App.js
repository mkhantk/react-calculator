// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div id="external" className='flex justify-center items-center min-h-screen'>
        <div id='calculator' className='container w-[320px] h-1/2'>
          <div id='display'></div>
          <div id='num-pad'>
            <button id='clear' className='' >AC</button>
            <button id='divide' className='' >/</button>
            <button id='multiply' className='' >x</button>
            <button id='seven' className='' >7</button>
            <button id='eight' className='' >8</button>
            <button id='nine' className='' >9</button>
            <button id='subtract' className='' >-</button>
            <button id='four' className='' >4</button>
            <button id='five' className='' >5</button>
            <button id='six' className='' >6</button>
            <button id='add' className='' >+</button>
            <button id='one' className='' >1</button>
            <button id='two' className='' >2</button>
            <button id='three' className='' >3</button>
            <button id='zero' className='' >0</button>
            <button id='decimal' className='' >.</button>
            <button id='equals' className='' >=</button>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
