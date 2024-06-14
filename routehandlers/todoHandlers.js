
import { Router } from "express";
import todoSchema from "../schemas/todoSchema.js";
import mongoose from "mongoose";

const Todo = new mongoose.model("Todo",todoSchema);
const router = Router()

//get all the todos

router.get('/',async(req,res) => {
    res.send('ok ')
});

// get a todo by id
router.get('/:id',async(req,res) => {

});

//post a todo
router.post('/',async (req,res) => {
    const newTodo = new Todo(req.body);
   
  try {
    const savedTodo = await newTodo.save(); // Await the promise and store the saved document
    res.status(200).json({ message: 'Todo was inserted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'There was a server-side error' });
  }

});

//post multiple todo
router.post('/all',async(req,res) => {

});

//put todo
router.put('/:id',async(req,res) => {

});

//delete todo

router.delete('/:id',async(req,res) => {

});

export default router