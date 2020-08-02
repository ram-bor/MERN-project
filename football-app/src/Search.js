import React, { Component } from "react";
import "./Search.css";

function Search(props) {
  return (
    <form>
      <input class="input" type="text" placeholder="Choose a club" />
      <button>Search</button>
    </form>
  );
}

export default Search;

// {this.state.dataReady === true
//     ? this.state.teams.map((team, i) => {
//         console.log(team);
//         return <Team teams={team.team} key={i} />;
//       })
//     : null}
