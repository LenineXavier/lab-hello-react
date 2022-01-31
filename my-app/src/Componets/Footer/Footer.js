import styles from './styles.module.css';
import icone1 from '../../images/icon1.png';
import icone2 from '../../images/icon2.png';
import icone3 from '../../images/icon3.png';
import icone4 from '../../images/icon4.png';

function Footer(){
    return(
        <nav className={styles.footer}>
        <img src={icone1} alt='ironlogo'/>
        <img src={icone2} alt='ironlogo'/>
        <img src={icone3} alt='ironlogo'/>
                  
        <img src={icone4} alt='menu'/> 
        </nav>
    )
}
export default Footer;