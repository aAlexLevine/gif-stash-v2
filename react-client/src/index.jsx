import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import NewGifs from './NewGifs.jsx';
import MyStash from './MyStash.jsx';
import axios from 'axios';
// import 'typeface-poppins';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myStash: [],
      tags: []
    }
    this.updateStash = this.updateStash.bind(this)
    this.filter = this.filter.bind(this)
  }

  componentWillMount() {
    axios.get('/myStash').then((response) => {
        this.setState({
            myStash: response.data,
            tags: response.data
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

  filter(e) {
    this.setState({filter: e.target.value})
  }


  render () {
    let items = this.state.myStash;
    if(this.state.filter) {
      items = items.filter( item =>
        // console.log('****item', item)
        item.tag.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }

//     let gifs = this.state.myStash.map(function(gif, i){
//       return gif.tag 
//      })
//          console.log(gifs)
         
//          let result = gifs.sort().reduce((init, current) => {
//      if (init.length === 0 || init[init.length - 1] !== current) {
//          init.push(current);
//      }
//      return init;
//  }, []);

        return (
          <div className="App">
            {/* <img className="dog" src="https://media1.tenor.com/images/d0cb62ddace8b8c0aaf4dec51475b856/tenor.gif?itemid=9118700"/> */}
            <header className="App-header"> 
              <h1 className="App-title">GIF Stash</h1>
            </header>
            <h1 className="App-intro">
              Welcome to gif Stash!
            </h1>
            <NewGifs updateStash={this.updateStash} />
            <MyStash myStash={items} updateStash={this.updateStash} filter={this.filter}/>
          </div>
        );
      }
    }

ReactDOM.render(<App />, document.getElementById('app'));
