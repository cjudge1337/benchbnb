import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // debugger;
    this.props.processForm(user);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === "login") {
      return (
        <div>
          {this.renderErrors()}
          <h3>Login</h3>
          Or
          <br/>
          <Link to="/signup">Sign Up</Link>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username
              <input type="text"
                     onChange={this.update("username")}></input>
            </label>
            <label>
              Password
              <input type="password"
                     onChange={this.update("password")}></input>
            </label>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Sign Up</h3>
          Or
          <br/>
          <Link to="/login">Login</Link>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username
              <input type="text"></input>
            </label>
            <label>
              Password
              <input type="password"></input>
            </label>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      );
    }
  }

}

export default withRouter(SessionForm);
