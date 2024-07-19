// //search count
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Tablecss.css';

// const Tables = () => {
//   const [records, setRecords] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [pageSize] = useState(10);
//   const [totalRows] = useState(100);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredList, setFilteredList] = useState([]);
//   const [searchCount, setSearchCount] = useState(0); // State to hold search count

//   useEffect(() => {
//     setTotalPages(Math.ceil(totalRows / pageSize));
//   }, [totalRows, pageSize]);

//   const fetchRecords = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/data?page=${currentPage}&limit=${pageSize}`);
//       setRecords(response.data);
//       setFilteredList(response.data); // Initialize filtered list with all records
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecords();
//   }, [currentPage, pageSize]);

//   useEffect(() => {
//     // Filter records based on search term
//     if (searchTerm.trim() === '') {
//       setFilteredList(records); // Reset to all records when search term is empty
//       setSearchCount(0); // Reset search count
//     } else {
//       const filtered = records.filter(record =>
//         record['Security Name'].toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredList(filtered);
//       setSearchCount(filtered.length); // Update search count
//     }
//   }, [searchTerm, records]);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleSearchChange = (event) => {
//     const newSearchTerm = event.target.value;
//     setSearchTerm(newSearchTerm);
//     setCurrentPage(1); // Reset to first page when searching
//   };

//   return (
//     <div className="datatable-wrapper">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by Security Name..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//         {searchTerm && (
//           <div className="search-count">
//             Found {searchCount} {searchCount === 1 ? 'result' : 'results'}
//           </div>
//         )}
//       </div>
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="table-container">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Date File</th>
//                 <th>Symbol</th>
//                 <th>Security Name</th>
//                 <th>Client Name</th>
//                 <th>Buy / Sell</th>
//                 <th>Quantity Traded</th>
//                 <th>Trade Price / Wght. Avg. Price</th>
//                 <th>Remarks</th>
//                 <th>Dummy Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredList.map(record => (
//                 <tr key={record.id}>
//                   <td>{record.date_file}</td>
//                   <td>{record.Symbol}</td>
//                   <td>
//                     <a
//                       href={`/${record['Security Name']}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {record['Security Name']}
//                     </a>
//                   </td>
//                   <td>{record['Client Name']}</td>
//                   <td>{record['Buy / Sell']}</td>
//                   <td>{record['Quantity Traded']}</td>
//                   <td>{record['Trade Price / Wght. Avg. Price']}</td>
//                   <td>{record.Remarks}</td>
//                   <td>{record.dummy_date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             <button
//               onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
//               disabled={currentPage === 1}
//               className="pagination-button"
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
//               disabled={currentPage === totalPages}
//               className="pagination-button"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tables;









//using datatable 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Tablecss.css';

const Tables = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageSize] = useState(10);
  const [totalRows] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [searchCount, setSearchCount] = useState(0);

  useEffect(() => {
    const totalPages = Math.ceil(totalRows / pageSize);
    // You can use totalPages for pagination logic or displaying total pages
  }, [totalRows, pageSize]);

  useEffect(() => {
    fetchRecords();
  }, [currentPage, pageSize]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredList(records);
      setSearchCount(0);
    } else {
      const filtered = records.filter(record =>
        record['Security Name'].toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList(filtered);
      setSearchCount(filtered.length);
    }
  }, [searchTerm, records]);

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/data?page=${currentPage}&limit=${pageSize}`);
      setRecords(response.data);
      setFilteredList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  };

  return (
    <div className="datatable-wrapper">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Security Name..."
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
        <div className="loading">
          <Skeleton width="100%" height="50px" />
          <Skeleton width="100%" height="50px" />
          <Skeleton width="100%" height="50px" />
          {/* Adjust height and number of Skeletons as per your table row count */}
        </div>
      ) : (
        <div className="table-container">
          <DataTable
            value={filteredList}
            className="p-datatable-striped"
            paginator
            rows={pageSize}
            totalRecords={totalRows}
            first={(currentPage - 1) * pageSize}
            onPage={(e) => setCurrentPage(e.page + 1)}
          >
            <Column field="date_file" header="Date File" />
            <Column field="Symbol" header="Symbol" />
            <Column
              field="Security Name"
              header="Security Name"
              body={(rowData) => (
                <a
                  href={`/${rowData['Security Name']}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rowData['Security Name']}
                </a>
              )}
            />
            <Column field="Client Name" header="Client Name" />
            <Column field="Buy / Sell" header="Buy / Sell" />
            <Column field="Quantity Traded" header="Quantity Traded" />
            <Column field="Trade Price / Wght. Avg. Price" header="Trade Price / Wght. Avg. Price" />
            <Column field="Remarks" header="Remarks" />
            <Column field="dummy_date" header="Dummy Date" />
          </DataTable>
        </div>
      )}
    </div>
  );
};

export default Tables;

