import Logo from '../logo/Logo';
import { Container, Grid, TextField, Button } from '@mui/material';
import classNames from 'classnames';
import styles from './Header.module.scss';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <Container className={classNames(styles['header'])} maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs="auto">
          <Logo />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="search-bar"
            variant="standard"
            placeholder="Find items, users and activities"
            fullWidth
            sx={{ p: 0.5, borderRadius: 1 }}
            className={classNames(styles['background-default'])}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classNames(styles['text-primary'])} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs="auto">
          <Button variant="text" className={classNames(styles['text-primary'])}>Home</Button>
          <Button variant="text" className={classNames(styles['text-primary'])}>Activity</Button>
          <Button variant="contained">EXPLORE</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
