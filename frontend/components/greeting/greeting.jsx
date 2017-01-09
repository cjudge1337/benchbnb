import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser === null) {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Welcome {this.props.currentUser.username}!</h2>
          <button type="button" onClick={this.props.logout}>Logout</button>
        </div>
      );
    }
  }
}

export default Greeting;
