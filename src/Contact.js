import React ,{ Component } from 'react';

class Contact extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            arr:[
                {
                    name:'suraj',
                    age:21
                }, {
                    name:'ankit',
                    age:21
                },
                
            ]
        }
        console.log(this.state.arr)
    }
    render(){
        return(
            <h1>{this.state.arr[0].age}</h1>
        );
    }
}
export default Contact;