const connect = require('../config/connection.js');

module.exports ={
    view: (param) => {
        return new Promise ((resolve,reject) => {
            var queryString = `SELECT * FROM list WHERE user_id = ${param}`
            connect.query(queryString,[param], function (error,result){
                if (error) {reject(error) } else{
                    resolve(result)
                    }
            })
        })
    },
    insert: (param,id) => {
        return new Promise ((resolve,reject) => {
            var queryString = `INSERT INTO list (task, user_id) VALUES ("${param}", ${id})`
            connect.query(queryString,[param, id], function (error,result){
                if (error) {reject(error) } else{
                    resolve(result)
                    }
            })
        })
    },
    updateOne: function(valOfState,valOfId) {
        return new Promise ((resolve,reject) => {
        var queryString = 'UPDATE list SET complete = (?) WHERE id = (?);'
        connect.query(queryString,[valOfState,valOfId], function (error, results) {
        if (error) {reject(error) } else{
        resolve(results)
        }
        })
        })
    }
}