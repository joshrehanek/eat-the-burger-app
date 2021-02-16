const connection = require("./connection.js");

// / Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    // column1=value, column2=value2,...
    const arr = [];
    for (const key in ob) {
        arr.push(key + '=' + ob[key]);
    }
    return arr.toString();
}
const printQuestionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

const orm = {
    selectAll: function (table, cb) {
        const query = `SELECT * FROM ${table};`;
        connection.query(query, function (err, result) {
            if (err) throw err;
            else cb(result);
            console.log(result);
        });
    },
    //Dane Shrewsberry helped me with this function
    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';
        console.log(`This is the query string from insertOne: ${queryString}`);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;
        console.log(`This is the query string from update: ${queryString}`);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;