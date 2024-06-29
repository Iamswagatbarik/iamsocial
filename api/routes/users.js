import express from "express";
import { getAllUser, getUser , updateUser} from "../controllers/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)
router.get("/all-users",getAllUser);


export default router