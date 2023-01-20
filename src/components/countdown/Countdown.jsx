import Countdown from 'react-countdown';
import styles from './Countdown.module.scss';
import classNames from 'classnames';

export default function CountdownComponent({ timeLeft }) {
  return <Countdown date={Date.now() + timeLeft} />;
}
