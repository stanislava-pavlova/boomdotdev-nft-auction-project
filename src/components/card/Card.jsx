import millify from 'millify';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Card.module.scss';
import { useState } from 'react';

import Avatar from '../avatar/Avatar';
import Countdown from '../countdown/Countdown';

import { Container, IconButton, Typography, Chip, Box, Badge } from '@mui/material';
import { Card as CardContainer, CardHeader, CardMedia, CardActions } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';

export default function Card({
  name,
  likes = 0,
  mediaUrl,
  user,
  price,
  currency,
  timeLeft,
}) {
  const [live, setLive] = useState(() => {
    if (timeLeft) {
      return true;
    }
    return false;
  });

  return (
    <CardContainer sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar size={50} url={user.avatar} verified={true} />}
      />
      <Container className={classNames(styles['cardMedia-container'])}>
        {live && (
          <Chip
            className={classNames(styles['badge'])}
            icon={<CircleIcon />}
            label="live"
          />
          // <Badge className={classNames(styles['badge'])}>
          //   <CircleIcon />
          //   Live
          // </Badge>
        )}
        <CardMedia
          component="img"
          height="194"
          image={mediaUrl}
          alt="image"
          className={classNames(styles['cardMedia'])}
        />
        {live ? (
          <Container className={classNames(styles['timer-container'])}>
            <Countdown timeLeft={timeLeft} />
          </Container>
        ) : null}
      </Container>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{pl: '24px'}}>
          <Typography className={classNames(styles['name'])}>{name}</Typography>
          <Typography className={classNames(styles['price'])} color="secondary">
            {price} {currency}
          </Typography>
        </Box>
        <IconButton aria-label="add to favorites">
          <Chip
            className={classNames(styles['likes'])}
            icon={<FavoriteIcon />}
            label={millify(likes)}
            color="secondary"
            variant="outlined"
          />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  likes: PropTypes.number,
  mediaUrl: PropTypes.string,
  user:{
    avatarUrl: PropTypes.string,
    verified: PropTypes.boolean
  },
  price: PropTypes.string,
  currency: PropTypes.string,
  timeLeft: PropTypes.number,
};
