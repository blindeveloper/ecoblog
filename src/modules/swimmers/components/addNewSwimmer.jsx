import React from 'react'
import PropTypes from 'prop-types'

const addNew = ({addNewSwimmerAct}) => {
  let input
  const submitFunction = event => {
    event.preventDefault()
    if(!input.value.trim()) return
    addNewSwimmerAct(input.value)
    input.value = ''
  }

  return (
    <div>
      <form action="submit" onSubmit={submitFunction}>
        <input type="text" ref={node => input = node}/>
        <button type="submit">Add New Swimmer</button>
      </form>
    </div>
  )
}

addNew.propTypes = {
  addNewSwimmerAct: PropTypes.func.isRequired
}

export default addNew