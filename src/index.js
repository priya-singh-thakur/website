import React from "react";
import ReactDOM from "react-dom";
import Table from './table.js';

const App = () => {
  return <div>
      <h1>The table is</h1>
      <Table />
  </div>;
};

ReactDOM.render(<App />, 

document.getElementById("app"));