import Logo from '../logo/Logo';
import styles from './Footer.module.scss';
import { Container, Grid, Typography, Button } from '@mui/material';
import classNames from 'classnames';

export default function Footer() {
  return (
    <Container className={classNames(styles['footer'])} maxWidth="xl">
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs="auto">
          <Logo type="muted" />
        </Grid>
        <Grid item xs="auto">
          <Typography className={classNames(styles['paragraph'])}>
            Bum All Rights Reserved 2021
          </Typography>
        </Grid>
        <Grid item xs="auto" className={classNames(styles['buttons'])}>
          <Button>Privacy Policy</Button>
          <Button>Cookie Policy</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
