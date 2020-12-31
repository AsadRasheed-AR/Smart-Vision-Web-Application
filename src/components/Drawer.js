import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ButtonAppBar from './AppBar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const onNavigationBtnClick = (event) => {
  //   props.onNavigation(event.target.text);
  // }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <Divider style={{margin:'20px'}} />
      <List>
        {['Dashboard', 'LiveStream', 'Configuration'].map((text, index) => (
          // <ListItem button key={text} onClick={onNavigationBtnClick}>
          <ListItem button key={text} onClick={(e) => props.onNavigation(text)}>
            <ListItemIcon>
                {index === 0 ? <DashboardIcon color='secondary' fontSize='large' /> : index === 1 ?  <VoiceChatIcon color='secondary' fontSize='large'/> : <SettingsIcon color='secondary' fontSize='large'/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
        <ButtonAppBar onClick={toggleDrawer}/>
        <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
    </div>
  );
}
