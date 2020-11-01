import React from 'react';
import { Card, Typography } from '@material-ui/core/';
import useStyles from './styles';

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} >
      <div style={{padding: '10px'}}>
           <Typography style={{padding: '10px'}} variant="h6" align="center">{post.name} ({post.symbol})</Typography>
           <Typography style={{padding: '10px'}} variant="h4" align="center" p={10}>{post.market_cap}</Typography>
           <Typography style={{padding: '10px'}} variant="h6" align="center" p={10}>{post.price_usd}</Typography>
      </div>
    </Card>
  );
};

export default Post;
