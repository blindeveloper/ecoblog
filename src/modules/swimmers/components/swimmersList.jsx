import React from 'react'
import PropTypes from 'prop-types'

const List = ({swimmersListContainer, removeSwimmer}) => (
  <ul>
    {swimmersListContainer.map((swimmer, i) => {
      return <li key={i}>
        {swimmer.name}
        <button type='button' onClick={() => removeSwimmer(swimmer.id)}>delete</button>
      </li>
    })}
  </ul>
)

List.propTypes = {
  swimmersListContainer: PropTypes.array.isRequired,
  removeSwimmer: PropTypes.func.isRequired
}

export default List