import React from 'react';
import { render } from 'react-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            headerLink:'Home'
        }
    }

    changedHeaderLink(newData){
        console.log(newData);
        this.setState({
            headerLink:newData
        });
    }

    render(){
        let user = {
            "job":"engineer",
            "hobbies":["cricket","volleybal"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header headerLink={this.state.headerLink}/>
                    </div>    
                </div> 
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={"Harsha"} 
                            age={28} 
                            user={user} 
                            headerLink={this.state.headerLink}
                            changedHeaderLink = {this.changedHeaderLink.bind(this)}
                            />
                    </div>    
                </div> 
            </div>
        );
    }
}

render(<Main/>,document.getElementById("container"));