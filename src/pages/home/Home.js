import StreamBtn from '../../components/StreamBtn.js';
import StreamBtn2 from '../../components/StreamBtn2.js';
import AboutBtn from '../../components/AboutBtn.js';
import BackgroundPic from '../../components/BackgroundPic.js';
import Footer from '../../components/Footer.js'
import { Container } from 'react-bootstrap';
import classes from './Home.module.css';

function Home() {
    return (
    <div>
        <Container>
            <BackgroundPic />
            <img className={classes.logo} src={require('./HeaderLogo1.png')} alt="face"/>
            <img className={classes.biglogo} src={require('./BigLogos2.png')} alt="face"/>
            <img className={classes.white} src={require('./IntroVisual.png')} alt="face"/>
            <img className={classes.black} src={require('./How.png')} alt="face"/>
            <img className={classes.process} src={require('./HomePage_Process.png')} alt="face"/>
            <img className={classes.grad} src={require('./Voila.png')} alt="face"/>
            <Footer />
        </Container>
        <AboutBtn />
        <StreamBtn />
        <StreamBtn2 />

    </div>);
}

export default Home;