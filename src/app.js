import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// for form data recive
app.use(express.json({ limit: "16kb" }));
// for url data recive
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// for store pdf, file our database like public folder
app.use(express.static("public"));
// cookie parser for access user cookie and set cookie/    CRUD operation perform
app.use(cookieParser());

export { app };
