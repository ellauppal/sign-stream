import classes from './StreamBtn.module.css';
import history from './../history';

function StreamBtn2() {

    return (
        <div className={classes.btn}>
          <img className='streamBtn' onClick={event => (window.location.href = "https://localhost:3000/")}  
          src={require('./streambutton-1.png')} alt="Stream"/>
        </div>
      );
    }

export default StreamBtn2;