//ske
//import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import Skeleton from 'react-loading-skeleton';
// import './Tablecss.css';

// const Tables = () => {
//   const [records, setRecords] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [pageSize] = useState(10);
//   const [totalRows] = useState(100);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredList, setFilteredList] = useState([]);
//   const [searchCount, setSearchCount] = useState(0); // State to hold search count

//   useEffect(() => {
//     setTotalPages(Math.ceil(totalRows / pageSize));
//   }, [totalRows, pageSize]);

//   const fetchRecords = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/data?page=${currentPage}&limit=${pageSize}`);
//       setRecords(response.data);
//       setFilteredList(response.data); // Initialize filtered list with all records
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, [currentPage, pageSize]);

//   useEffect(() => {
//     fetchRecords();
//   }, [fetchRecords]);

//   useEffect(() => {
//     // Filter records based on search term
//     if (searchTerm.trim() === '') {
//       setFilteredList(records); // Reset to all records when search term is empty
//       setSearchCount(0); // Reset search count
//     } else {
//       const filtered = records.filter(record =>
//         record['Security Name'].toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredList(filtered);
//       setSearchCount(filtered.length); // Update search count
//     }
//   }, [searchTerm, records]);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleSearchChange = (event) => {
//     const newSearchTerm = event.target.value;
//     setSearchTerm(newSearchTerm);
//     setCurrentPage(1); // Reset to first page when searching
//   };

//   // Skeleton loading rows
//   const skeletonRows = Array.from({ length: pageSize }, (_, index) => (
//     <tr key={index}>
//       <td><Skeleton width={100} height={20} /></td>
//       <td><Skeleton width={100} height={20} /></td>
//       <td><Skeleton width={200} height={20} /></td>
//       <td><Skeleton width={150} height={20} /></td>
//       <td><Skeleton width={80} height={20} /></td>
//       <td><Skeleton width={120} height={20} /></td>
//       <td><Skeleton width={150} height={20} /></td>
//       <td><Skeleton width={100} height={20} /></td>
//       <td><Skeleton width={120} height={20} /></td>
//     </tr>
//   ));

//   return (
//     <div className="datatable-wrapper">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by Security Name..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//         {searchTerm && (
//           <div className="search-count">
//             Found {searchCount} {searchCount === 1 ? 'result' : 'results'}
//           </div>
//         )}
//       </div>
//       <div className="table-container">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Date File</th>
//               <th>Symbol</th>
//               <th>Security Name</th>
//               <th>Client Name</th>
//               <th>Buy / Sell</th>
//               <th>Quantity Traded</th>
//               <th>Trade Price / Wght. Avg. Price</th>
//               <th>Remarks</th>
//               <th>Dummy Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               skeletonRows
//             ) : (
//               filteredList.map(record => (
//                 <tr key={record.id}>
//                   <td>{record.date_file}</td>
//                   <td>{record.Symbol}</td>
//                   <td>
//                     <a
//                       href={`/${record['Security Name']}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {record['Security Name']}
//                     </a>
//                   </td>
//                   <td>{record['Client Name']}</td>
//                   <td>{record['Buy / Sell']}</td>
//                   <td>{record['Quantity Traded']}</td>
//                   <td>{record['Trade Price / Wght. Avg. Price']}</td>
//                   <td>{record.Remarks}</td>
//                   <td>{record.dummy_date}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//         {!loading && (
//           <div className="pagination">
//             <button
//               onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
//               disabled={currentPage === 1}
//               className="pagination-button"
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
//               disabled={currentPage === totalPages}
//               className="pagination-button"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tables;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import './TradeTablecss.css';

// function TradeTable() {
//     const [trades, setTrades] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const rowsPerPage = 10;

//     const tradesLocalStorageKey = 'tradesData';
//     const totalPagesLocalStorageKey = 'totalPages';

//     useEffect(() => {
//         // Attempt to load from localStorage on component mount
//         const storedTrades = JSON.parse(localStorage.getItem(tradesLocalStorageKey));
//         const storedTotalPages = JSON.parse(localStorage.getItem(totalPagesLocalStorageKey));

//         if (storedTrades && storedTrades.length > 0) {
//             setTrades(storedTrades);
//             setTotalPages(storedTotalPages);
//             setLoading(false);
//         } else {
//             fetchTrades(currentPage);
//         }
//     }, [currentPage]);

//     const fetchTrades = (page) => {
//         setLoading(true);
//         let url = `http://localhost:5000/trades?page=${page}&limit=${rowsPerPage}`;
//         if (searchTerm) {
//             url = `http://localhost:5000/search?term=${encodeURIComponent(searchTerm)}&page=${page}&limit=${rowsPerPage}`;
//         }
//         axios.get(url)
//             .then(response => {
//                 const fetchedTrades = response.data.data;
//                 const totalCount = response.data.totalCount;
//                 setTrades(fetchedTrades);
//                 setTotalPages(Math.ceil(totalCount / rowsPerPage));
//                 setLoading(false);
//                 setSuggestions([]);

