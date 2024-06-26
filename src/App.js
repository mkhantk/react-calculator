// import logo from './logo.svg';
import './App.css';
import React from 'react';

const numPad = ['0','1','2','3','4','5','6','7','8','9','.']
const opearator = ['+','-','x','/','=']
const defaultValue = '0'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: defaultValue,
      history: '',
      current: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // create function for each operator 
  add = function(a,b) {
    return (a + b)
  }

  subtract = function (a,b) {
    return (a - b)
  }

  multiply = function(a,b) {
    return a * b
  }

  divide = function(a,b) {
    return a / b
  }

  handleClick(e) {
    // console.log(e.target.innerText)
    if (e.target.id === "clear") {
      this.setState({
        display: defaultValue,
        history: '',
        current: []
      })
    } else if (numPad.includes(e.target.innerText)) {
      if (this.state.display === defaultValue && e.target.id === 'zero') {
        this.setState({
          display: e.target.innerText,
          history: e.target.innerText
          // for the first zero only
        })
      } else if (opearator.includes(this.state.display)) {
        this.setState({
          // after operator key clicked 
          display: e.target.innerText,
          history: this.state.history + e.target.innerText
        })
      } else if (e.target.id === 'decimal') {
        this.setState({
          display: this.state.display + e.target.innerText,
          history: this.state.display + e.target.innerText
        })
      } else if (this.state.display === defaultValue ) {
        this.setState({
          // make the first click without zero
          display: e.target.innerText,
          history: e.target.innerText

        })
      } else {
        this.setState({
          display: this.state.display + e.target.innerText,
          history: this.state.history + e.target.innerText
        })
      }
      // now for operators 
    } else {
      if (this.state.history === '') {
        this.setState({
          display: e.target.innerText
        })
      } else {
        this.setState({
          display: e.target.innerText,
          history: this.state.history + e.target.innerText
        })
      }
      
    }
    
  }
  render() {
    return(
      <div id="external" className='flex justify-center items-center min-h-screen'>
        <div id='calculator' className='container w-[320px] h-[480px] bg-black ring-8 ring-black'>
          <div id='display' className='h-1/6 flex flex-col justify-around'>
            <div id='num-history' className='text-orange-500 text-lg text-right' >{this.state.history}</div>
            <div id='current-num' className='text-white text-2xl text-right'>{this.state.display}</div>
          </div>
          <div id='num-pad' className='flex flex-wrap w-full h-5/6'>
            <button id='clear' className='custom-button clear-btn' onClick={this.handleClick}>AC</button>
            <button id='divide' className='custom-button' onClick={this.handleClick}>/</button>
            <button id='multiply' className='custom-button' onClick={this.handleClick}>x</button>
            <button id='seven' className='custom-button' onClick={this.handleClick}>7</button>
            <button id='eight' className='custom-button' onClick={this.handleClick} >8</button>
            <button id='nine' className='custom-button' onClick={this.handleClick}>9</button>
            <button id='subtract' className='custom-button' onClick={this.handleClick}>-</button>
            <button id='four' className='custom-button' onClick={this.handleClick} >4</button>
            <button id='five' className='custom-button' onClick={this.handleClick}>5</button>
            <button id='six' className='custom-button' onClick={this.handleClick}>6</button>
            <button id='add' className='custom-button' onClick={this.handleClick}>+</button>
            <div className='w-3/4'>
              <button id='one' className='custom-button last-three' onClick={this.handleClick}>1</button>
              <button id='two' className='custom-button last-three' onClick={this.handleClick}>2</button>
              <button id='three' className='custom-button last-three' onClick={this.handleClick}>3</button>
              <button id='zero' className='custom-button zero-btn' onClick={this.handleClick}>0</button>
              <button id='decimal' className='custom-button last-three' onClick={this.handleClick}>.</button>
            </div>
            
             {/* this is to make equal button to fit in the grid without using grid, that is my own solution tho */}
            <button id='equals' className='custom-button equal-btn' onClick={this.handleClick}>=</button>
            
          </div>
        </div>
      </div>
    )
  }
}
export default App;
