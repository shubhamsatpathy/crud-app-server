import express from 'express';
import addUser, { getUsers,getUser,editUser,deleteUser }  from '../Controller/user-controller.js'

const Routes=express.Router();

Routes.post('/add',addUser)
Routes.get('/view',getUsers)
Routes.get('/:id',getUser)
Routes.post('/:id',editUser)
Routes.delete('/:id',deleteUser)

export default Routes