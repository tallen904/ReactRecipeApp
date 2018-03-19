import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe'
import Navbar from './Navbar'
import RecipeList from './RecipeList'

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Recipe title="pasta"
                ingredients={['flour', 'water']}
                instructions='Mix ingredients'
                img='spaghetti.jpeg'/> */}
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
