import React, { Component } from 'react'

export default function FilterComponent({
  openfilter,
  filterClickToContainer, //onFilterClick
  resetFilterClickToContainer, //onFilterReset
  cancelFilterClickToContainer, //onFilterCancel
  InputChangeToContainer, //inputChange
  resetFilterSearchClickToContainer, //resetFilterSearch
  RadioChangeToContainer, //RadioChange
  deleteClickToContainer, //onClickDelete
  selectedItem,
  filterDetails,
  filterSearch,
  tableItems
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
            Filter
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

        {openfilter ? (
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
                  onKeyPress={event =>
                    InputChangeToContainer(event, filterDetails)
                  }
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails)
                  }
                />
              </div>
              <div>
                <label>from</label>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={filterDetails.fromRange}
                  id="fromDate"
                  onKeyPress={event =>
                    InputChangeToContainer(event, filterDetails)
                  }
                  onChange={event =>
                    InputChangeToContainer(event, filterDetails)
                  }
                />
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
                    InputChangeToContainer(event, filterDetails)
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
                    InputChangeToContainer(event, filterDetails)
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
                    InputChangeToContainer(event, filterDetails)
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
                    InputChangeToContainer(event, filterDetails)
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
                    InputChangeToContainer(event, filterDetails)
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
                onClick={() => resetFilterClickToContainer(filterDetails)}
              >
                Reset Filter
              </button>
              <button
                onClick={() =>
                  openfilter ? cancelFilterClickToContainer(openfilter) : ''
                }
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          ''
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
