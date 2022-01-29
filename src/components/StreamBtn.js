import classes from './StreamBtn.module.css';
import history from './../history';

function StreamBtn2() {

    return (
        <div className={classes.btn}>
          <img className='streamBtn' onClick={() => history.push('/stream')} src={require('./streambutton.png')} alt="Stream"/>
        </div>
      );
    }

export default StreamBtn2;
