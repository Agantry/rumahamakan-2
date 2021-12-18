var developmentDatabase = {
    postgres: {
    host: 'ec2-52-54-237-144.compute-1.amazonaws.com',
    port: 5432,
    database: 'dbegne2lq5s50d',
    user: 'gigbxzpbvjrchp',
    password: '7e7bf0eefde4a5c65cba8f7a343bd915380a628fcd7d4ca6e3b063c65491ef79'
    }
    }
    
    var connectionString ="gigbxzpbvjrchp:7e7bf0eefde4a5c65cba8f7a343bd915380a628fcd7d4ca6e3b063c65491ef79@ec2-52-54-237-144.compute-1.amazonaws.com:5432/dbegne2lq5s50d?ssl=true";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = { rejectUnauthorized: false };
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }
var developmentDatabase = {
    postgres: {
    host: 'ec2-52-54-237-144.compute-1.amazonaws.com',
    port: 5432,
    database: 'dbegne2lq5s50d',
    user: 'gigbxzpbvjrchp',
    password: '7e7bf0eefde4a5c65cba8f7a343bd915380a628fcd7d4ca6e3b063c65491ef79'
    }
    }
    
    var connectionString ="gigbxzpbvjrchp:7e7bf0eefde4a5c65cba8f7a343bd915380a628fcd7d4ca6e3b063c65491ef79@ec2-52-54-237-144.compute-1.amazonaws.com:5432/dbegne2lq5s50d?ssl=true";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = { rejectUnauthorized: false };
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }
