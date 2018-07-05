import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DialogTeam from './DialogTeam';

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


class MatchDay extends Component {
  constructor(props){
    super(props);
  console.log('PROPS', this.props)
}
  render(){
  return (
    <div className="content-match">
         {this.props.match.map((item, key) => {
          console.log(item.name);
          return (
            <Card>
              <CardContent>
            <div key={key}>
              <h2 className="text-center">{item.name}</h2>
              <div className="match">
                {item.matches.map((match, keyMatch) => {
                  console.log(match);
                  return (
                    <div key={keyMatch}>
                      <div className="contain">
                      <Typography>
                        {match.team1.name} - {match.team2.name} <br /> Score :{" "}
                      </Typography>
                      <Typography>
                        {match.score1} - {match.score2} <br />
                        </Typography>
                        <Typography>
                        {match.group} <br /> {match.stadium.name} <br />{" "}
                        </Typography>
                        <Typography>
                        {match.date} {match.time} {match.timezone}
                        </Typography>
                      </div>
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
            </CardContent>
            <CardActions>
                <DialogTeam/>
            </CardActions>  
            </Card>
          );
        })}      
    </div>
  );
}
}


// SimpleCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(MatchDay);
