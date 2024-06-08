import React, { Component } from 'react'
import { Log } from './Log'
import { Reg } from './Reg'


export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islog:false
      }
    }
  render() {
    if(this.state.islog){
        return(
           <Log/>
        )    
    }
    else{
        return(
          <Reg/>
        )
    }
    
  }
}
