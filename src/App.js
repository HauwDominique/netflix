import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Home from './Home/home';
import Series from './Series/series';
import Movies from './Movies/movies';
import Child from './Child/child';
import Detail from './Detail/detail';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/kids" component={Child} />
        <Route path="/detail/:type(movie|tv)/:id" component={Detail} />

      </div>
    </Router>

  );
}

export default App;
