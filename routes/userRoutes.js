const express = require("express")
const {createUser,getUser,getUserById,deleteUserById,updateUserById} = require("../controllers/userControllers")
const router = express()

router.post("/",createUser)
router.get("/",getUser)
router.get("/:id",getUserById)
router.delete("/:id",deleteUserById)
router.put("/:id",updateUserById)
module.exports = router