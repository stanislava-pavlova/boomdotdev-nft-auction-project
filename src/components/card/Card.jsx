import millify from 'millify';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Card.module.scss';

import CardContainer from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '../avatar/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';

export default function Card({
  name,
  likes = 0,
  mediaUrl,
  user,
  price,
  currency,
}) {
  return (
    <CardContainer sx={{ maxWidth: 345 }}>
      <CardHeader avatar={<Avatar size={50} verified={true} />} />
      <CardMedia
        component="img"
        height="194"
        image={mediaUrl}
        alt="image"
      />
      <CardActions>
        <Container className={classNames(styles['cardActions-container'])}>
          <Typography className={classNames(styles['name'])}>{name}</Typography>
          <Typography className={classNames(styles['price'])} color="secondary">
            {price} {currency}
          </Typography>
        </Container>
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
  user: {
    avatar: {
      url: PropTypes.string,
    },
    verified: PropTypes.bool,
  },
  price: PropTypes.string,
  currency: PropTypes.string,
};
