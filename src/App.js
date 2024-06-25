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
        <div id='calculator' className='container w-[320px] h-[480px] bg-black ring-8 ring-black'>
          <div id='display' className='h-1/6 flex flex-col justify-around'>
            <div id='num-history' className='text-orange-500 text-lg text-right' >0</div>
            <div id='current-num' className='text-white text-2xl text-right'>0</div>
          </div>
          <div id='num-pad' className='flex flex-wrap w-full h-5/6'>
            <button id='clear' className='custom-button clear-btn' >AC</button>
            <button id='divide' className='custom-button' >/</button>
            <button id='multiply' className='custom-button' >x</button>
            <button id='seven' className='custom-button' >7</button>
            <button id='eight' className='custom-button' >8</button>
            <button id='nine' className='custom-button' >9</button>
            <button id='subtract' className='custom-button' >-</button>
            <button id='four' className='custom-button' >4</button>
            <button id='five' className='custom-button' >5</button>
            <button id='six' className='custom-button' >6</button>
            <button id='add' className='custom-button' >+</button>
            <div className='w-3/4'>
              <button id='one' className='custom-button last-three' >1</button>
              <button id='two' className='custom-button last-three' >2</button>
              <button id='three' className='custom-button last-three' >3</button>
              <button id='zero' className='custom-button zero-btn' >0</button>
              <button id='decimal' className='custom-button last-three' >.</button>
            </div>
            
             {/* this is to make equal button to fit in the grid without using grid, that is my own solution tho */}
            <button id='equals' className='custom-button equal-btn' >=</button>
            
          </div>
        </div>
      </div>
    )
  }
}
export default App;
