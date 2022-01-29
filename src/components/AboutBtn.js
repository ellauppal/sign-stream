import classes from './AboutBtn.module.css';
import history from './../history';

function AboutBtn() {

    return (
        <div className={classes.btn}>
          <img className='aboutBtn' onClick={() => history.push('/about1')} src={require('./aboutbutton.png')} alt="About"/>
        </div>
      );
    }

export default AboutBtn;
