import Step from './Step';
import styles from './How.module.scss';
import classNames from 'classnames';
import { Container, Grid, Typography, Button } from '@mui/material';

export default function () {
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <Step />
    </Container>
  );
}
