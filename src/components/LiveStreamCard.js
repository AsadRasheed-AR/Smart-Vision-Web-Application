import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import image from './test.jpg';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function LiveStreamCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
      <Card className={classes.root}>
      <CardContent>
      <img src={image} alt='Live Stream' style={{maxWidth:'100%',height:'auto',marginBottom:'40px'}}/>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button variant="contained" color="secondary" size='large'>
            Show Processed Video
        </Button>
      </div>
      
      </CardContent>
      </Card>
      </div>
 
  );
}
