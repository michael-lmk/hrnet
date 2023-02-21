import React from 'react'

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <div>

        <div className="input-group mb-3">
            <input id="search" value={filterText} aria-label="Search Input" onChange={onFilter} type="text" placeholder="Filter By Name" className="form-control" />
            <button type="button" className='clear-search btn btn-primary' onClick={onClear}>
                X
            </button>
        </div>
    </div>
);


export default FilterComponent