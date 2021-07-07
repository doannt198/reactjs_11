import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component { 
  render() {
      var {tasks}=this.props;
      var elmTasks=tasks.map((task , index)=>{
        return <TaskItem key={task.id} index={index} task={task}/>
      });
    return (
        <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên đăng nhập </th>
                <th scope="col">Mật khẩu </th>
                <th scope="col">Thao tác </th>
              </tr></thead>
            <tbody>
            {elmTasks}
            </tbody>
          </table>
    );
  }
}

export default TaskList;