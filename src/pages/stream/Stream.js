import StreamBtn from '../../components/StreamBtn.js';
import StreamBtn2 from '../../components/StreamBtn2.js';
import AboutBtn from '../../components/AboutBtn.js';
import Footer from '../../components/Footer.js'
import { Container } from 'react-bootstrap';
import classes from './Stream.module.css';


function Stream() {
    return(
        <div>
            <Container>
                <img className={classes.logo} src={require('./HeaderLogo1.png')} alt="Logo"/>
                <Footer />
            </Container>
            <AboutBtn />
            <StreamBtn />
            <Footer />
    </div>
    );
}

export default Stream;