// server.js
const express = require('express');
const todoRouter = require('./Router/Todo.Router');
const userRouter = require('./Router/User.Router');
const { authenticate } = require('./Middleware/Aunthication.Middleware');
const cors = require("cors")
const app = express();
app.use(express.json());

// Get all todos
app.get("/",(req,res)=>{
    res.send("Home page")
})
// app.get('/todos', async (req, res) => {
//   const todos = await prisma.todo.findMany();
//   res.json(todos);
// });

// // Add a new todo
// app.post('/todos', async (req, res) => {
//     const { title, content } = req.body;
//     try {
//       const newtodo = await prisma.todo.create({
//         data: {
//           title,
//           content,
//         }
//       });
//       res.json(newtodo);
//     } catch (error) {
//       console.error('Failed to create todo:', error);
//       res.status(500).json({ error: 'Failed to create todo' });
//     }
//   });
  

// // Update a todo
// app.put('/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   const updatedtodo = await prisma.todo.update({
//     where: {
//       id: id,
//     },
//     data: {
//       title,
//     },
//   });
//   res.json(updatedtodo);
// });

// // Delete a todo
// app.delete('/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   await prisma.todo.delete({
//     where: {
//       id: id,
//     },
//   });
//   res.json({ message: 'todo deleted successfully' });
// });
app.use(cors())

app.use("/",userRouter)

app.use(authenticate)
  app.use("/",todoRouter)
  

app.listen(7500, () => {
  console.log('Server is running on port 7500');
});
