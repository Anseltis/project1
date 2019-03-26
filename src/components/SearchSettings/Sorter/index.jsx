import React from 'react'
import withStyles from 'react-jss'

import { SortByParam } from '../../../constants'
import './style.scss'


const styles = {
  chosen: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '1rem',
    lineHeight: '3.125rem',
    fontWeight: '500',
    backgroundColor: 'transparent',
    border: '0',
    color: props => (props.active ? '#f00' : '#000')
  }
}

const SortButtonUnwrapped = ({ caption, handler, classes }) =>
  <button onClick={handler} className={classes.chosen}>{caption}</button>

const SortButton = withStyles(styles)(SortButtonUnwrapped)

export const Sorter = ({ handleSortClick, filter, classes }) => {
  const sortButton = (caption, searchBy) =>
    <SortButton
      active={filter === searchBy}
      caption={caption}
      handler={handleSortClick(searchBy)}
      classes={classes}
    />
  return (
    <>
      <span className="search-settings__sort-by">Sort by</span>
      {sortButton("release date", SortByParam.byDate)}
      {sortButton("rating", SortByParam.byRating)}
    </>
  )
}