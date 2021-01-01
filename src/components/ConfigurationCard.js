import React from 'react';
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
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';


class ConfigurationCard extends React.Component {
  state = {Btn1_autoControl:false, Btn2_autoControl:false , Btn3_autoControl:false};


  initializeComponent = async () =>{
    const response = await axios.get('/getControlStatus');
    const btn1_AutoControl = response.data['Btn1_autoControl'];
    const btn2_AutoControl = response.data['Btn2_autoControl'];
    const btn3_AutoControl = response.data['Btn3_autoControl'];
  
    this.setState({
      Btn1_autoControl : btn1_AutoControl,
      Btn2_autoControl : btn2_AutoControl,
      Btn3_autoControl : btn3_AutoControl
  
    });
  }

  setControlStatus = async () => {
    const response = await axios.post('/switch_autoControl', this.state);
    console.log(response.status)
  }

  handleToggle(btnName,status) {
    switch (btnName) {
      case 'btn1':
         this.setState({Btn1_autoControl: status})      
        break;
      case 'btn2':
          this.setState({Btn2_autoControl: status}) 
        break;
      case 'btn3':
          this.setState({Btn3_autoControl: status})
          break;
    
      default:
        break;
    }
  }

  componentDidMount(){
    this.initializeComponent();
  }

  getContent(){
    return (
      <Card style={{minWidth:'275'}}>
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
                  onChange={(e)=>this.handleToggle('btn1',e.target.checked)}
                  checked={this.state.Btn1_autoControl}
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
                  onChange={(e)=>this.handleToggle('btn2',e.target.checked)}
                  checked={this.state.Btn2_autoControl}
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
                  onChange={(e)=>this.handleToggle('btn3',e.target.checked)}
                  checked={this.state.Btn3_autoControl}
                  />
              </ListItemSecondaryAction>
              </ListItem>
          </List>
          <div style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
          <Button variant="contained" color="primary" disableElevation size='large' onClick={this.initializeComponent}>
            Get Status
          </Button>
          <Button variant="contained" color="primary" disableElevation size='large' onClick={this.setControlStatus}>
            Set Status
          </Button>
            </div>
          </Grid>
          </Grid>
          
        </CardContent>
      </Card>
    );

  }


  render(){
      return <div>{this.getContent()}</div>
 }
}


export default ConfigurationCard