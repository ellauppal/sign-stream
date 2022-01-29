import classes from './StreamBtn2.module.css';
import history from './../history';

function StreamBtn2() {

    return (
        <div className={classes.btn}>
          <img className='streamBtn' onClick={() => history.push('/stream')} src={require('./streambutton-1.png')} alt="Stream"/>
        </div>
      );
    }

export default StreamBtn2;
