import { Link } from 'react-router-dom';

const LoginModal = ({ onClose }) => (
    <div className='login-modal'>
        <p>Please log in to view favorites.</p>
        <button onClick={onClose}>Close</button>
        <Link to='/login'>Log In</Link>
    </div>
);

export default LoginModal;