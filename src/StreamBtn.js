import classes from './StreamBtn.module.css';

function StreamBtn() {

    return (
        <div className={classes.btn}>
          <img className='face' src={require('/Users/lilistrong/home-page/src/components/streambutton.png')} alt="face"/>
        </div>
      );
    }

export default StreamBtn;
