import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
  descr: {
      fontWeight: 700,
      textAlign: 'center'
  }
});

export default function ItemsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://1.bp.blogspot.com/-pQDQCqOD7mI/YO_vcj7yrEI/AAAAAAACuT0/kEpVPXzMxe8132P7vu_cgbjX98iyFdwegCLcBGAsYHQ/s1000/manchester-united-21-22-home-kit-7.jpg"
        />
        <CardContent>
          <Typography className={classes.descr} gutterBottom variant="h5" component="h2">
            Manchester United home kit 21/22
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.btn}  color="primary">
          $ 100
        </Button>
        
      </CardActions>
    </Card>
  );
}