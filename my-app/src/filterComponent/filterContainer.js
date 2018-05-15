import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilterComponent from './filterComponent'
import {
  filterClickToAction,
  resetFilterClickToAction,
  cancelFilterClickToAction,
  InputChangeToAction,
  resetFilterSearchClickToAction,
  RadioChangeToAction,
  deleteClickToAction
} from './filterAction'

function mapStateToProps(state) {
  console.log('31', state)
  return {
    openfilter: state.filterObject.openfilter,
    filterDetails: state.filterObject.filterDetails,
    filterSearch: state.filterObject.filterSearch,
    tableItems: state.filterObject.tableItems,
    selectedItem: state.filterObject.selectedItem
  }
}

const mapDispatchToProps = dispatch => ({
  filterClickToContainer: () => dispatch(filterClickToAction()),
  resetFilterClickToContainer: () => dispatch(resetFilterClickToAction()),
  cancelFilterClickToContainer: () => dispatch(cancelFilterClickToAction()),
  InputChangeToContainer: (e, data) => dispatch(InputChangeToAction(e, data)),
  resetFilterSearchClickToContainer: () =>
    dispatch(resetFilterSearchClickToAction()),
  RadioChangeToContainer: (e, data) => dispatch(RadioChangeToAction(e, data)),
  deleteClickToContainer: (tabledata, selecteddata) =>
    dispatch(deleteClickToAction(tabledata, selecteddata))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)
