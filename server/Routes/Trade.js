


const express = require('express');
const Router = express.Router();
const cors = require('cors');
const connection = require('./dbconnection'); 

Router.use(cors());
Router.use(express.json());

Router.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Current page number, default to 1
    const limit = parseInt(req.query.limit) || 10; // Number of rows per page, default to 10
    const offset = (page - 1) * limit; // Calculate the offset for SQL query

    // Define the query to fetch records from the security_name table
    const query = `
      SELECT distinct (m.security_id) as id, s.security_name, s.name_slug
FROM merge_csv AS m
JOIN security_name AS s
ON m.security_id = s.id
        ORDER BY id ASC
        LIMIT ?, ?`;
        
    // Execute the query with the calculated offset and limit
    connection.query(query, [offset, limit], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }

        // Define the query to get the total number of records
        const countQuery = `SELECT COUNT(*) as totalCount FROM security_name`;
        connection.query(countQuery, (countError, countResults) => {
            if (countError) {
                console.error('Error executing count query:', countError);
                return res.status(500).json({ message: 'Internal server error' });
            }

            const totalCount = countResults[0].totalCount; // Get the total count of records

            // Construct the response object
            const response = {
                data: results,
                totalCount,
                currentPage: page,
                totalPages: Math.ceil(totalCount / limit)
            };

            return res.status(200).json(response); // Send the response in JSON format
        });
    });
});

module.exports = Router;