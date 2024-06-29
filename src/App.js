// import logo from './logo.svg';

import './App.css';
import React from 'react';

const numPad = ['0','1','2','3','4','5','6','7','8','9','.']
const opearator = ['+','-','x','/']
const defaultValue = '0'
let arrayForOpr = []



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: defaultValue,
      history: '',
      opera: [],
      result: '',
      negative: false
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

  handleNumber(value){
    //this is for the number
    if (this.state.display === defaultValue && value === '0') {
      this.setState({
        display: value,
        history: value
        // for the first zero only
      })
    } else if (opearator.includes(this.state.display)) {
      this.setState({
        // after operator key clicked 
        display: value,
        history: this.state.history + value
      })
    } else if (value === '.') {
      if (this.state.history.endsWith('.') || (this.state.history.includes('.') && arrayForOpr.length === 0)) {
        
      } else {
        this.setState({
          display: this.state.display + value,
          history: this.state.history + value
        })
      }
    } else if (this.state.display === defaultValue || (this.state.history.includes('='))) {
      this.setState({
        // make the first click without zero
        display: value,
        history: value

      })
    } else {
      this.setState({
        display: this.state.display + value,
        history: this.state.history + value
      })
    }
  }

  handleOperator(value){
    // if (value === 'x') {
    // console.log(value)
    // }
    // this is for the operator
    if(this.state.history === '') {
      // dr ka sasa chin br ma ma shi tae chian
      this.setState({
        display: value
      })
    } else if ((this.state.history).includes('=')){
      // dr ka equation ta khu pee tae a chain 
      arrayForOpr[arrayForOpr.length] = value;
      this.setState({
        display: value,
        history: this.state.result + value,
        opera: this.state.opera.concat(value)
      })
    } else {
      
      if (value === '-' && (opearator.some(items => this.state.history.endsWith(items)))) {
        console.log('negative region')
        this.setState({ //this is for conse operators with minus 
          display: value,
          history: this.state.history + value,
          negative: true
        })
      } else if (opearator.some(items => this.state.history.endsWith(items))) {
        arrayForOpr.splice(arrayForOpr.length - 1, 1, value)
        this.setState({ // normal conse operator
          display: value,
          history: this.state.history + value,
          opera: this.state.opera.splice(this.state.opera.length - 1, 1, value),
          negative: false
        })
      } else {
        arrayForOpr[arrayForOpr.length] = value
        this.setState({
          opera: this.state.opera.concat(value),
          display: value,
          history: this.state.history + value
        })
        
      }
    }
    
    
  }


  calculate(){
    // if ((this.state.history).includes('=')) {
    //       this.setState({
    //         display: e.target.innerText,
    //         history: this.state.result + e.target.innerText
    //       })
          
    //     } else {
    if(this.state.history === '') {
      this.setState({
        display: '='
      })
    } else {
      let expression = this.state.history.replace(/x/g, '*');
      //first split the numbers
      let numForCal = expression.split(/[+\-*\/]/).filter(e => e !== '').map(e => Number(e))
      let result = undefined
      console.log(numForCal)
      console.log(arrayForOpr)
      //
      for (let i = 0; i < arrayForOpr.length ; i++) {
        if( arrayForOpr[i] === '+') {
          result = this.add(numForCal[0],numForCal[1]);
          numForCal.splice(0,2, result)
        } else if( arrayForOpr[i] === '-') {
          result = this.subtract(numForCal[0],numForCal[1]);
          numForCal.splice(0,2, result)
        } else if( arrayForOpr[i] === 'x') {
          result = this.multiply(numForCal[0],numForCal[1]);
          numForCal.splice(0,2, result)
        } else if( arrayForOpr[i] === '/') {
          result = this.divide(numForCal[0],numForCal[1]);
          numForCal.splice(0,2, result)
        }
      }
      // if (this.state.history.includes('x')) {
      //   let expression = this.state.history.replace(/x/g, '*')
      //   console.log(expression)
      //   this.setState({
      //     history: expression
      //   })
      // }
      if (this.state.negative === true) {
        this.setState({
          display: (-numForCal[0]),
        })
        
        this.setState({
          
          history: expression + '=' + (-numForCal[0]),
          result: -result
        })
      } else {
        this.setState({
          display: numForCal[0],
        })
        this.setState({
          
          history: expression + '=' + numForCal[0],
          result: result
        })
      }
      // }
      console.log(this.state.result)
      console.log(numForCal[0])
      console.log(result)

      // reset the operator 
      arrayForOpr.length = 0
      
    }
    
  }

  handleClick(e) {
    // console.log(e.target.innerText)
    // let arrayForOpr = [];
    if (e.target.id === "clear") {
      arrayForOpr = [];
      this.setState({
        display: defaultValue,
        history: '',
        opera: [],
        result: '',
        negative: false
      })
      // i got the clear right 
      //next is about number
      //how to handle operator
      // handle decimal 
    } else if (numPad.includes(e.target.innerText)) {
      this.handleNumber(e.target.innerText);
    } else if (opearator.includes(e.target.innerText)) {
      this.handleOperator(e.target.innerText);
    } else if (e.target.id === 'equals') {
      this.calculate();
    }
    // console.log(this.state.display)
    console.log(this.state.history)
    // console.log(this.state.result)
    // console.log(this.state.opera)
    
  }

  render() {
    return(
      <div id="external" className='flex justify-center items-center min-h-screen font-body'>
        <div id='calculator' className='container w-[320px] h-[480px] bg-black ring-8 ring-black'>
          <div id='screen' className='h-1/6 flex flex-col justify-around'>
            <div id='num-history' className='text-orange-500 text-xl text-right font-body' >{this.state.history}</div>
            <div id='display' className='text-white text-3xl text-right font-body'>{this.state.display}</div>
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
