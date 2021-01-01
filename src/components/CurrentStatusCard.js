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
import axios from 'axios';



class SimpleCard extends React.Component{

  state = {btn1:false , btn2:false , btn3:false ,btn1Auto:true, btn2Auto:true , btn3Auto:true , configured : false};

  handleToggle(btnName,status) {
    switch (btnName) {
      case 'btn1':
        if (!this.state.btn1Auto)
          this.setState({btn1: status})      
        break;
      case 'btn2':
        if (!this.state.btn2Auto)
          this.setState({btn2: status}) 
        break;
      case 'btn3':
        if (!this.state.btn3Auto)
          this.setState({btn3: status})
          break;
    
      default:
        break;
    }
  }

initializeComponent = async () =>{
  let response = await axios.get('/getCurrentStatus');
  const btn1_status = response.data['Btn1_status'];
  const btn2_status = response.data['Btn2_status'];
  const btn3_status = response.data['Btn3_status'];

  response = await axios.get('/getControlStatus');
  const btn1_AutoControl = response.data['Btn1_autoControl'];
  const btn2_AutoControl = response.data['Btn2_autoControl'];
  const btn3_AutoControl = response.data['Btn3_autoControl'];

  this.setState({
    btn1 : btn1_status,
    btn2 : btn2_status, 
    btn3 : btn3_status,
    btn1Auto : btn1_AutoControl,
    btn2Auto : btn2_AutoControl,
    btn3Auto : btn3_AutoControl

  });
}

getCurrentStatus = async () => {
  const response = await axios.get('/getCurrentStatus');
  const btn1_status = this.state.btn1Auto ? response.data['Btn1_status'] : this.state.btn1Auto;
  const btn2_status = this.state.btn1Auto ? response.data['Btn2_status'] : this.state.btn2Auto;
  const btn3_status = this.state.btn1Auto ? response.data['Btn3_status'] : this.state.btn3Auto;

  if (this.state.btn1 != btn1_status && this.state.btn2 != btn2_status && this.state.btn3 != btn3_status)
    this.setState({
       btn1 : btn1_status ,
       btn2 : btn2_status , 
       btn3 : btn3_status 
      })
}

componentDidMount(){
  this.initializeComponent();
}

componentDidUpdate(){
    this.getCurrentStatus();
  }

  getContent(){
    return (
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
                  onChange={(e)=>this.handleToggle('btn1',e.target.checked)}
                  checked={this.state.btn1}
                  />
              </ListItemSecondaryAction>
              <FlashAutoIcon style={{ color: green[500] }}/>
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
                  onChange={(e)=>this.handleToggle('btn2',e.target.checked)}
                  checked={this.state.btn2}
                  />
              </ListItemSecondaryAction>
              <FlashAutoIcon style={{ color: green[500] }}/>
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
                  onChange={(e)=>this.handleToggle('btn3',e.target.checked)}
                  checked={this.state.btn3}
                  />
              </ListItemSecondaryAction>
              <FlashAutoIcon color='disabled'/>
              </ListItem>
          </List>
        </CardContent>
      </Card>
    )
  }

  render(){
       return <div>{this.getContent()}</div>
  }
  }

export default SimpleCard
