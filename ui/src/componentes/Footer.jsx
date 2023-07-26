import React from 'react';
import styles from './Footer.module.css';
import { useLocation, useNavigate} from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.contato}>
                    <h4 onClick={() => {navigate("/sobrenos") }}>Sobre Nós :</h4>
                </div>
                <div className={styles.assinatura}>
                    <h4>Developed by Victor Hugo &hearts;SPTech &copy; 2023</h4>
                </div>
                <div className={styles.endereco}>
                        <h4>Rua Haddock Lobo 595 - SP</h4>
                </div>
            </div>
        </>
    );
}

export default Footer;
