import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import photo from './photo.jpg';
import maison from './maison.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={photo} />  
          
        
        </header>
        <div className="par1">
        <p>premiere paragraphe</p>
      
        </div>
        <hr/>
        <br/>
        <div className="par2">
        <p>deuxieme paragraphe</p>
        
        </div>

      </div>
    
    );
  }
}

export default App;
