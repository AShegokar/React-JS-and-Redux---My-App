// import Axios from 'axios'

export function filterClickToAction() {
  // filterClick
  return {
    type: 'FILTER_CLICK'
  }
}
// export function getMockupDataAction() {
//   console.log('8::hi')
//   return {
//     type: 'ONLOAD'
//   }
// }
// export function fetchFiterDataSuccess(data) {
//   return {
//     type: 'FITER_TYPE_SUCCESS',
//     data
//   }
// }
export function fetchFiterData() {
  // return dispatch => {
  //   return Axios.get('http://localhost:8081/listUsers')
  //     .then(response => {
  //       console.log(response, '25::')
  //       dispatch(fetchFiterDataSuccess(response.data))
  //     })
  //     .catch(error => {
  //       throw error
  //     })
  // }
}
export function deleteClickToAction(tabledata, selecteddata) {
  console.log(tabledata, selecteddata, 'delete')
  tabledata.map((item, index) => {
    if (item.name === selecteddata.name) {
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
export function applyFilterClickToAction(event) {
  console.log(event.target.disabled, '74::')
  // event.target.disabled = true
  return {
    type: 'APPLY_CLICK'
  }
  // var headers = new Headers()
  // headers.append(
  //   'Content-Type',
  //   'application/x-www-form-urlencoded;charset=UTF-8'
  // )
  // console.log('74::', headers)
  // return dispatch => {
  //   return Axios.get('http://localhost:8081/listUsers', headers)
  //     .then(response => {
  //       console.log(response, '25::')
  //       dispatch(fetchFiterDataSuccess(response.data))
  //     })
  //     .catch(error => {
  //       throw error
  //     })
  // }
}
export function checkFilterDetail(filterDetail) {
  for (var key in filterDetail) {
    if (filterDetail[key] !== '') return false
  }
  return true
}
export function InputChangeToAction(event, filterDetail, checkfilter) {
  let type = 'CHANGE_SEARCH_CLICK'
  let value = event.target.value
  let reg = /^[0-9/]+$/
  if (filterDetail) {
    switch (event.target.id) {
      case 'borrower':
        filterDetail['borrowerName'] = value
        break
      case 'customer':
        filterDetail['customerId'] = value
        break
      case 'loanNumber':
        filterDetail['loanNumber'] = value
        break
      case 'toDate':
        // if (!(event.which >= 45 && event.which < 58)) {
        //   event.preventDefault()
        // }
        if (!reg.test(value)) {
          value = value.substring(0, value.length - 1)
        }
        filterDetail['toRange'] = value
        break
      case 'fromDate':
        //  var reg = /^[0-9/]+$/
        // if (!(event.which >= 45 && event.which < 58)) {
        //   event.preventDefault()
        // }
        if (!reg.test(value)) {
          value = value.substring(0, value.length - 1)
        }
        filterDetail['fromRange'] = value
        break
      case 'business':
        filterDetail['bussinessName'] = value
        break
      case 'category':
        filterDetail['category'] = value
        break
      default:
        break
    }
    type = 'CHANGE_CLICK'
    checkfilter: checkFilterDetail(filterDetail)
  }
  return {
    type
  }
}
