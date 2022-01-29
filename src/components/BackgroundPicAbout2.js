import classes from './BackgroundPicAbout2.module.css';



function BackgroundPicAbout2() {
  
  function changePic(e) {
    e.target.setAttribute( 'src', require('./sol_hev.png'));
  }


  return (
    <div className={classes.back}>
       <img className={classes.prob_line} src={require('./prob_line.png')} alt="prob"/>
       <img className={classes.prob} src={require('./prob_txt.png')} alt="prob"/>
       <img className={classes.sol} src={require('./sol_line.png')} alt="prob" onClick={changePic}/>
    </div>
  );
}

export default BackgroundPicAbout2;

