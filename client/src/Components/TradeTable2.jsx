// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import './Tradetable2css.css';

// function TradeTable2() {
//     const { id } = useParams();
//     const [trades, setTrades] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);
//     const rowsPerPage = 10;

//     useEffect(() => {
//         if (id) {
//             fetchTrades(id, currentPage);
//         }
//     }, [id, currentPage]);

//     const fetchTrades = (securityId, page) => {
//         setLoading(true);
//         axios.get(`http://localhost:5000/security?security_id=${securityId}&page=${page}&limit=${rowsPerPage}`)
//             .then(response => {
//                 // Introduce an artificial delay (for skeleton loading effect)
//                 setTimeout(() => {
//                     setTrades(response.data.data);
//                     setTotalPages(response.data.totalPages);
//                     setLoading(false);
//                 }, 1000); // Adjust delay time as needed
//             })
//             .catch(error => {
//                 console.error('Error fetching trade data:', error);
//                 setError('Error fetching trade data');
//                 setLoading(false);
//             });
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const renderSkeletonRows = () => {
//         return Array.from({ length: rowsPerPage }).map((_, index) => (
//             <tr key={index}>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//             </tr>
//         ));
//     };

//     return (
//         <div className="trade-table-container">
//             <h2>Trade Data for Security ID: {id}</h2>
//             {error ? (
//                 <p>{error}</p>
//             ) : (
//                 <>
//                     <table className="trade-table">
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Symbol</th>
//                                 <th>Security Name</th>
//                                 <th>Client Name</th>
//                                 <th>Buy/Sell</th>
//                                 <th>Quantity Traded</th>
//                                 <th>Trade Price Weighted Avg Price</th>
//                                 <th>Security ID</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {loading ? (
//                                 renderSkeletonRows()
//                             ) : (
//                                 trades.map((trade, index) => (
//                                     <tr key={index}>
//                                         <td>{trade.date_file}</td>
//                                         <td>{trade.Symbol}</td>
//                                         <td>{trade.security_name}</td>
//                                         <td>{trade.Client_Name}</td>
//                                         <td>{trade.Buy_Sell}</td>
//                                         <td>{trade.Quantity_Traded}</td>
//                                         <td>{trade.Trade_Price_Wght_Avg_Price}</td>
//                                         <td>{trade.security_id}</td>
//                                     </tr>
                                    
//                                 ))
//                             )}
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

// export default TradeTable2;


//********** */
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import './Tradetable2css.css';

// function TradeTable2() {
//     const { id } = useParams();
//     const [trades, setTrades] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);
//     const rowsPerPage = 10;

// useEffect(() => {
//     if (id) {
//         fetchTrades(id, currentPage);
//     }
// }, [id, currentPage]);

// const fetchTrades = (securityId, page) => {
//     setLoading(true);
//     axios.get(`http://localhost:5000/security?security_id=${securityId}&page=${page}&limit=${rowsPerPage}`)
//         .then(response => {
//             // Introduce an artificial delay
//             setTimeout(() => {
//                 setTrades(response.data.data);
//                 setTotalPages(response.data.totalPages);
//                 setLoading(false);
//             }, 1000); // Increase this value (in milliseconds) to extend the skeleton display time
//         })
//         .catch(error => {
//             console.error('Error fetching trade data:', error);
//             setError('Error fetching trade data');
//             setLoading(false);
//         });
// };

// const handlePageChange = (page) => {
//     setCurrentPage(page);
// };

// const renderSkeletonRows = () => {
//     return Array.from({ length: rowsPerPage }).map((_, index) => (
//         <tr key={index}>
//             <td><Skeleton /></td>
//             <td><Skeleton /></td>
//             <td><Skeleton /></td>
//             <td><Skeleton /></td>
//             <td><Skeleton /></td>
//             <td><Skeleton /></td>
//             <td><Skeleton /></td>
//         </tr>
//     ));
// };

// return (
//     <div className="trade-table-container">
//         <h2>Trade Data for Security ID: {id}</h2>
//         {error ? (
//             <p>{error}</p>
//         ) : (
//             <>
//                 <table className="trade-table">
//                     <thead>
//                         <tr>
//                             <th>Date</th>
//                             <th>Symbol</th>
//                             <th>Security Name</th>
//                             <th>Client Name</th>
//                             <th>Buy/Sell</th>
//                             <th>Quantity Traded</th>
//                             <th>Trade Price Weighted Avg Price</th>
//                             <th>Security ID</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {loading ? renderSkeletonRows() : trades.map((trade, index) => (
//                             <tr key={index}>
//                                 <td>{trade.date_file}</td>
//                                 <td>{trade.Symbol}</td>
//                                 <td>{trade.security_name}</td>
//                                 <td>{trade.Client_Name}</td>
//                                 <td>{trade.Buy_Sell}</td>
//                                 <td>{trade.Quantity_Traded}</td>
//                                 <td>{trade.Trade_Price_Wght_Avg_Price}</td>
//                                 <td>{trade.security_id}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div className="pagination">
//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//                         <button
//                             key={page}
//                             className={`pagination-button ${page === currentPage ? 'active' : ''}`}
//                             onClick={() => handlePageChange(page)}
//                         >
//                             {page}
//                         </button>
//                     ))}
//                 </div>
//             </>
//         )}
//     </div>
// );
// }

// export default TradeTable2;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import './Tradetable2css.css';

// function TradeTable2() {
//     const { id } = useParams();
//     const [trades, setTrades] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);
//     const rowsPerPage = 10;

//     useEffect(() => {
//         if (id) {
//             fetchTrades(id, currentPage);
//         }
//     }, [id, currentPage]);

//     const fetchTrades = (securityId, page) => {
//         setLoading(true);
//         axios.get(`http://localhost:5000/security?security_id=${securityId}&page=${page}&limit=${rowsPerPage}`)
//             .then(response => {
//                 // Introduce an artificial delay
//                 setTimeout(() => {
//                     setTrades(response.data.data);
//                     setTotalPages(response.data.totalPages);
//                     setLoading(false);
//                 }, 1000); // Increase this value (in milliseconds) to extend the skeleton display time
//             })
//             .catch(error => {
//                 console.error('Error fetching trade data:', error);
//                 setError('Error fetching trade data');
//                 setLoading(false);
//             });
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const renderSkeletonRows = () => {
//         return Array.from({ length: rowsPerPage }).map((_, index) => (
//             <tr key={index}>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//             </tr>
//         ));
//     };

//     return (
//         <div className="trade-table-container">
//             <h2>Trade Data for Security ID: {id}</h2>
//             {error ? (
//                 <p>{error}</p>
//             ) : (
//                 <>
//                     <table className="trade-table">
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Symbol</th>
//                                 <th>Security Name</th>
//                                 <th>Client Name</th>
//                                 <th>Buy/Sell</th>
//                                 <th>Quantity Traded</th>
//                                 <th>Trade Price Weighted Avg Price</th>
//                                 <th>Security ID</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {loading ? renderSkeletonRows() : trades.map((trade, index) => (
//                                 <tr key={index}>
//                                     <td>{trade.date_file}</td>
//                                     <td>{trade.Symbol}</td>
//                                     <td>{trade.security_name}</td>
//                                     <td>{trade.Client_Name}</td>
//                                     <td>{trade.Buy_Sell}</td>
//                                     <td>{trade.Quantity_Traded}</td>
//                                     <td>{trade.Trade_Price_Wght_Avg_Price}</td>
//                                     <td>{trade.security_id}</td>
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

// export default TradeTable2;


/******** */
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import './Tradetable2css.css';

// function TradeTable2() {
//     const { id } = useParams();
//     const [trades, setTrades] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);
//     const rowsPerPage = 10;

//     useEffect(() => {
//         if (id) {
//             fetchTrades(id, currentPage);
//         }
//     }, [id, currentPage]);

//     const fetchTrades = (securityId, page) => {
//         setLoading(true);
//         axios.get(`http://localhost:5000/security?security_id=${securityId}&page=${page}&limit=${rowsPerPage}`)
//             .then(response => {
//                // console.log(response.data); // Log the response data received from the server
//                 setTimeout(() => {
//                     setTrades(response.data.data);
//                     setTotalPages(response.data.totalPages);
//                     setLoading(false);
//                 }, 1000); // Adjust if needed for longer skeleton display
//             })
//             .catch(error => {
//                 console.error('Error fetching trade data:', error);
//                 setError('Error fetching trade data');
//                 setLoading(false);
//             });
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const renderSkeletonRows = () => {
//         return Array.from({ length: rowsPerPage }).map((_, index) => (
//             <tr key={index}>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//             </tr>
//         ));
//     };

//     return (
//         <div className="trade-table-container">
//             <h2>Trade Data for Security ID: {id}</h2>
//             {error ? (
//                 <p>{error}</p>
//             ) : (
//                 <>
//                     <table className="trade-table">
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Symbol</th>
//                                 <th>Security Name</th>
//                                 <th>Client Name</th>
//                                 <th>Buy/Sell</th>
//                                 <th>Quantity Traded</th>
//                                 <th>Trade Price Weighted Avg Price</th>
//                                 <th>Security ID</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {loading ? renderSkeletonRows() : trades.map((trade, index) => (
//                                 <tr key={index}>
//                                     <td>{trade.date_file}</td>
//                                     <td>{trade.Symbol}</td>
//                                     <td>{trade.security_name}</td>
//                                     <td>{trade.Client_Name}</td>
//                                     <td>{trade.Buy_Sell}</td>
//                                     <td>{trade.Quantity_Traded}</td>
//                                     <td>{trade.Trade_Price_Wght_Avg_Price}</td>
//                                     <td>{trade.security_id}</td>
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

// export default TradeTable2;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import './Tradetable2css.css';

// function TradeTable2() {
//     const { id } = useParams();
//     const [trades, setTrades] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);
//     const rowsPerPage = 10;

//     useEffect(() => {
//         if (id) {
//             fetchTrades(id, currentPage);
//         }
//     }, [id, currentPage]);

//     const fetchTrades = (securityId, page) => {
//         setLoading(true);
//         axios.get(`http://localhost:5000/security?security_id=${securityId}&page=${page}&limit=${rowsPerPage}`)
//             .then(response => {
//                 // console.log(response.data); // Log the response data received from the server
//                 setTimeout(() => {
//                     setTrades(response.data.data);
//                     setTotalPages(response.data.totalPages);
//                     setLoading(false);
//                 }, 1000); // Adjust if needed for longer skeleton display
//             })
//             .catch(error => {
//                 console.error('Error fetching trade data:', error);
//                 setError('Error fetching trade data');
//                 setLoading(false);
//             });
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const renderSkeletonRows = () => {
//         return Array.from({ length: rowsPerPage }).map((_, index) => (
//             <tr key={index}>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//                 <td><Skeleton /></td>
//             </tr>
//         ));
//     };

//     return (
//         <div className="trade-table-container">
//             <h2>Trade Data for Security ID: {id}</h2>
//             {error ? (
//                 <p>{error}</p>
//             ) : (
//                 <>
//                     <table className="trade-table">
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Symbol</th>
//                                 <th>Security Name</th>
//                                 <th>Client Name</th>
//                                 <th>Buy/Sell</th>
//                                 <th>Quantity Traded</th>
//                                 <th>Trade Price Weighted Avg Price</th>
//                                 <th>Security ID</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {loading ? renderSkeletonRows() : trades.map((trade, index) => (
//                                 <tr key={index}>
//                                     <td>{trade.date_file}</td>
//                                     <td>{trade.Symbol}</td>
//                                     <td>{trade.security_name}</td>
//                                     <td>{trade.Client_Name}</td>
//                                     <td>{trade.Buy_Sell}</td>
//                                     <td>{trade.Quantity_Traded}</td>
//                                     <td>{trade.Trade_Price_Wght_Avg_Price}</td>
//                                     <td>{trade.security_id}</td>
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

// export default TradeTable2;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Tradetable2css.css';

function TradeTable2() {
    const { id } = useParams();
    const [trades, setTrades] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const rowsPerPage = 10;

    useEffect(() => {
        if (id) {
            fetchTrades(id, currentPage);
        }
    }, [id, currentPage]);

    const fetchTrades = (securityId, page) => {
        setLoading(true);
        axios.get(`http://localhost:5000/security?security_id=${securityId}&page=${page}&limit=${rowsPerPage}`)
            .then(response => {
                // Introduce an artificial delay
                setTimeout(() => {
                    setTrades(response.data.data);
                    setTotalPages(response.data.totalPages);
                    setLoading(false);
                }, 1000); // Increase this value (in milliseconds) to extend the skeleton display time
            })
            .catch(error => {
                console.error('Error fetching trade data:', error);
                setError('Error fetching trade data');
                setLoading(false);
            });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderSkeletonRows = () => {
        return Array.from({ length: rowsPerPage }).map((_, index) => (
            <tr key={index}>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
            </tr>
        ));
    };

    return (
        <div className="trade-table-container">
            <h2>Trade Data for Security ID: {id}</h2>
            {error ? (
                <p>{error}</p>
            ) : (
                <>
                    <table className="trade-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Symbol</th>
                                <th>Security Name</th>
                                <th>Client Name</th>
                                <th>Buy/Sell</th>
                                <th>Quantity Traded</th>
                                <th>Trade Price Weighted Avg Price</th>
                                <th>Security ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? renderSkeletonRows() : trades.map((trade, index) => (
                                <tr key={index}>
                                    <td>{trade.dummy_date}</td>
                                    <td>{trade.Symbol}</td>
                                    <td>{trade.Security_Name}</td>
                                    <td>{trade.Client_Name}</td>
                                    <td>{trade.Buy_Sell}</td>
                                    <td>{trade.Quantity_Traded}</td>
                                    <td>{trade.Trade_Price_Wght_Avg_Price}</td>
                                    <td>{trade.security_id}</td>
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

export default TradeTable2;



