import React from "react";
import "./styles.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/reducers/user-reducer/user.selctors";


import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in_and_sign-out/SignInAndSignOut.component";
import CheckOutPage from './pages/checkout-page/checkout.component';

import { auth, userProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/reducers/user-reducer/user.action";
class App extends React.Component {
  unSubscribeAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await userProfileDocument(authUser);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(authUser);
    });
  }
  componentWillUnmount() {
    this.unSubscribeAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
