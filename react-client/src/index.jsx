import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import NewGifs from './NewGifs.jsx';


class App extends React.Component {
  render () {
        return (
          <div className="App">
            {/* <img className="dog" src="https://media1.tenor.com/images/d0cb62ddace8b8c0aaf4dec51475b856/tenor.gif?itemid=9118700"/> */}
            <header className="App-header"> 
              <h1 className="App-title">GIF Stash</h1>
            </header>
            <p className="App-intro">
              Welcome to gif Stash!
            </p>
            <NewGifs />
          </div>
        );
      }
    }

ReactDOM.render(<App />, document.getElementById('app'));
