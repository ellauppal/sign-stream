import classes from './BackgroundPicAbout2.module.css';
import history from './../history';


function BackgroundPicAbout2() {


  return (
    <div className={classes.back}>
       <img className={classes.prob_line} src={require('./prob_hev.png')} alt="prob"/>
       <img className={classes.prob_text} src={require('./prob_txt.png')} alt="prob"/>
       <img className={classes.sol} src={require('./sol_line.png')} alt="sol" 
       onClick={() => history.push('/about-solution')} src={require('./sol_line.png')} alt="About"/>
    </div>
  );
}

export default BackgroundPicAbout2;

