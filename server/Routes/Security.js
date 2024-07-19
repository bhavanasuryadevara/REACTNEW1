
const express = require('express');
const Router = express.Router();
const connection = require('./dbconnection'); // Ensure this is the correct path

Router.get('/', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const security_id = req.query.security_id;

    let query = `SELECT 
    DATE_FORMAT(mt.dummy_date, '%d-%m-%Y') AS dummy_date, 
    mt.Symbol, 
    sn.Security_Name, 
    mt.Client_Name, 
    mt.Buy_Sell, 
    mt.Quantity_Traded, 
    mt.Trade_Price_Wght_Avg_Price, 
    mt.security_id 
from employees.merge_csv mt join employees.security_name sn 
 on mt.security_id =sn.id `;

    const queryParams = [];
    if (security_id) {
        query += ' WHERE security_id = ?';
        queryParams.push(security_id);
    }

    query += ' LIMIT ?, ?';
    queryParams.push(offset, limit);

    connection.query(query, queryParams, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const countQuery = `
            SELECT COUNT(*) AS totalCount FROM merge_csv
            ${security_id ? 'WHERE security_id = ?' : ''}
        `;
       
        connection.query(countQuery, security_id ? [security_id] : [], (countError, countResults) => {
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