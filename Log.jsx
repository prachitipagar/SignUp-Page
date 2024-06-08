import React from 'react'
import "./Log1.css"

export const Log = () => {
  return (
    <>
    <div id='parent'>
        <div id='parent1'>
            <h1>Sign in</h1>
        </div>
        <div id='parent2'>
            <p>Username</p>
        </div>
        <div id='parent3'>
            <input type='text' className='inp1'></input>
        </div>
        <div id='parent4'>
            <p>Password</p>
        </div>
        <div id='parent5'>
            <input type='password' className='inp1'></input>
        </div>
        <div id='child1'>
            <input type='checkbox' id='inp2'></input>
            <label>Remember Me</label>
        </div>
        <div id='parent6'>
            <button id='button1'>LOGIN</button>
        </div>
        {/* <form>
            <table>
                <tr>
                    <td><label>Email:</label></td>
                    <td><input type='text'></input></td>
                </tr>
                <tr>
                    <td><label>Password:</label></td>
                    <td><input type='text'></input> </td>
                </tr>
                <tr>
                    <td><button>LOGIN</button></td>
                    <td><button>CANCEL</button></td>
                    </tr>
            </table>
        </form> */}
    </div>
    </>
  )
}
