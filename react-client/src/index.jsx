import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import NewGifs from './NewGifs.jsx';
import MyStash from './MyStash.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myStash: []
    }
    this.updateStash = this.updateStash.bind(this)
  }



  componentWillMount() {
    axios.get('/myStash').then((response) => {
        this.setState({
            myStash: response.data
        })
    })
}

  updateStash() {
    axios.get('/myStash').then((response) => {
      this.setState({
          myStash: response.data
      })
  })
  }


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
            <NewGifs updateStash={this.updateStash} />
            <MyStash myStash={this.state.myStash} updateStash={this.updateStash}/>
          </div>
        );
      }
    }

ReactDOM.render(<App />, document.getElementById('app'));
