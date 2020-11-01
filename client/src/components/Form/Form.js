import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { getPosts } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ searchKey: '', price: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ searchKey: '', price: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      setCurrentId(0);
      dispatch(getPosts(postData));
    } else {
      setCurrentId(0);
      dispatch(getPosts(currentId, postData));
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Search for bitcoin '}</Typography>
        <TextField name="searchKey" variant="outlined" label="Search by Value" fullWidth value={postData.searchKey} onChange={(e) => setPostData({ ...postData, searchKey: e.target.value })} />
        <TextField name="price" variant="outlined" label="price" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })} />        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Get</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
