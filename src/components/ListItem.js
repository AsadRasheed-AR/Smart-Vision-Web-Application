import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';
import { green } from '@material-ui/core/colors';



function MyListItem_CheckBox(props){
    return(
    <ListItem>
        <ListItemIcon>
            {props.icon}
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary={props.btnText}/>
        <ListItemSecondaryAction  style={{marginRight:'40px'}}>
        <Checkbox
        edge="end"
        onChange={(e)=>props.onToggle(props.name,e.target.checked)}
        checked={props.curState}
        />
        </ListItemSecondaryAction>
    </ListItem>);
}

function MyListItem_Switch(props){
    return(
    <ListItem>
        <ListItemIcon>
            {props.icon}
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary={props.btnText}/>
        <ListItemSecondaryAction  style={{marginRight:'40px'}}>
        <Switch
        edge="end"
        onChange={(e)=>props.onToggle(props.name,e.target.checked)}
        checked={props.curState}
        />
        </ListItemSecondaryAction>
        {props.autoControl && <FlashAutoIcon style={{ color: green[500] }}/>}
        {!props.autoControl && <FlashAutoIcon color="disabled"/>}
    </ListItem>);
}

export {
    MyListItem_CheckBox,
    MyListItem_Switch,
  }