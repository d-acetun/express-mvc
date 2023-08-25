import { Router } from "express";
import USERS_ROUTER from "./users.js";

const router = Router();

router.use("/users", USERS_ROUTER);

export default router;
