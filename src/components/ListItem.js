import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


export default function MyListItem(props){
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