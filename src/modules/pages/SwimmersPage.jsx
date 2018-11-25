import React from 'react'
import SwimmersList from '../swimmers/containers/swimmersList.container'
import AddNewSwimmer from '../swimmers/containers/addNewSwimmer.container'

const swimmers = () => (
  <div>
    <SwimmersList></SwimmersList>
    <AddNewSwimmer></AddNewSwimmer>
  </div>
)

export default swimmers