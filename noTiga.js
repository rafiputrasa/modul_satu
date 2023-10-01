class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Nilai awal counter
    };
  }

  // Mengurangi nilai counter
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  // Menambah nilai counter
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Nilai Counter: {this.state.count}</p>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));