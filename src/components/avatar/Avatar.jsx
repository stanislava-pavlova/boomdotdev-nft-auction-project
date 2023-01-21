import classNames from 'classnames';
import styles from './Avatar.module.scss';

export default function Avatar({ size = 90, url = 'images/avatar.png', verified = false }) {
  return (
    <div
      style={{ height: size, width: size }}
      className={classNames(styles['avatar'])}
    >
      <img src={url} alt="avatar" className={classNames(styles['image'])} />
      <img
        src={'images/verified.svg'}
        alt="verified"
        style={{ display: verified ? 'block' : 'none' }}
        className={classNames(styles['badge'])}
      />
    </div>
  );
}

// Avatar.defaultProps = {
//   size: 90,
//   url: 'images/avatar.png',
//   verified: false,
// };
