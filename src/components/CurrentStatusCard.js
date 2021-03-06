import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ToysIcon from '@material-ui/icons/Toys';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import axios from 'axios';
import {MyListItem_Switch} from './ListItem';
import AlertDialogSlide from './DialogBox';
import CustomizedSnackbars from './SnackBar';
import Container from '@material-ui/core/Container';

class SimpleCard extends React.Component{

  state = {btn1:false , btn2:false , btn3:false ,btn1Auto:true, btn2Auto:true , btn3Auto:true , showDialog : false ,showSnackBar : true};

  setCurrentStatus = async (data) => {
    const response = await axios.post('/setCurrentStatus', data);
    let res = response.status == 200 ?  true : false
    return res
  }

  handleToggle = (btnName,status) => {
    switch (btnName) {
      case 'btn1':
        if (!this.state.btn1Auto){
          const res = this.setCurrentStatus({Btn1_status : status})
          res ? this.setState({btn1: status}) : console.log('Error Occured')
        } else {this.setState({showDialog : true});}     
        break;
      case 'btn2':
        // if (!this.state.btn2Auto)
        //   this.setState({btn2: status}) 
        if (!this.state.btn2Auto){
          this.setCurrentStatus({Btn2_status : status}).then(this.setState({btn2: status}))
        } else {this.setState({showDialog : true});}
        break;
      case 'btn3':
        if (!this.state.btn3Auto){
          this.setCurrentStatus({Btn3_status : status}).then(this.setState({btn3: status}))
        } else {this.setState({showDialog : true});} 
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
  const btn1_status = this.state.btn1Auto ? response.data['Btn1_status'] : this.state.btn1;
  const btn2_status = this.state.btn2Auto ? response.data['Btn2_status'] : this.state.btn2;
  const btn3_status = this.state.btn3Auto ? response.data['Btn3_status'] : this.state.btn3;
  const esp_status = response.data['esp_connected'];

  if (this.state.btn1 != btn1_status || this.state.btn2 != btn2_status || this.state.btn3 != btn3_status)
  {
    this.setState({
      btn1 : btn1_status ,
      btn2 : btn2_status , 
      btn3 : btn3_status 
     })
     console.log('Previous status is not equal to Current')
  }
  if (this.state.showSnackBar != (!esp_status))
    this.setState({showSnackBar : !esp_status})
}

closeDialog = () => {
  this.setState({showDialog : false});
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
            <MyListItem_Switch 
              btnText="Ceilling Fan" 
              name='btn1' 
              icon={<ToysIcon fontSize='large' color='primary' />} 
              onToggle={this.handleToggle} 
              curState={this.state.btn1} 
              autoControl={this.state.btn1Auto}/>

            <MyListItem_Switch 
              btnText="Energy Saver" 
              name='btn2' 
              icon={<WbIncandescentIcon 
              fontSize='large' color='secondary' />} 
              onToggle={this.handleToggle} 
              curState={this.state.btn2} 
              autoControl={this.state.btn2Auto}/>

            <MyListItem_Switch 
              btnText="AC"           
              name='btn3' 
              icon={<AcUnitOutlinedIcon fontSize='large' color='primary' />} 
              onToggle={this.handleToggle} 
              curState={this.state.btn3} 
              autoControl={this.state.btn3Auto}/>
          </List>
        </CardContent>
      </Card>
    )
  }

  render(){
       return (
        <div>
          <Container maxWidth="sm" style={{marginTop:'50px'}}>
            {this.getContent()}
          </Container>
          <AlertDialogSlide openDialog={this.state.showDialog} closeDialog={this.closeDialog}/>
          <CustomizedSnackbars state={this.state.showSnackBar} message="Wifi Module Not Responding , Please Check Connection !"/>
        </div>
        
       )
  }
  }

export default SimpleCard
