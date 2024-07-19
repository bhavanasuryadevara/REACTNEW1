const express = require('express');
const Router = express.Router();
const connection = require('./dbconnection');

Router.post('/',(req, res) => {
    const FirstName= req.body.FirstName;
    const email= req.body.email;
    const mobile= req.body.mobile;
    const password= req.body.password;
    const salt= req.body.salt;
    const verification_token= req.body.verification_token;
    const join_date = new Date(); 
    console.log(email);
    console.log(mobile);
    console.log (FirstName);
    console.log (password);
    console.log (salt);
    console.log (verification_token);
    

   const query = `SELECT email FROM employee WHERE Lower(email) = ?`;
  connection.query(query,[email], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Query results:', results);
    if (results.length > 0) {
      return res.status(400).json({ error: 'Email already has an account' });
    }
    
    console.log('no error');
    const sql = `INSERT INTO employee (FirstName,email,mobile,password,salt,join_date) VALUES(?,?,?,?,?,?)`;
    connection.query(sql,[FirstName,email,mobile,password,salt,join_date ],(err, result) => {

    

      if(err) {
        console.error('Error saving user data:', err);
        return res.status(500).send({error: 'Errro saving user data'});

  }
  console.log('User data saved successfully:', result);
       userId = result.insertId;
       console.log('userId',userId)
       module.exports.variable = userId;
  res.send({message:'User data saved successfully'});
})
  })
})






                        
module.exports = Router;