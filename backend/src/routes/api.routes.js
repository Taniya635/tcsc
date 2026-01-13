const express=require("express");
const router=express.Router();
const {
    getAllUsers,
    searchUsers,
    addUser,
    updateUser,
    deleteUser
} = require('../controllers/api.controller');

router.get('/users', getAllUsers);
router.get('/search', searchUsers);
router.post('/adduser', addUser);
router.patch('/updateuser/:id', updateUser);
router.delete('/deleteuser/:id', deleteUser);

module.exports=router;
