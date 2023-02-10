import classNames from 'classnames';
import styles from './Step.module.scss';
import { Typography } from '@mui/material';
import { Card as CardContainer, CardContent } from '@mui/material';

export default function Step() {
  return (
    <CardContainer
      sx={{
        maxWidth: 450,
        maxHeight: 345,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CardContent className={classNames(styles['number-container'])}>
        <Typography className={classNames(styles['number'])}>1</Typography>
      </CardContent>

      <CardContent className={classNames(styles['text-container'])}>
        <Typography className={classNames(styles['title'])}>Title</Typography>
        <Typography className={classNames(styles['description'])}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </Typography>
      </CardContent>
    </CardContainer>
  );
}
