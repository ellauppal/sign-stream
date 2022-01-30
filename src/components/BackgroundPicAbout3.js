import classes from './BackgroundPicAbout3.module.css';
import history from './../history';


function BackgroundPicAbout3() {


  return (
    <div className={classes.back}>
       <img className={classes.sol_line} src={require('./sol_hev.png')} alt="sol"/>
       <img className={classes.sol_text} src={require('./sol_txt.png')} alt="sol"/>
       <img className={classes.prob} src={require('./prob_line.png')} alt="prob" 
       onClick={() => history.push('/about')} src={require('./prob_line.png')} alt="About"/>
    </div>
  );
}

export default BackgroundPicAbout3;
