import React from 'react';
import FilterLink from './FilterLink'
import { GenderFilters } from '../../../constants/Filters'

const Gender = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={GenderFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={GenderFilters.SHOW_FEMALE}>Female</FilterLink>
    <FilterLink filter={GenderFilters.SHOW_MALE}>Male</FilterLink>
  </div>
)

export default Gender
