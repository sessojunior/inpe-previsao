const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

const model = {
	name: "bam",
	day: "2024-05-18",
	turn: "06",
	hour: "036",
};

app.get(["/", "/previsao"], (req, res) => {
	res.render("./pages", { model: model });
});
app.get("/nowcasting", (req, res) => {
	res.render("./pages/nowcasting");
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}...`);
});
