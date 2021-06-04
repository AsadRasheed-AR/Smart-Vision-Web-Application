import React from 'react';
import TemporaryDrawer from './Drawer';
import Container from '@material-ui/core/Container';
import SimpleCard from './CurrentStatusCard';
import ConfigurationCard from './ConfigurationCard';
import LiveStreamCard from './LiveStreamCard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';



class App extends React.Component{
    state = {Dashboard : true , LiveStream : false , Configuration : false , configured : false};

    onNavigationclick= (name) =>{
        this.setState({Dashboard : false , LiveStream : false , Configuration : false})
        name === 'Dashboard' ? this.setState({Dashboard : true}) : name === 'LiveStream' ? this.setState({LiveStream : true}) :  this.setState({Configuration : true});
    }

    getContent(){
        if (this.state.Dashboard && !this.state.LiveStream && !this.state.Configuration && this.state.configured)
            return <SimpleCard/>
        else if (!this.state.Dashboard && this.state.LiveStream && !this.state.Configuration && this.state.configured)
            return <LiveStreamCard/>
        else if (!this.state.Dashboard && !this.state.LiveStream && this.state.Configuration && this.state.configured)
            return<ConfigurationCard/>
        else 
            return(
                <Container maxWidth="sm" style={{marginTop:'50px'}}>
                    <Card style={{minWidth:'275'}}>
                        <CardContent>
                            <Typography variant="h4" component="h2" color="primary" align='center'>
                                Loading ...
                            </Typography>
                            <Divider style={{margin:'20px'}}/>
                            <Typography variant="h6" component="h2" color="primary" align='center' style={{margin:'40px'}}>
                                Fetching Data From The Server, Please Wait ..
                            </Typography>
                            <LinearProgress color="secondary" />
                        </CardContent>
                    </Card>
                </Container>
            );
    }
componentDidMount(){
    setInterval(() => {
        this.setState({configured : true});
    },3000);
}
    render(){
        return (
            <div>
                <TemporaryDrawer onNavigation={this.onNavigationclick}/>
                <Container style={{marginTop:'10px'}}>
                    {this.getContent()}
                </Container>
            </div>
        );
    }
}

export default App