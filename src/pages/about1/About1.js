import StreamBtn from '../../components/StreamBtn.js';
import AboutBtn from '../../components/AboutBtn.js';
import Footer from '../../components/Footer.js'
import { Container } from 'react-bootstrap';
import classes from './About1.module.css';
import BackgroundPicAbout from '../../components/BackgroundPicAbout.js';

function About1() {
    return(
        <div>
            <Container>
            <BackgroundPicAbout />
                <img className={classes.logo} src={require('./HeaderLogo1.png')} alt="Logo"/>
                <img className={classes.whySS} src={require('./whySS.png')} alt="why" />
                <img className={classes.pic} src={require('./ProblemPic.png')} alt = "pic" />
                <Footer />
            </Container>
            <AboutBtn />
            <StreamBtn />    
            <Footer />
    </div>
    );
}

export default About1;