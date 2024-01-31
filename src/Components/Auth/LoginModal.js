import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';
import Login from './Login';

const LoginModal = ({ onClose }) => (
    <div className={styles.loginModal}>
        <button className={styles.closeButton} onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
        <p>Please log in to view favorites.</p>
        <Login/>
    </div>
);

export default LoginModal;