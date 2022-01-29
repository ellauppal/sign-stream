import StreamBtn from '../../components/StreamBtn.js';
import AboutBtn from '../../components/AboutBtn.js';
import Footer2 from '../../components/Footer2.js'
import { Container } from 'react-bootstrap';
import classes from './About1.module.css';
import BackgroundPicAbout from '../../components/BackgroundPicAbout.js';
import BackgroundPicAbout2 from '../../components/BackgroundPicAbout2.js';
import history from '../../history';

function About1() {
    return(
        <div>
            <Container>
            <BackgroundPicAbout />
            <BackgroundPicAbout2/>
                <img className={classes.logo} src={require('./HeaderLogo1.png')} onClick={() => history.push('/')} alt="Logo"/>
                <img className={classes.whySS} src={require('./whySS.png')} alt="why" />
            </Container>
            <AboutBtn />
            <StreamBtn />    
            <Footer2 />
    </div>
    );
}

export default About1;