import classes from './StreamBtn.module.css';

function StreamBtn2() {

    return (
        <div className={classes.btn}>
          <img className='streamBtn' onClick={event => (window.location.href = "http://localhost:3000")}  
          src={require('./streambutton-1.png')} alt="Stream"/>
        </div>
      );
    }

export default StreamBtn2;
