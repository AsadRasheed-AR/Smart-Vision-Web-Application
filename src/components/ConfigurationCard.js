import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ToysIcon from '@material-ui/icons/Toys';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
// import BasicTable from './ConfigurationTable';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';




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

export default function ConfigurationCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2" color="textSecondary" align='center'>
          Configuration
        </Typography>
        <Divider style={{margin:'20px'}}/>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
          <Typography variant="h6" component="h2" color="textSecondary">
            Controls
          </Typography>
          <Typography variant="h6" component="h2" color="textSecondary" >
            Auto Control Status
          </Typography>
          </div>

          <List>
            <ListItem>
                <ListItemIcon>
                    <ToysIcon fontSize='large' color='primary' />
                </ListItemIcon>
        <   ListItemText id="switch-list-label-wifi" primary="Ceilling Fan"/>
            <ListItemSecondaryAction  style={{marginRight:'40px'}}>
                <Checkbox
                edge="end"
                // onChange={handleToggle('wifi')}
                // checked={checked.indexOf('wifi') !== -1}
                // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                />
            </ListItemSecondaryAction>
            </ListItem>
            <Divider style={{margin:'20px'}}/>
            <ListItem>
                <ListItemIcon>
                    <WbIncandescentIcon fontSize='large' color='secondary' />
                </ListItemIcon>
        <   ListItemText id="switch-list-label-wifi" primary="Energy Saver"/>
            <ListItemSecondaryAction style={{marginRight:'40px'}}>
                <Checkbox
                edge="end"
                // onChange={handleToggle('wifi')}
                // checked={checked.indexOf('wifi') !== -1}
                // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                />
            </ListItemSecondaryAction>
            </ListItem>
            <Divider style={{margin:'20px'}}/>
            <ListItem>
                <ListItemIcon>
                    <AcUnitOutlinedIcon fontSize='large' color='primary' />
                </ListItemIcon>
        <   ListItemText id="switch-list-label-wifi" primary="AC"/>
            <ListItemSecondaryAction style={{marginRight:'40px'}}>
                <Checkbox
                edge="end"
                // onChange={handleToggle('wifi')}
                // onChange={(e)=>{console.log(e.target.checked)}}
                // checked={checked.indexOf('wifi') !== -1}
                // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                />
            </ListItemSecondaryAction>
            </ListItem>
        </List>
        <div style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
        <Button variant="contained" color="primary" disableElevation size='large'>
          Get Status
        </Button>
        <Button variant="contained" color="primary" disableElevation size='large'>
          Set Status
        </Button>
          </div>
        </Grid>
        </Grid>
        
      </CardContent>
    </Card>
  );
}