//                 // Save data to localStorage
//                 localStorage.setItem(tradesLocalStorageKey, JSON.stringify(fetchedTrades));
//                 localStorage.setItem(totalPagesLocalStorageKey, JSON.stringify(Math.ceil(totalCount / rowsPerPage)));
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the trade data!', error);
//                 setError('Error fetching trade data');
//                 setLoading(false);
//                 setSuggestions([]);
//             });
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const handleSearchChange = (event) => {
//         const value = event.target.value;
//         setSearchTerm(value);
//         if (value.trim() !== '') {
//             const filteredSuggestions = trades.filter(trade =>
//                 trade.security_name.toLowerCase().includes(value.toLowerCase())
//             );
//             setSuggestions(filteredSuggestions.map(trade => trade.security_name));
//         } else {
//             setSuggestions([]);
//         }
//         fetchTrades(1);
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         fetchTrades(1);
//     };

//     const handleSuggestionClick = (suggestion) => {
//         setSearchTerm(suggestion);
//         fetchTrades(1);
//     };

//     const renderSkeletonRows = () => {
//         return Array.from({ length: rowsPerPage }).map((_, index) => (
//             <tr key={index}>
//                 <td><Skeleton height={20} /></td>
//                 <td><Skeleton height={20} /></td>
//                 <td><Skeleton height={20} /></td>
//                 <td><Skeleton height={20} /></td>
//                 <td><Skeleton height={20} /></td>
//                 <td><Skeleton height={20} /></td>
//                 <td><Skeleton height={20} /></td>
//                 <td><Skeleton height={20} /></td>
//             </tr>
//         ));
//     };

//     const renderSkeletonHeader = () => {
//         return (
//             <tr>
//                 <th><Skeleton /></th>
//                 <th><Skeleton /></th>
//                 <th><Skeleton /></th>
//                 <th><Skeleton /></th>
//                 <th><Skeleton /></th>
//                 <th><Skeleton /></th>
//                 <th><Skeleton /></th>
//                 <th><Skeleton /></th>
//             </tr>
//         );
//     };

//     return (
//         <div className="trade-table-containerr">
//             <h2>Trade Data</h2>
//             <form onSubmit={handleSearchSubmit} className="search-bar-container">
//                 <input
//                     type="text"
//                     className="search-bar"
//                     placeholder="Search by security name"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                 />
//                 <button type="submit" className="search-button">Search</button>
//             </form>
//             {suggestions.length > 0 && (
//                 <ul className="suggestions">
//                     {suggestions.map((suggestion, index) => (
//                         <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//                             {suggestion}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             {error ? (
//                 <p>{error}</p>
//             ) : (
//                 <>
//                     <table className="trade-table">
//                         <thead>
//                             {loading ? renderSkeletonHeader() : (
//                                 <tr>
//                                     {searchTerm ? (
//                                         <>
//                                             <th>Date</th>
//                                             <th>Symbol</th>
//                                             <th>Security Name</th>
//                                             <th>Client Name</th>
//                                             <th>Buy/Sell</th>
//                                             <th>Quantity Traded</th>
//                                             <th>Trade Price Weighted Avg Price</th>
//                                             <th>Security ID</th>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <th>ID</th>
//                                             <th>Security Name</th>
//                                             <th>Name Slug</th>
//                                         </>
//                                     )}
//                                 </tr>
//                             )}
//                         </thead>
//                         <tbody>
//                             {loading ? renderSkeletonRows() : trades.map((trade, index) => (
//                                 <tr key={index}>
//                                     {searchTerm ? (
//                                         <>
//                                             <td>{trade.dummy_date}</td>
//                                             <td>{trade.Symbol}</td>
//                                             <td>{trade.security_name}</td>
//                                             <td>{trade.Client_Name}</td>
//                                             <td>{trade.Buy_Sell}</td>
//                                             <td>{trade.Quantity_Traded}</td>
//                                             <td>{trade.Trade_Price_Wght_Avg_Price}</td>
//                                             <td>{trade.security_id}</td>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <td>{trade.id}</td>
//                                             <td>
//                                                 <Link to={`/security/${encodeURIComponent(trade.id)}/${encodeURIComponent(trade.name_slug)}`}>
//                                                     {trade.security_name}
//                                                 </Link>
//                                             </td>
//                                             <td>{trade.name_slug}</td>
//                                         </>
//                                     )}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <div className="pagination">
//                         {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//                             <button
//                                 key={page}
//                                 className={`pagination-button ${page === currentPage ? 'active' : ''}`}
//                                 onClick={() => handlePageChange(page)}
//                             >
//                                 {page}
//                             </button>
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// export default TradeTable;