import classes from './StreamBtn2.module.css';

function StreamBtn2() {

    return (
        <div className={classes.btn}>
          <img className='streamBtn' onClick={event => (window.location.href = "http://localhost:3000")} 
          src={require('./StreamButton.png')} alt="Stream"/>
        </div>
      );
    }

export default StreamBtn2;
