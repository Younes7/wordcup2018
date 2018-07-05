import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
// import Rounds from './components/Rounds';
// import Matchs from './components/Matchs';
import MatchDay from './components/MatchDay';
// import DialogTeam from './components/DialogTeam';
import axios from 'axios';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class App extends Component {
    constructor(props) {
    super(props);
    this.state = { 
      rounds: [] 
    }
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
      .then(res => res.json())
      .then(data => {
        console.log(data.rounds);
        this.setState({
          rounds: data.rounds
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render(){
    return (
      <div>
        <Banner/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
            </div>
          </div>
        </div>
        <MatchDay match={this.state.rounds} style={styles}/>
      </div>
    );
  }
}

export default App;
