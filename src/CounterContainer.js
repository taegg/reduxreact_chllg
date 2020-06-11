import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});


const CounterComponent = ({ count, dispatch }) => {return(

<div>
  <h1>{count}</h1>   
      <button onClick={() => dispatch({ type: 'ADD1' })}>+1</button>
      <button onClick={() => dispatch({ type: 'REMOVE1' })}>-1</button>
      <button onClick={() => dispatch({ type: 'ADD10' })}>+10</button>
      <button onClick={() => dispatch({ type: 'REMOVE10' })}>-10</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>-> 0</button>
</div>

)};


export default connect(mapStateToProps)(CounterComponent);