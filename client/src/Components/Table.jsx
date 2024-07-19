











// // //********** */
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './Tablecss.css';

const Tables = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageSize] = useState(10);
  const [totalRows] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [searchCount, setSearchCount] = useState(0); // State to hold search count

  useEffect(() => {
    setTotalPages(Math.ceil(totalRows / pageSize));
  }, [totalRows, pageSize]);

  const fetchRecords = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/data?page=${currentPage}&limit=${pageSize}`);
      setRecords(response.data);
      setFilteredList(response.data); // Initialize filtered list with all records
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  useEffect(() => {
    // Filter records based on search term
    if (searchTerm.trim() === '') {
      setFilteredList(records); // Reset to all records when search term is empty
      setSearchCount(0); // Reset search count
    } else {
      const filtered = records.filter(record =>
        record['Security_Name'].toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList(filtered);
      setSearchCount(filtered.length); // Update search count
    }
  }, [searchTerm, records]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="datatable-wrapper">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by ..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        {searchTerm && (
          <div className="search-count">
            Found {searchCount} {searchCount === 1 ? 'result' : 'results'}
          </div>
        )}
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Date File</th>
                <th>Symbol</th>
                <th>Security Name</th>
                <th>Client Name</th>
                <th>Buy / Sell</th>
                <th>Quantity Traded</th>
                <th>Trade Price / Wght. Avg. Price</th>
                <th>Remarks</th>
                <th>Dummy Date</th>
              </tr>
            </thead>
            <tbody>
  {filteredList.map((record, index) => (
    <tr key={record.id ?? index}>
      <td>{record.date_file}</td>
      <td>{record.Symbol}</td>
      <td>
        <a
          href={`/${record['Security_Name']}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {record['Security_Name']}
        </a>
      </td>
      <td>{record['Client Name']}</td>
      <td>{record['Buy / Sell']}</td>
      <td>{record['Quantity Traded']}</td>
      <td>{record['Trade Price / Wght. Avg. Price']}</td>
      <td>{record.Remarks}</td>
      <td>{record.dummy_date}</td>
    </tr>
  ))}
</tbody>
          </table>
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tables;







