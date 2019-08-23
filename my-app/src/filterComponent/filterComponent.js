import React from 'react'
// import MaskedInput from 'react-maskedinput'

export default function FilterComponent({
  openfilter,
  checkfilter,
  applyfilter,
  changeFilterText,
  filterClickToContainer, //onFilterClick
  resetFilterClickToContainer, //onFilterReset
  cancelFilterClickToContainer, //onFilterCancel
  applyFilterClickToContainer, // onfilterApply
  InputChangeToContainer, //inputChange
  resetFilterSearchClickToContainer, //resetFilterSearch
  RadioChangeToContainer, //RadioChange
  deleteClickToContainer, //onClickDelete
  // getMockupData,
  selectedItem,
  filterDetails,
  filterSearch, //() => getMockupData()
  tableItems,
  initActiveNotebookAndNote
}) {
  return (
    <div className="header-section">
      <h1>Filter Component</h1>
      <div>
        <div className="wrapperRow">
          <button
            className="filterBtn"
            onClick={() => filterClickToContainer(openfilter)}
          >
            {!changeFilterText ? 'Filter' : 'Apply Fiter'}
          </button>
          <input
            className="searchInput"
            type="text"
            placeholder="search"
            value={filterSearch}
            id="search"
            onChange={event => InputChangeToContainer(event)}
          />

          <button
            className="resetBtn"
            onClick={() => resetFilterSearchClickToContainer()}
          >
            Reset
          </button>
        </div>

        {openfilter && (
          <div className="date-section">
            <div className="Date-range">
              <h3>Date Range</h3>
              <div>
                <label>To</label>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={filterDetails.toRange}
                  id="toDate"
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails, checkfilter)
                  }
                />
                {/* <MaskedInput
                  mask="11/11/1111"
                  // name="expiry"
                  placeholder="mm/dd/yyyy"
                  id="toDate"
                  value={filterDetails.toRange}
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails)
                  }
                /> */}
              </div>
              <div>
                <label>from</label>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={filterDetails.fromRange}
                  id="fromDate"
                  // onKeyPress={event =>
                  //   InputChangeToContainer(event, filterDetails, checkfilter)
                  // }
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails, checkfilter)
                  }
                />
                {/* <MaskedInput
                  mask="11/11/1111"
                  name="expiry"
                  placeholder="mm/dd/yyyy"
                  id="fromDate"
                  value={filterDetails.fromRange}
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails)
                  }
                /> */}
              </div>
            </div>
            <div className="customerDetails">
              <div>
                <label>Line of Business</label>
                <select
                  placeholder="Select Business"
                  value={filterDetails.bussinessName}
                  id="business"
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails, checkfilter)
                  }
                >
                  <option value="">Please select</option>
                  <option value="Business1">Business1</option>
                  <option value="Business2">Business2</option>
                  <option value="Business3">Business3</option>
                </select>
              </div>
              <div>
                <label>Borrower Name</label>
                <input
                  type="text"
                  value={filterDetails.borrowerName}
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails, checkfilter)
                  }
                  id="borrower"
                />
              </div>
              <div>
                <label>Customer Bank Id</label>
                <input
                  type="text"
                  value={filterDetails.customerId}
                  id="customer"
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails, checkfilter)
                  }
                />
              </div>
              <div>
                <label>Loan Number</label>
                <input
                  type="text"
                  placeholder="adress"
                  value={filterDetails.loanNumber}
                  id="loanNumber"
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails, checkfilter)
                  }
                />
              </div>
              <div>
                <label>Category</label>
                <select
                  placeholder="Select Category"
                  value={filterDetails.category}
                  id="category"
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails, checkfilter)
                  }
                >
                  <option value="">Please select</option>
                  <option value="category1">category1</option>
                  <option value="category2">category2</option>
                  <option value="category3">category3</option>
                </select>
              </div>
            </div>
            <div className="reset-filter">
              <button
                disabled={checkfilter}
                onClick={() => resetFilterClickToContainer(filterDetails)}
              >
                Reset Filter
              </button>
              <button
                onClick={() =>
                  openfilter && cancelFilterClickToContainer(openfilter)
                }
              >
                Cancel
              </button>
              <button
                disabled={applyfilter}
                onClick={event =>
                  openfilter && applyFilterClickToContainer(event)
                }
              >
                Apply
              </button>
            </div>
          </div>
        )}
        <div className="Data-table">
          <table>
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {tableItems.map(function(item) {
                return (
                  <tr>
                    <td>
                      {' '}
                      <input
                        type="radio"
                        name="radio"
                        onChange={event => RadioChangeToContainer(event, item)}
                      />
                    </td>
                    <td> {item.name}</td>
                    <td> {item.link}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="wrapperRow">
            <button className="defaultBtn">View</button>
            <button
              className="defaultBtn"
              onClick={event =>
                deleteClickToContainer(tableItems, selectedItem)
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
