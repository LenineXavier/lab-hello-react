import style from './styles.module.css';
import imagem1 from '../../images/ironhack-logo-xs.png';
import imagem2 from '../../images/menu-top-xs.png';

function NavBar(){
    return(
        
        <nav className={style.navbar}>
        <img src={imagem1} alt='ironlogo'/>
                  
        <img src={imagem2} alt='menu'/> 
        </nav>
                
        
    );
}

export default NavBar;