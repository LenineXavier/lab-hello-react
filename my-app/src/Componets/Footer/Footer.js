import styles from './styles.module.css';
import icone1 from '../../images/icon1.png';
import icone2 from '../../images/icon2.png';
import icone3 from '../../images/icon3.png';
import icone4 from '../../images/icon4.png';

function Footer(){
    return(
        
        <nav className={styles.Footer}>
            <div>
        <img src={icone1} alt='ironlogo'/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
        </div>

            <div>
        <img src={icone2} alt='ironlogo'/>
        <h2>Componets</h2>
        <p>Build encapsulated components that manage their state</p>
        </div>

            <div>
        <img src={icone3} alt='ironlogo'/>
        <h2>Single-Way</h2>
        </div>

        <div>
        <img src={icone4} alt='menu'/> 
        <h2>JSX</h2>
        </div> 
        </nav>

        
    )
}
export default Footer;