import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App centered column">
      <LoginCard />
    </div>
  );
}

class LoginCard extends React.Component {
  state = {
    usernameInput: "",
    usernameInputError: false,
    passwordInput: "",
    passwordInputError: false,
    darkMode: true
    //agragar un switch  y el modo nocturno
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value }, this.checkValues);
  };

  checkValues = () => {
    if (this.state.usernameInput === "username") {
      this.setState({ usernameInputError: true });
    } else {
      this.setState({ usernameInputError: false });
    }

    if (this.state.passwordInput.length > 6) {
      this.setState({ passwordInputError: true });
    } else {
      this.setState({ passwordInputError: false });
    }
  };

  render() {
    const {
      passwordInput,
      passwordInputError,
      usernameInputError,
      usernameInput
    } = this.state;

    const usernameErrorMessageClass = `error-message ${
      usernameInputError ? "visible" : "invisible"
    }`;

    const passwordErrorMessageClass = `error-message ${
      passwordInputError ? "visible" : "invisible"
    }`;

    return (
      <div className="flex-container centered">
        <div className="card ">
          <form className="form">
            <div className="inputContainer">
              <input
                autoComplete="off"
                onChange={this.handleInput}
                className={usernameInputError ? "error-input" : ""}
                placeholder="username"
                name="usernameInput"
                type="text"
                value={usernameInput}
              />
              <span className={usernameErrorMessageClass}>
                el nombre de usuario no puede ser "username"
              </span>
            </div>
            <div className="inputContainer">
              <input
                className={passwordInputError ? "error-input" : ""}
                placeholder="password"
                name="passwordInput"
                onChange={this.handleInput}
                type="password"
                value={passwordInput}
              />
              <span className={passwordErrorMessageClass}>
                el password tiene mas de 6 caracteres
              </span>
            </div>
            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
