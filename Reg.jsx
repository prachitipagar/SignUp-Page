import React from 'react'
import { Fragment } from 'react'
import "./Reg2.css"

export const Reg = () => {
  return (
    <Fragment>
        <div id='parents'>
            <div id='child1'><h1>Sign Up</h1></div>
            <div id='child2'>
                <input type='text' id='name' placeholder='FISRT NAME'></input>
                <input type='text' id='lname' placeholder='LAST NAME'></input>
            </div>
            <div id='child3' className='inp'>
                <input type='email' className='inp3' placeholder='EMAIL'></input>
            </div>
            <div id='child4 ' className='inp'>
                <input type='password' className='inp3' placeholder='PASSWORD'></input>
            </div>
            <div id='child5' className='inp'>
                <input type='password' className='inp3'placeholder='CONFIRM PASSWORD'></input>
            </div>
            <div id='child6'>
            <input type='checkbox' id='inp2'></input>
            <label>I accept the terms of use & privacy policy</label>
        </div>
        <div id='butt'>
            <button id='button2'>SIGNUP</button>
        </div>
        <div id='last1'>Already have an account?<a href=''>Login here</a></div>
        <div id='last2'>Copyright @ YourCompany.com</div>
        </div>
    </Fragment>
  )
}
