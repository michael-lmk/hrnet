import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';
import FilterComponent from '../components/FilterComponent';


const columns = [
  {
    name: 'First name',
    selector: row => row.firstName,
    sortable: true,
  },
  {
    name: 'Last name',
    selector: row => row.lastName,
    sortable: true,
  },
  {
    name: 'Date of birth',
    selector: row => row.dateOfBirth,
    sortable: true,
    cell: row => (moment(row.dateOfBirth).format("L"))
  },
  {
    name: 'Start date',
    selector: row => row.startDate,
    sortable: true,
    cell: row => (moment(row.startDate).format("L"))
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true,
  },
  {
    name: 'Street',
    selector: row => row.street,
    sortable: true,
  },
  {
    name: 'City',
    selector: row => row.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: row => row.state,
    sortable: true,
  },
  {
    name: 'Zip code',
    selector: row => row.zipCode,
    sortable: true,
  },
];

export const ListEmployeeScreen = () => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const { employees } = useSelector(state => state)

  const filteredItems = employees.filter(
    item => ((item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase())))
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  


  return (
    <div className='container '>
      <div className='header'>
        <h1 className='title'>List of employee</h1>
        <NavLink to={"/add"} className={"back-btn"}><i className="fa-sharp fa-solid fa-arrow-left"></i></NavLink>
      </div>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
      />
   
    </div>
  )
}

export default ListEmployeeScreen;