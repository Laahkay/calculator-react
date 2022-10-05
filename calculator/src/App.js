import React,  {useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayScreen from './components/DisplayScreen'

const  App =  () => {
  const [numbers , setNumbers] = useState([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0])
  const [signs , setSigns] = useState(['-' , '+' , '*' ,".", '/'])
  const [totalNumbers , setTotalNumbers] = useState([])
  const [isSignClicked , setIsSignclicked] = useState(false);
  const appendValues = (value) => {
    if(value === '='){
      return 
    }
    setIsSignclicked(false)

    console.log("value" ,totalNumbers , value)
    setTotalNumbers([...totalNumbers, value])
  }
  
  
  const calculatorValue = () => {
    var result  = eval(totalNumbers.join(""))
    console.log(result)
    setTotalNumbers([result])
  }

  const appendSigns = (sign) => {
    // console.log("sign" , signs.filter(item => item === totalNumbers.length - 1))
    // for(var i in signs){



      // if(totalNumbers[totalNumbers.length - 1] == sign){
        // totalNumbers.splice(totalNumbers.length -1 , 1);
        setIsSignclicked(true)
      // }
    // }
    
    setTotalNumbers([...totalNumbers, sign])
  } 
  
  return (



    <div  className="App">
      <DisplayScreen totalNumbers={totalNumbers}/>
      <div style={{display: "grid" , gridTemplateColumns:"1fr 1fr 1fr"}}>
      {numbers.map(number => <button onClick={() => appendValues(number)}> {number} </button>)}
      {signs.map(sign => <button disabled={isSignClicked} onClick={() => appendSigns(sign)}> {sign} </button>)}
      <button onClick={() => calculatorValue()}>  = </button>
      </div>
    </div>
  );
}
  

export default App;
