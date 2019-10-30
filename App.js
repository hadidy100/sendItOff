import React, { Component } from "react";
import "./App.css";
//import MyLoads from "./components/MyLoads";
//import PostLoads from "./components/PostLoads";
//import SearchLoads from "./components/searchLoads";
//import LandingPage from "./components/LandingPage";
//import AcceptLoads from "./components/acceptLoads";
//import AssignLoad from "./components/assignLoads";
//import RatingSlider from "./components/ratingSlider";
//import UserSignIn from "./components/userSignIn";
import RateSomeOne from "./components/rateSomeOne";
class App extends Component {
  render() {
    return (
      <main className="container">
        {/*<SearchLoads />*/}
        {/* <PostLoads />*/}
        {/*<LandingPage />*/}
        {/*<MyLoads />*/}
        {/* <AddressInput /> this is not used for now*/}
        {/*<AcceptLoads />*/}
        {/*<AssignLoad />*/}
        {/*<RatingSlider />*/}
        {/*<UserSignIn />*/}
        <RateSomeOne />
      </main>
    );
  }
}

export default App;
