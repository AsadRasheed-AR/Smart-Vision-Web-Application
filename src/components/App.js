import React from 'react';
import TemporaryDrawer from './Drawer';
import Container from '@material-ui/core/Container';
import SimpleCard from './CurrentStatusCard';
import ConfigurationCard from './ConfigurationCard';
import LiveStreamCard from './LiveStreamCard';


class App extends React.Component{
    state = {Dashboard : false , LiveStream : false , Configuration : false};

    onNavigationclick= (name) =>{
        this.setState({Dashboard : false , LiveStream : false , Configuration : false})
        name === 'Dashboard' ? this.setState({Dashboard : true}) : name === 'LiveStream' ? this.setState({LiveStream : true}) :  this.setState({Configuration : true});
    }

    getContent(){
        if (this.state.Dashboard && !this.state.LiveStream && !this.state.Configuration)
            return <SimpleCard/>
        else if (!this.state.Dashboard && this.state.LiveStream && !this.state.Configuration)
            return <LiveStreamCard/>
        else if (!this.state.Dashboard && !this.state.LiveStream && this.state.Configuration)
            return<ConfigurationCard/>
        else 
            return (null);
    }

    render(){
        return (
            <div>
                <TemporaryDrawer onNavigation={this.onNavigationclick}/>
                <Container maxWidth="sm" style={{marginTop:'50px'}}>
                    {this.getContent()}
                </Container>
            </div>
        );
    }
}

export default App