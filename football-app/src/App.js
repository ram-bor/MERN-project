import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import Search from "./Search";

const api = "https://football-premier-league-teams.herokuapp.com/teams";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "6ddd36614bmshac781e74c7a85ccp1b5630jsnf55b2a3db424",
    useQueryString: true,
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: "",
      loading: false,
      dataReady: false,
    };
  }

  //function to load team

  loadTeam = e => {
    console.log("Button Clicked!");
    console.log(e.target);
  };

  render() {
    return (
      <div className="container">
        <Home />
        <Search />
        {/* <label className="search-label">
          <input type="text" value="" placeholder="Search a club..." />
          <button>Search</button>
        </label> */}
        <main>
          <div className="teams">
            <Route path="/teams" component={Team} />
          </div>
        </main>
      </div>
    );
  }

  componentDidMount() {
    console.log("Success: Component did mount!");
    fetch(api, options)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("Fetch received");
        console.dir(res);
        this.setState({
          teams: res,
          dataReady: true,
        });
      });
  }
}

export default App;
