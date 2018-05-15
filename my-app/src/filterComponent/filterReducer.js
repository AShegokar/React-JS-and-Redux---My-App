export const initialState = {
  openfilter: false,
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
        }
      }
    case 'CANCEL_CLICK':
      return {
        ...state,
        openfilter: !state.openfilter
      }
    case 'CHANGE_CLICK':
      console.log(':::::::::::::action', action)
      return {
        ...state,
        filterDetails: {
          ...state.filterDetails,
          ...action.payload
        }
      }
    case 'RESET_SEARCH_CLICK':
      return {
        ...state,
        filterSearch: ''
      }
    case 'CHANGE_SEARCH_CLICK':
      return {
        ...state,
        filterSearch: action.payload
      }
    default:
      return state
  }
}
