//import area
//import something from 'somelibrary';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//Create an class Component
class Oklabs extends Component{
    //1.Property

    //2.Constructor
    constructor(props){
        //Call the parent Constructor
        super(props);
    }
    //3. Methods
    //Every class Component Must have render method
    //Normal Function
    priyanka(){
        alert('Its working');
    }
    //Fat Arrow Function i.e ES6 Feature
    dolloracademy = ()=>{
        alert('Its working Again');
    }
    static getDerivedStateFromProps(props,state){
        return{favoritecolor: props.favcol};
    }
    render(){
        //render method must return HTML (JSX)
        return(
            <React.Fragment>
                <h1>Hello welcome to React </h1>
                <p> My Favourite Color is { this.state.favouritecolor}</p>
                <button type="button" onClick={ this.priyanka }> Click Me!</button>
                <button type="button" onClick={ this.dollaracademy }> Click Me Again !</button>
            </React.Fragment>
        );

    }
}
//object.method();
ReactDOM.render(<Oklabs favcol="yellow"/>,document.getElementById('root'))//actual argument