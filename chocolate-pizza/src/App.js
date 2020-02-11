import React from 'react';
import logo from './logo.svg';
import Header from "./Header.js"
import { Recipe, RecipeCard } from "./Recipe.js"
import AuthorInfo from "./AuthorInfo.js"
import Footer from "./Footer.js"
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <Header />
      <Recipe />
      <RecipeCard />
      <AuthorInfo />
      <Footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
