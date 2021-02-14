const connection = require("./connection.js");

const orm = {
    selectAll: function(table, colToSearch) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table, colToSearch], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

insertOne()

updateOne()

module.exports = orm;