import Router from "express";
import MessagesController from "../controllers/messages.controller.js";

const router = Router();

router.post("/send", MessagesController.send);

export default router;