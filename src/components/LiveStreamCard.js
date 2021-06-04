import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class LiveStreamCard extends React.Component {
  state = {showProcessedVideo : false};

  getVideoStatus = async () => {
    const response = await axios.get('/getVideoStatus');
    if (response.status == 200){
      this.setState({showProcessedVideo : response.data['showProcessedVideo']})
    }
  }

  onButtonClick = async () => {
    const response = await axios.post('/switchVideo', {showProcessedVideo : !this.state.showProcessedVideo});
    if (response.status == 200){
      this.setState({showProcessedVideo : !this.state.showProcessedVideo})
      console.log(response.status)
      console.log(this.state)
    }
  }

  componentDidMount(){
    this.getVideoStatus();
  }

  render(){
  return (
      <div>
      <Card style={{minWidth: 275}}>
      <CardContent>
      <img src='http://127.0.0.1:5000/video_feed' alt='Live Stream' style={{width:'100%',height:'90vh',marginBottom:'40px'}}/>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button variant="contained" color="secondary" size='large' onClick={this.onButtonClick}>
            {this.state.showProcessedVideo ? 'Show Orignal Video' : 'Show Processed Video'}
        </Button>
      </div>
      
      </CardContent>
      </Card>
      </div>
 
  )};
}

export default LiveStreamCard