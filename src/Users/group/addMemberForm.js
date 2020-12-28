import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
              <form >
                <div className="mb-3" >
                <label>FullName</label>
                <input type="text" className="form-control" placeholder="input members fullname" required / >
                </div> 
                <div className="mb-3" >
                <label >EmailAddress</label>
                <input type="email" className="form-control" placeholder="input members email" required / >
                </div> 
              </form>
            </div>
        );
    }
}
export default Form

