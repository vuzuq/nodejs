import { Express } from "express-serve-static-core";

const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine