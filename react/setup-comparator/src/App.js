import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser("Sammy");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div onClick={this.onUpdateUser}>Update user</div>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

// const caca = () => {
//   return <div>lololol</div>;
// };

// const connected = connect(
//   mapStateToProps,
//   mapActionsToProps
// )(App);

// console.log(connected);

// export default connect(
//   mapStateToProps,
//   mapActionsToProps
// )(App);
export default App;
