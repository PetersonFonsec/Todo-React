const {connect, connection} = require("mongoose");

connect(process.env.DB_LINK, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

connection.on("open", () => console.log("create connection with mongodb"));

connection.on("error", console.log);
