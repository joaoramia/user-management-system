import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

let AddUser = ({ dispatch }) => {
  let name
  let age

  return (
    <div>
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
          <label>Name:</label>
          <input
            ref={node => {
              name = node
            }}
            type="text"
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label>Age</label>
          <input
            ref={node => {
              age = node
            }}
            type="number"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-default">
          Add User
        </button>
      </form>
    </div>
  )
}
AddUser = connect()(AddUser)

export default AddUser