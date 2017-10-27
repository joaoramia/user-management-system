/*
    AddGroup is similar to AddUser, returning a form which will dispatch an action so that a reducer
    may change the state of the application (in this case, adding a new group)
*/

import React from 'react'
import { connect } from 'react-redux'
import { addGroup } from '../actions'

let AddGroup = ({ dispatch }) => {
    let name
    let description

    return (
        <div className="card">
            <div className="card-block">
                <h5 className="card-title text-center">Add a new group!</h5>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!name.value || !description.value) {
                            return
                        }
                        dispatch(addGroup({name: name.value, description: description.value}))
                        name.value = ''
                        description.value = ''
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
                            description = node
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary float-right btn-enter">
                        Add Group
                    </button>
                </form>
            </div>
        </div>
    )
}
AddGroup = connect()(AddGroup)

export default AddGroup