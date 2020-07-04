import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Calculator } from "./components/Calculator";
import { About } from "./components/About";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <article>
          <Route path="/" exact component={Calculator} />
          <Route path="/about" component={About} />
        </article>

        <footer>
          Developed by &copy;<a href="mailto: yellox@pobox.sk">Matof</a> 2017
        </footer>
      </div>
    );
  }
}

//======================================================

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
