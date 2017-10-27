/*
    AddUser is similar to AddGroup, returning a form which will dispatch an action so that a reducer
    may change the state of the application (in this case, adding a new user)
*/

import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

let AddUser = ({ dispatch }) => {
    let name
    let age

    return (
        <div className="card">
            <div className="card-block">
                <h5 className="card-title text-center">Add a new user!</h5>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!name.value || !age.value) {
                            return
                        }
                        dispatch(addUser({name: name.value, age: Number(age.value)}))
                        name.value = ''
                        age.value = ''
                    }}
                    className="form"
                >
                    <div className="form-group">
                        <input
                            ref={node => {
                                name = node
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            required
                        />
                    </div>
                
                    <div className="form-group">
                        <input
                            ref={node => {
                                age = node
                            }}
                            type="number"
                            className="form-control"
                            placeholder="Age"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary float-right">
                        Add User
                    </button>
                </form>
            </div>
        </div>
    )
}
AddUser = connect()(AddUser)

export default AddUser