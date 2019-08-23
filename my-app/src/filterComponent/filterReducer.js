export const initialState = {
  openfilter: false,
  checkfilter: true,
  applyfilter: true,
  changeFilterText: false,
  tableFilterData: [],
  filterDetails: {
    toRange: '',
    fromRange: '',
    bussinessName: '',
    borrowerName: '',
    customerId: '',
    loanNumber: '',
    category: ''
  },
  filterSearch: '',
  selectedItem: {},
  tableItems: [
    { name: 'Matthew', link: 'https://bible.com/1/mat.1' },
    { name: 'Mark', link: 'https://bible.com/1/mrk.1' },
    { name: 'Luke', link: 'https://bible.com/1/luk.1' },
    { name: 'John', link: 'https://bible.com/1/jhn.1' }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_CLICK':
      // console.log(':::::::::::::59', state.openfilter)
      return {
        ...state,
        openfilter: !state.openfilter
      }
    case 'DELETE_CLICK':
      return {
        ...state,
        tableItems: [...action.payload]
      }
    case 'RADIO_CLICK':
      return {
        ...state,
        selectedItem: action.payload
      }
    case 'RESET_CLICK':
      return {
        ...state,
        filterDetails: {
          ...state.filterDetails,
          toRange: '',
          fromRange: '',
          bussinessName: '',
          borrowerName: '',
          customerId: '',
          loanNumber: '',
          category: ''
        },
        checkfilter: true
      }
    case 'FITER_TYPE_SUCCESS':
      return {
        ...state,
        tableFilterData: action
      }
    case 'CANCEL_CLICK':
      return {
        ...state,
        openfilter: !state.openfilter
        // filterDetails: {
        //   ...state.filterDetails,
        //   toRange: '',
        //   fromRange: '',

        //   bussinessName: '',
        //   borrowerName: '',
        //   customerId: '',
        //   loanNumber: '',
        //   category: ''
        // },
        // checkfilter: true
      }
    case 'APPLY_CLICK':
      return {
        ...state,
        openfilter: !state.openfilter,
        changeFilterText: true,
        applyfilter: true
      }
    case 'CHANGE_CLICK':
      return {
        ...state,
        filterDetails: {
          ...state.filterDetails
        },
        checkfilter: action.checkfilter,
        applyfilter: action.checkfilter
      }
    case 'RESET_SEARCH_CLICK':
      return {
        ...state,
        filterSearch: ''
      }
    case 'CHANGE_SEARCH_CLICK':
      console.log('104', action, state)
      return {
        ...state,
        filterSearch: action.payload,
        checkfilter: false
      }
    default:
      return state
  }
}
