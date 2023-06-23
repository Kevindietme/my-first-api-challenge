import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { getAllCandy, addNewCandy, updateCandyById } from "./src/candy.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req,res) => res.send("This is working"));

app.get("/candy", getAllCandy);
app.post("/candy", addNewCandy);
app.patch("/candy/:candyId", updateCandyById);

export const api = onRequest(app)



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
