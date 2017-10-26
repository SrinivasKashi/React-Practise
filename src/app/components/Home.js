import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age:props.age,
            change:true,
            headerLink:"handle link"
        }
        this.handleChange = this.handleChange.bind(this);
        console.log("constructor ");
    }

    myFunction(){
        this.setState({
            age:this.state.age +3,
            change:!this.state.change
        })
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps"+nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState);
        if(nextProps.age<=28){
            return true;
        }else{
            return false;
        }
        
    }

    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate"+nextProps);
        return true;
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate"+prevProps);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    changeLink(data){
        console.log(data);
        this.props.changedHeaderLink(this.state.headerLink);
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            headerLink:event.target.value
        });
    }

    render(){
        let comp = '';
        if(this.state.change){
            comp = (<h1>This is header one component</h1>)
        }else{
            comp = (<h1>This is header two component</h1>)
        }
        
        return(
            <div className="container">
                <p>This is {this.props.name} and my age is {this.state.age}</p>
                <ul>
                    {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                </ul>
                <hr/>
                <button onClick={this.myFunction.bind(this)} className="btn btn-primary">
                    Click Me
                </button>
                <p>
                    {comp}
                </p>
                <hr/>
                <input type="text" 
                    value = {this.state.headerLink}
                    onChange={(event) => this.handleChange(event)}/>
                <br/>
                <button onClick={this.changeLink.bind(this,"new header link")} className="btn btn-primary">
                    Change the Link
                </button>
            </div>
        );
    }
};

Home.propTypes = {
    name:React.PropTypes.string,
    age:React.PropTypes.number,
    user:React.PropTypes.object,
    changedHeaderLink:React.PropTypes.func
};