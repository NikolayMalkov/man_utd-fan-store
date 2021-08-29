import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './../css/content.module.css';
import { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { addToCart } from '../store/shopcart_reducer';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20
  },
  media: {
    height: 160,
  },
  btn: {
    width: 200,
    height: 50,
    fontSize: 20,
    margin: '0 auto',
    color: 'black',
  },
  title: {
      fontWeight: 700,
      textAlign: 'center'
  }
});

export default function ItemsCard({id, img, title, price}) {
  const classes = useStyles();

  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()

  function MediaModal({img}) {
    return (
      <div className={styles.modalWrapp}>
        <div className={styles.mediaImgModal}>
            <CloseIcon onClick={() => setVisible(false)} style={{height: '50px', width: '50px', marginLeft: '500px', marginTop: '50px'}}/>
            <img src={img} alt="large-img" />
        </div>
      </div>
    )
  }

  function toCart(id, title, price){
    dispatch(addToCart(id, title, price))
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image={img}
          onClick={() => setVisible(true)}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {title}
          </Typography>

         { visible ? <MediaModal img={img} /> : null } 

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.btn}  color="primary" onClick={() => toCart(id, title, price)} >
          {price}
        </Button>
        
      </CardActions>
    </Card>
  );
}