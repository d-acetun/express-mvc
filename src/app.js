import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import router from "./routes/routes.js";

const app = express();

app.use(json());
app.disable("x-powered-by");

app.use(corsMiddleware());

app.use((req, res, next) => {
  console.log("custom middleware");
  next();
});

app.use("/api/v1", router);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
