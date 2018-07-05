import React, {Component} from 'react';

export default class Matchs extends Component {
    // constructor(props){
    //     super(props);
    //   console.log('PROPS', this.props)
    // }
    render() {
        return(
            <div>
        {this.props.match.map((item, key) => {
          console.log(item.name);
          return (
            <div key={key}>
              <h2 className="text-center">{item.name}</h2>
              <div className="match">
                {item.matches.map((match, keyMatch) => {
                  console.log(match);
                  return (
                    <div key={keyMatch} >
                      <div className="contain">
                        {match.team1.name} - {match.team2.name} <br /> Score :{" "}
                        {match.score1} - {match.score2} <br />
                        {match.group} <br /> {match.stadium.name} <br />{" "}
                        {match.date} {match.time} {match.timezone}
                      </div>
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
            </div>
        )
    }
}