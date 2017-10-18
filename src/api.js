import axios from 'axios';


export default class API  {

  getAllTasks() {
    return axios.get('/api/v1/tasks')
      .then(resp => resp.data.tasks);
  }

  toggleTask(taskId) {
    return axios.put('/api/v1/tasks/toggle/' + taskId)
      .then(resp => resp.data.tasks);
  }
};

