// import React, { Component } from 'react'
// import Axios from 'axios'
import { connect } from 'react-redux'
import FilterComponent from './filterComponent'
import {
  filterClickToAction,
  resetFilterClickToAction,
  // getMockupDataAction,
  fetchFiterData,
  cancelFilterClickToAction,
  applyFilterClickToAction,
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
    checkfilter: state.filterObject.checkfilter,
    changeFilterText: state.filterObject.changeFilterText,
    applyfilter: state.filterObject.applyfilter,
    filterSearch: state.filterObject.filterSearch,
    tableItems: state.filterObject.tableItems,
    selectedItem: state.filterObject.selectedItem
  }
}

const mapDispatchToProps = dispatch => ({
  filterClickToContainer: () => dispatch(filterClickToAction()),
  resetFilterClickToContainer: () => dispatch(resetFilterClickToAction()),
  cancelFilterClickToContainer: () => dispatch(cancelFilterClickToAction()),
  // getMockupData: () => dispatch(getMockupDataAction()),
  getFiterData: () => dispatch(fetchFiterData()),
  applyFilterClickToContainer: event =>
    dispatch(applyFilterClickToAction(event)),
  InputChangeToContainer: (e, data, checkfilter) =>
    dispatch(InputChangeToAction(e, data, checkfilter)),
  resetFilterSearchClickToContainer: () =>
    dispatch(resetFilterSearchClickToAction()),
  RadioChangeToContainer: (e, data) => dispatch(RadioChangeToAction(e, data)),
  deleteClickToContainer: (tabledata, selecteddata) =>
    dispatch(deleteClickToAction(tabledata, selecteddata))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)
