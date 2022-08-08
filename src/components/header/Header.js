import styles from './Header.module.css';

import logo from '../../assets/logo.png';

import CartButton from './CartButton';

const Header = props => {

    console.log(props.getMealToAdd());

    return (
        <div className={styles.header}>
            <img src={logo} alt='App Logo' />
            <CartButton onClick={props.onShowModal}></CartButton>
        </div>
    );
}
export default Header;