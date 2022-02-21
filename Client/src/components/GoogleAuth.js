import React from "react";
import { signIn, signOut } from "./Actions";
import { connect } from "react-redux";

// Documention link to set up GoogleAuth : https://developers.google.com/identity/sign-in/web/reference#googleauthissignedinlistenlistener

// Google login API setup.
class GoogleAuth extends React.Component {
  componentDidMount() {
    // Loading the Auth library to brower
    window.gapi.load("auth2", () => {
      // Intializing the Auth2 api with clientID and scope.
      window.gapi.auth2
        .init({
          client_id:
            "66041817403-kfa60h0840m31muqhvc7824a1tuniru3.apps.googleusercontent.com",
          scope: "email",
        })
        // Above method return a promise, hence we can use .then method.
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.authHandler(this.auth.isSignedIn.get());
          // Event listner to isSigned when the isSigned changes the call back gets called right away.
          this.auth.isSignedIn.listen(() => {
            // Callback
            this.authHandler(this.auth.isSignedIn.get());
          });
        });
    });
  }

  authHandler = (sign) => {
    if (sign === true) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  // Here I can dispatch when user clicks on Sign in or Sign out but I'm not doing it because when You Sign in it takes some time to login, the line below Sign in, executed immediatly causing, the userId to be null, thats why we are using event listener. to call actions only after the state of isSigned changes.

  signOutHandler = () => {
    this.auth.signOut();
  };

  signInHandler = () => {
    this.auth.signIn();
  };

  display() {
    if (this.props.sign === null) {
      return <div></div>;
    } else if (this.props.sign) {
      return (
        <button className="ui red google button" onClick={this.signOutHandler}>
          <i className="google icon" /> Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui green google button" onClick={this.signInHandler}>
          <i className="google icon" /> Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.display()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { sign: state.authState.isSigned };
};

const connectFunc = connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut,
});

export default connectFunc(GoogleAuth);
