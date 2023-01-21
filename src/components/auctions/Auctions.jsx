import Card from '../card/Card';
import styles from './Auctions.module.scss';
import classNames from 'classnames';

import {
  Container,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

export default function Auctions({ cards = [] }) {
  return (
    <Container maxWidth="xl">
      <header className={classNames(styles.header)}>
        <h1>🔥 Live Auctions</h1>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>This week</InputLabel>
          <Select id="trending-select-small">
            <MenuItem>This week</MenuItem>
            <MenuItem>This month</MenuItem>
            <MenuItem>This year</MenuItem>
          </Select>
        </FormControl>
      </header>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid container justifyContent="center" spacing={4}>
          {cards.map((card, value) => (
            <Grid key={value} item>
              <Card
                name={card.name}
                user={card.user}
                mediaUrl={card.mediaUrl}
                price={card.price}
                currency={card.currency}
                timeLeft={card.timeLeft}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

// const cards = [
//     {
//       name: 'Ivy',
//       user: {
//         avatar: 'images/avatar.png',
//         verified: true,
//       },
//       mediaUrl: 'images/nft.jpg',
//       price: 1,
//       currency: 'ETH',
//       timeLeft: 5000,
//     },
//     {
//       name: 'Judie',
//       user: {
//         avatar: 'images/avatar.png',
//         verified: true,
//       },
//       mediaUrl: 'images/nft.jpg',
//       price: 2.3,
//       currency: 'ETH',
//       timeLeft: 5000,
//     },
//     {
//       name: 'Juniper',
//       user: {
//         avatar: 'images/avatar.png',
//         verified: true,
//       },
//       mediaUrl: 'images/nft.jpg',
//       price: 5,
//       currency: 'ETH',
//       timeLeft: 5000,
//     },
//     {
//       name: 'Maple',
//       user: {
//         avatar: 'images/avatar.png',
//         verified: true,
//       },
//       mediaUrl: 'images/nft.jpg',
//       price: 10,
//       currency: 'ETH',
//       timeLeft: 5000,
//     },
//   ];
