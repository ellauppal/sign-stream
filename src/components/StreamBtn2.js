import classes from './StreamBtn2.module.css';
import history from './../history';

function StreamBtn2() {

    return (
        <div className={classes.btn}>
          <img className='streamBtn' onClick={event => (window.location.href = "https://localhost:3000/")} 
          src={require('./StreamButton.png')} alt="Stream"/>
        </div>
      );
    }

export default StreamBtn2;
