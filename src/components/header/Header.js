import styles from './Header.module.css';

import logo from '../../assets/logo.png';

import CartButton from './CartButton';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt='App Logo' />
            <CartButton></CartButton>
        </div>
    );
}
export default Header;