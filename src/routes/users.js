import { Router } from "express";
import UserController from "../controllers/users.js";
const USERS_ROUTER = Router();

// * UserController.getAll seria el equivalente a esta funcion
/* USERS_ROUTER.get("/", (req, res) => {
  res.status(200).json({ message: "works" });
}); */
USERS_ROUTER.get("/", UserController.getAll);

USERS_ROUTER.post("/", UserController.create);

export default USERS_ROUTER;
