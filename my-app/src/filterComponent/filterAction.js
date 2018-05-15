export function filterClickToAction() {
  // filterClick
  return {
    type: 'FILTER_CLICK'
  }
}
export function deleteClickToAction(tabledata, selecteddata) {
  console.log(tabledata, selecteddata, 'delete')
  tabledata.map((item, index) => {
    if (item.name == selecteddata.name) {
      tabledata.splice(index, 1)
    }
  })
  return {
    type: 'DELETE_CLICK',
    payload: tabledata
  }
}

export function RadioChangeToAction(event, data) {
  return {
    type: 'RADIO_CLICK',
    payload: data
  }
}

export function resetFilterSearchClickToAction() {
  //resetSearchClick
  return {
    type: 'RESET_SEARCH_CLICK'
  }
}

export function resetFilterClickToAction() {
  //resetClick
  return {
    type: 'RESET_CLICK'
  }
}

export function cancelFilterClickToAction() {
  //cancelClick
  return {
    type: 'CANCEL_CLICK'
  }
}

export function InputChangeToAction(event, filterDetail) {
  if (filterDetail) {
    let data = {}
    data = filterDetail
    if (event.target.id == 'borrower') {
      let text = event.target.value
      data['borrowerName'] = text
    } else if (event.target.id == 'customer') {
      let text = event.target.value
      data['customerId'] = text
    } else if (event.target.id == 'loanNumber') {
      let text = event.target.value
      data['loanNumber'] = text
    } else if (event.target.id == 'toDate') {
      if (!(event.which >= 45 && event.which < 58)) {
        event.preventDefault()
      }
      let text = event.target.value
      data['toRange'] = text
    } else if (event.target.id == 'fromDate') {
      if (!(event.which >= 45 && event.which < 58)) {
        event.preventDefault()
      }
      let text = event.target.value
      data['fromRange'] = text
    } else if (event.target.id == 'business') {
      let text = event.target.value
      data['bussinessName'] = text
    } else if (event.target.id == 'category') {
      let text = event.target.value
      data['category'] = text
    }
    return {
      type: 'CHANGE_CLICK',
      payload: data
    }
  } else {
    return {
      type: 'CHANGE_SEARCH_CLICK',
      payload: event.target.value
    }
  }
}
