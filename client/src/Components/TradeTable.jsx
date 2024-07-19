



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

//     useEffect(() => {
//         fetchTrades(currentPage);
//     }, [currentPage]);

//     const fetchTrades = (page) => {
//         setLoading(true);
//         let url = `http://localhost:5000/trades?page=${page}&limit=${rowsPerPage}`;
//         if (searchTerm) {
//             url = `http://localhost:5000/search?term=${encodeURIComponent(searchTerm)}&page=${page}&limit=${rowsPerPage}`;
//         }
//         axios.get(url)
//             .then(response => {
//                 setTimeout(() => {
//                     setTrades(response.data.data);
//                     setTotalPages(Math.ceil(response.data.totalCount / rowsPerPage));
//                     setLoading(false);
//                     setSuggestions([]);
//                 }, 500);
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

// export default TradeTable; //workimg

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './TradeTablecss.css';

function TradeTable() {
    const [trades, setTrades] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const rowsPerPage = 10;

    const tradesLocalStorageKey = 'tradesData';
    const totalPagesLocalStorageKey = 'totalPages';
    const sessionTradesKey = 'sessionTrades';
    const cookieName = 'first10Trades';
    const cookieExpiresInDays = 1; // Cookie expiration time in days

    useEffect(() => {
        fetchTrades(currentPage);
    }, [currentPage]);

    const fetchTrades = (page) => {
        setLoading(true);
        let url = `http://localhost:5000/trades?page=${page}&limit=${rowsPerPage}`;
        if (searchTerm) {
            url = `http://localhost:5000/search?term=${encodeURIComponent(searchTerm)}&page=${page}&limit=${rowsPerPage}`;
        }
        axios.get(url)
            .then(response => {
                const fetchedTrades = response.data.data;
                const totalCount = response.data.totalCount;
                setTrades(fetchedTrades);
                setTotalPages(Math.ceil(totalCount / rowsPerPage));
                setLoading(false);
                setSuggestions([]);

                // Save all fetched trades to localStorage
                localStorage.setItem(tradesLocalStorageKey, JSON.stringify(fetchedTrades));
                localStorage.setItem(totalPagesLocalStorageKey, JSON.stringify(Math.ceil(totalCount / rowsPerPage)));

                // Save first 10 trades to sessionStorage
                const first10Trades = fetchedTrades.slice(0, rowsPerPage);
                sessionStorage.setItem(sessionTradesKey, JSON.stringify(first10Trades));
                 // Clear sessionStorage for 'sessionTrades' key
                // sessionStorage.removeItem('sessionTrades');

                // Set cookies for first 10 trades
                const cookieData = first10Trades.map(trade => ({
                    id: trade.id,
                    security_name: trade.security_name
                }));
                setCookie(cookieName, JSON.stringify(cookieData), cookieExpiresInDays);
            })
            .catch(error => {
                console.error('There was an error fetching the trade data!', error);
                setError('Error fetching trade data');
                setLoading(false);
                setSuggestions([]);
            });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (value.trim() !== '') {
            const filteredSuggestions = trades.filter(trade =>
                trade.security_name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions.map(trade => trade.security_name));
        } else {
            setSuggestions([]);
        }
        fetchTrades(1);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchTrades(1);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        fetchTrades(1);
    };

    const renderSkeletonRows = () => {
        return Array.from({ length: rowsPerPage }).map((_, index) => (
            <tr key={index}>
                <td><Skeleton height={20} /></td>
                <td><Skeleton height={20} /></td>
                <td><Skeleton height={20} /></td>
                <td><Skeleton height={20} /></td>
                <td><Skeleton height={20} /></td>
                <td><Skeleton height={20} /></td>
                <td><Skeleton height={20} /></td>
                <td><Skeleton height={20} /></td>
            </tr>
        ));
    };

    const renderSkeletonHeader = () => {
        return (
            <tr>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
            </tr>
        );
    };

    // Function to set cookie
    const setCookie = (name, value, days) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    };

    return (
        <div className="trade-table-container">
            <h2>Trade Data</h2>
            <form onSubmit={handleSearchSubmit} className="search-bar-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by security name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                    <table className="trade-table">
                        <thead>
                            {loading ? renderSkeletonHeader() : (
                                <tr>
                                    {searchTerm ? (
                                        <>
                                            <th>Date</th>
                                            <th>Symbol</th>
                                            <th>Security Name</th>
                                            <th>Client Name</th>
                                            <th>Buy/Sell</th>
                                            <th>Quantity Traded</th>
                                            <th>Trade Price Weighted Avg Price</th>
                                            <th>Security ID</th>
                                        </>
                                    ) : (
                                        <>
                                            <th>ID</th>
                                            <th>Security Name</th>
                                            <th>Name Slug</th>
                                        </>
                                    )}
                                </tr>
                            )}
                        </thead>
                        <tbody>
                            {loading ? renderSkeletonRows() : trades.map((trade, index) => (
                                <tr key={index}>
                                    {searchTerm ? (
                                        <>
                                            <td>{trade.dummy_date}</td>
                                            <td>{trade.Symbol}</td>
                                            <td>{trade.security_name}</td>
                                            <td>{trade.Client_Name}</td>
                                            <td>{trade.Buy_Sell}</td>
                                            <td>{trade.Quantity_Traded}</td>
                                            <td>{trade.Trade_Price_Wght_Avg_Price}</td>
                                            <td>{trade.security_id}</td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{trade.id}</td>
                                            <td>
                                                <Link to={`/security/${encodeURIComponent(trade.id)}/${encodeURIComponent(trade.name_slug)}`}>
                                                    {trade.security_name}
                                                </Link>
                                            </td>
                                            <td>{trade.name_slug}</td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={`pagination-button ${page === currentPage ? 'active' : ''}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default TradeTable;
