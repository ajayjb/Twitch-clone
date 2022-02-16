import React from "react";

// Google login API set up
class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    // Loading the Auth library to brower
    window.gapi.load("client:auth", () => {
      // Once loaded initialising with clientID
      window.gapi.client
        .init({
          client_id:
            "66041817403-kfa60h0840m31muqhvc7824a1tuniru3.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  signOutHandler = () => {
    this.auth.signOut();
  };

  signInHandler = () => {
    this.auth.signIn();
  };

  display() {
    if (this.state.isSignedIn === null) {
      return <div></div>;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.signOutHandler}>
          <i className="google icon" /> Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui green google button" onClick={this.signInHandler}>
          <i className="google icon" /> Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.display()}</div>;
  }
}

export default GoogleAuth;
