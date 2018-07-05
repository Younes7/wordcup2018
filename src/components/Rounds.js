import React, {Component} from 'react';

export default class Rounds extends Component {
    constructor(props){
        super(props);
        console.log('PROPS', this.props)
      }
        render() {
          return(<div>{this.props.round.map((round) => {
            return <p>{round.name}</p>
          })}
          </div>)
        }
}