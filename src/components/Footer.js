import classes from './Footer.module.css';

function Footer() {

    return (
        <div>
            <img className={classes.footer} src={require('./Footer_final.png')} alt="footer"/>
        </div>
      );
    }

export default Footer;