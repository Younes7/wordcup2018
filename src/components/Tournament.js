import React, { Component } from 'react';

export default class Tournament extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        data : data
      })
    console.log('DATA', this.state.data)
    })
  }
  render(){
    return(
      <div>
        <h1 className="title-header text-center">Tournament World Cup</h1>
        {this.state.data.name}
      </div>
    )
  }
}