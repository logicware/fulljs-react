import express from 'express';

const router = express.Router();

const data = [
  {
    _id: 1,
    name: 'Groceries',
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: null
  },
  {
    _id: 2,
    name: 'Laundry',
    isDone: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: new Date()
  },
  {
    _id: 3,
    name: 'Get Petrol',
    isDone: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    completedAt: null
  }
];

router.get('/home', (req, res) => {
  res.status(200).json({ status: 200, message: 'Hello World!'});
});

router.get('/tasks', (req, res) => {
  console.log('/tasks');
  res.status(200).json({ status: 200, tasks: data });
});

router.put('/tasks/toggle/:taskId', (req, res) => {
  console.log('/tasks/toggle/' + req.params.taskId);

  data.forEach((todo) => {
    if (todo._id === parseInt(req.params.taskId)) {
      todo.isDone = !todo.isDone;
    }
  });

  res.status(200).json({ status: 200, tasks: data });
});

export default router;