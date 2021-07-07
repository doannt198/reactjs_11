import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
      var{task,index}=this.props
        return (
            <tr>
            <th scope="row">{index}</th>
            <td>{task.name}</td>
            <td>12345678 </td>
            <td> <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                  <button type="button" className="btn btn-primary">Sửa</button>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="Second group">
                  <button type="button" className="btn btn-success">Xóa</button>
                </div></div></td>
          </tr>
        );
    }
}

export default TaskItem;