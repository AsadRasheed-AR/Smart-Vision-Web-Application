import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import ToysIcon from '@material-ui/icons/Toys';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';
import { green } from '@material-ui/core/colors';

class SimpleCard extends React.Component{
  // const bull = <span className={classes.bullet}>•</span>;

  render (){
  return (<div>
    <Card style={{minWidth:'275'}}>
      <CardContent>
        <Typography variant="h4" component="h2" color="textSecondary" align='center'>
          Current Status
        </Typography>
        <Divider style={{margin:'20px'}}/>

        <List>
            <ListItem>
                <ListItemIcon>
                    <ToysIcon fontSize='large' color='primary' />
                </ListItemIcon>
        <   ListItemText id="switch-list-label-wifi" primary="Ceilling Fan"/>
            <ListItemSecondaryAction  style={{marginRight:'40px'}}>
                <Switch
                edge="end"
                // onChange={handleToggle('wifi')}
                // checked={checked.indexOf('wifi') !== -1}
                // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                />
            </ListItemSecondaryAction>
            {/* <FlashAutoIcon style={{ color: green[500] }}/> */}
            </ListItem>
            <Divider style={{margin:'20px'}}/>
            <ListItem>
                <ListItemIcon>
                    <WbIncandescentIcon fontSize='large' color='secondary' />
                </ListItemIcon>
        <   ListItemText id="switch-list-label-wifi" primary="Energy Saver"/>
            <ListItemSecondaryAction style={{marginRight:'40px'}}>
                <Switch
                edge="end"
                // onChange={handleToggle('wifi')}
                // checked={checked.indexOf('wifi') !== -1}
                // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                />
            </ListItemSecondaryAction>
            {/* <FlashAutoIcon style={{ color: green[500] }}/> */}
            </ListItem>
            <Divider style={{margin:'20px'}}/>
            <ListItem>
                <ListItemIcon>
                    <AcUnitOutlinedIcon fontSize='large' color='primary' />
                </ListItemIcon>
        <   ListItemText id="switch-list-label-wifi" primary="AC"/>
            <ListItemSecondaryAction style={{marginRight:'40px'}}>
                <Switch
                edge="end"
                // onChange={handleToggle('wifi')}
                // onChange={(e)=>{console.log(e.target.checked)}}
                // checked={checked.indexOf('wifi') !== -1}
                // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                />
            </ListItemSecondaryAction>
            {/* <FlashAutoIcon color='disabled'/> */}
            </ListItem>
            <FlashAutoIcon color='disabled'/>
        </List>
      </CardContent>
    </Card>
    </div>
  );
}}

export default SimpleCard
