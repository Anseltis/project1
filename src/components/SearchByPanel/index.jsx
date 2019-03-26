/* eslint-disable max-lines-per-function */
import React from 'react'
import withStyles from 'react-jss'

import './style.scss'

const styles = {
  label: {
    padding: '.3125rem .9375rem',
    marginRight: '.9375rem',
    fontFamily: 'Arial, sans-serif',
    fontWeight: '500',
    color: '#fff',
    textTransform: 'uppercase',
    border: '0',
    borderRadius: '.125rem',
    backgroundColor: props => (props.active ? '#f00' : '#808080')
  }
}

const SearchByButton = ({
  className,
  filter,
  radioName,
  type,
  caption,
  onclick
}) => {
  return (
    <>
      <input
        className={`${className}__${type}-input`}
        type="radio"
        name={radioName}
        value={`${type}`}
        id={`${type}`}
        defaultChecked={filter === type}
      />
      <Label
        type={type}
        caption={caption}
        onclick={onclick}
        active={filter === type}
      />
    </>
  )
}

const LabelUnwrapped = ({ classes, type, caption, onclick }) => {
  return (
    <label className={classes.label} htmlFor={`${type}`} onClick={onclick}>
      {caption}
    </label>
  )
}

export const SearchByPanel = ({
  classes,
  className,
  filter,
  searchByActions
}) => {
  return (
    <div className={className}>
      <SearchByButton
        className={className}
        classes={classes}
        filter={filter}
        radioName="search-by"
        type="title"
        caption="title"
        onclick={searchByActions.searchByTitleHandle}
      />
      <SearchByButton
        className={className}
        classes={classes}
        filter={filter}
        radioName="search-by"
        type="genres"
        caption="genre"
        onclick={searchByActions.searchByGenreHandle}
      />
    </div>
  )
}

const Label = withStyles(styles)(LabelUnwrapped)
