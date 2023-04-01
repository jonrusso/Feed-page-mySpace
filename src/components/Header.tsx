import styles from './Header.module.css';
import mySpaceLogo from '../assets/logo-mySpace.svg';
import { Avatar } from './Avatar';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={mySpaceLogo} alt="mySpace-logo" />
      <h1>my<span>Space</span> | Community</h1>
    </header>
  );
}
