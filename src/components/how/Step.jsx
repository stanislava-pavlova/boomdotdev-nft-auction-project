import classNames from 'classnames';
import styles from './Step.module.scss';
import { Typography } from '@mui/material';
import { Card as CardContainer, CardContent } from '@mui/material';

export default function Step({number, title, description}) {
  return (
    <CardContainer sx={{ maxWidth: 450, maxHeight: 345, display: 'flex', alignItems: 'center' }}>
      <CardContent className={classNames(styles['number-container'])}>
        <Typography className={classNames(styles['number'])}>{number}</Typography>
      </CardContent>

      <CardContent className={classNames(styles['text-container'])}>
        <Typography className={classNames(styles['title'])}>
          {title}
        </Typography>
        <Typography className={classNames(styles['description'])}>
          {description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
}
