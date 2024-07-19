



const express = require('express');
const Router = express.Router();
const connection = require('./dbconnection'); // Ensure this is the correct path

Router.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const term = req.query.term;

    let query = `
        SELECT 
            DATE_FORMAT(mt.dummy_date, '%d-%m-%Y') AS dummy_date,
            mt.Symbol, 
            sn.security_name, 
            mt.Client_Name, 
            mt.Buy_Sell, 
            mt.Quantity_Traded, 
            mt.Trade_Price_Wght_Avg_Price, 
            mt.security_id
        FROM 
            merge_csv AS mt
        JOIN 
            security_name AS sn ON mt.security_id = sn.id
        WHERE 
            sn.security_name LIKE ?
        ORDER BY 
            mt.dummy_date DESC
        LIMIT ?, ?`;

    const queryParams = [`%${term}%`, offset, limit];

    connection.query(query, queryParams, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const countQuery = `
            SELECT 
                COUNT(*) AS totalCount 
            FROM 
                merge_csv AS mt
            JOIN 
                security_name AS sn ON mt.security_id = sn.id
            WHERE 
                sn.security_name LIKE ?
        `;
        const countParams = [`%${term}%`];

        connection.query(countQuery, countParams, (countError, countResults) => {
            if (countError) {
                console.error('Error executing count query:', countError);
                return res.status(500).json({ message: 'Internal server error' });
            }

            const totalCount = countResults[0].totalCount;
            const response = {
                data: results,
                totalCount,
                currentPage: page,
                totalPages: Math.ceil(totalCount / limit),
            };

            res.status(200).json(response);
        });
    });
});

module.exports = Router;








/************************** */

// const express = require('express');
// const Router = express.Router();
// const connection = require('./dbconnection'); // Ensure this is the correct path

// Router.get('/', (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const offset = (page - 1) * limit;
//     const term = req.query.term;

//     // Define the base query to fetch data with pagination and filtering by term
//     let query = `
//         SELECT 
//             DATE_FORMAT(mt.date_file, '%d-%m-%Y') AS date_file,
//             mt.Symbol, 
//             sn.security_name, 
//             mt.Client_Name, 
//             mt.Buy_Sell, 
//             mt.Quantity_Traded, 
//             mt.Trade_Price_Wght_Avg_Price, 
//             mt.security_id
//         FROM 
//             merge_csv AS mt
//         JOIN 
//             security_name AS sn ON mt.security_id = sn.id
//         WHERE 
//             sn.security_name LIKE ?
//         ORDER BY 
//             mt.date_file DESC
//         LIMIT ?, ?`;

//     const queryParams = [`%${term}%`, offset, limit]; // Parameters for the main query

//     // Execute the main query to fetch paginated data
//     connection.query(query, queryParams, (error, results) => {
//         if (error) {
//             console.error('Error executing query:', error);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//         // Define the query to get the total count of records matching the term
//         const countQuery = `
//             SELECT 
//                 COUNT(*) AS totalCount 
//             FROM 
//                 merge_csv AS mt
//             JOIN 
//                 security_name AS sn ON mt.security_id = sn.id
//             WHERE 
//                 sn.security_name LIKE ?`;

//         const countParams = [`%${term}%`]; // Parameters for the count query

//         // Execute the count query to get the total number of records
//         connection.query(countQuery, countParams, (countError, countResults) => {
//             if (countError) {
//                 console.error('Error executing count query:', countError);
//                 return res.status(500).json({ message: 'Internal server error' });
//             }

//             const totalCount = countResults[0].totalCount;
//             const totalPages = Math.ceil(totalCount / limit);

//             // Construct the response object with pagination details
//             const response = {
//                 data: results,
//                 totalCount,
//                 currentPage: page,
//                 totalPages,
//             };

//             res.status(200).json(response); // Send the response with JSON data
//         });
//     });
// });

// module.exports = Router;































//  const express = require('express');
// const Router = express.Router();
// const connection = require('./dbconnection'); // Ensure this is the correct path

// Router.get('/', (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const offset = (page - 1) * limit;
//     const term = req.query.term ? `%${req.query.term}%` : '%';

//     let query = `
//         SELECT 
//             DATE_FORMAT(mt.date_file, '%d-%m-%Y') AS date_file,
//             mt.Symbol,
//             sn.security_name AS Security_Name,
//             mt.Client Name AS 'Client Name',
//             mt.Buy / Sell AS 'Buy / Sell',
//             mt.Quantity Traded AS 'Quantity Traded',
//             mt.Trade Price / Wght. Avg. Price AS 'Trade Price / Wght. Avg. Price',
//             mt.Remarks,
//             mt.dummy_date
//         FROM 
//             merge_csv AS mt
//         JOIN 
//             security_name AS sn ON mt.security_id = sn.id
//         WHERE 
//             sn.security_name LIKE ?
//         ORDER BY 
//             mt. date_file DESC
//         LIMIT ?, ?`;

//     const queryParams = [term, offset, limit];

//     connection.query(query, queryParams, (error, results) => {
//         if (error) {
//             console.error('Error executing query:', error);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//         const countQuery = `
//             SELECT 
//                 COUNT(*) AS totalCount 
//             FROM 
//                 merge_CSV AS mt
//             JOIN 
//                 security_name AS sn ON mt.security_id = sn.id
//             WHERE 
//                 sn.security_name LIKE ?
//         `;
//         const countParams = [term];

//         connection.query(countQuery, countParams, (countError, countResults) => {
//             if (countError) {
//                 console.error('Error executing count query:', countError);
//                 return res.status(500).json({ message: 'Internal server error' });
//             }

//             const totalCount = countResults[0].totalCount;
//             const response = {
//                 data: results,
//                 totalCount,
//                 currentPage: page,
//                 totalPages: Math.ceil(totalCount / limit),
//             };

//             res.status(200).json(response);
//         });
//     });
// });

// module.exports = Router;

