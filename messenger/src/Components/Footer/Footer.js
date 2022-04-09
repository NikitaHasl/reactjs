
import "./Footer.styles.css";

export const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>©{year} Messenger | All Rights Reserved</p>
        </footer>
    )
}