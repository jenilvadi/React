import React from 'react';
import './Classcomcss.css'; // Importing external CSS for styles

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className='counter-container'
      style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        
        
      }}>
        <h1 style={{
          fontSize :"50px",
          color: "white"
        }}>Couter App</h1>
        <h2 className='counter-title'>Counter</h2>
        <div className='counter-controls'>
          <button className='counter-button' onClick={this.decrement}>-</button>
          <span className='counter-display'>{this.state.count}</span>
          <button className='counter-button' onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
