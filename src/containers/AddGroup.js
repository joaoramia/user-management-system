import React from 'react'
import { connect } from 'react-redux'
import { addGroup } from '../actions'

let AddGroup = ({ dispatch }) => {
  let name
  let description

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(name.value, description.value)
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
            <label>Description</label>
            <input
            ref={node => {
                description = node
            }}
            type="text"
            className="form-control"
            />
        </div>

        <button type="submit" className="btn btn-default">
          Add Group
        </button>
      </form>
    </div>
  )
}
AddGroup = connect()(AddGroup)

export default AddGroup