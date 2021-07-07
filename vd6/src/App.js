import React, { Component } from 'react';
import TaskList from'./Components/TaskList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      tasks:[]

    }
  }
   
 componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
        var tasks =JSON.parse(localStorage.getItem('tasks'));
        this.setState({
            tasks : tasks
        });
    }

 }
  onGennerateData=()=>{
       var tasks=[
        {
            id: this.generateID(),
            name:'Test 1 ',
            status:true
        },
        { 
            id: this.generateID(),
            name:'Test 2 ',
            status:true
        },
        {
            id: this.generateID(),
            name:'Test 3 ',
            status:true
        }
      ];
      this.setState ({
        tasks : tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } 
    S4(){
      return Math.floor((1+Math.random())* 0x10000).toString (16).substring(1);
    }
    generateID(){
        return this.S4()+ this.S4()+ '-'+this.S4()+'-'+this.S4()+'-'+this.S4()
    }
  render() {
    var{tasks}=this.state;
    return (
      <div className="container mt-50">
      <div className="row ">
        <div className="col-lg-6">
        <form>
        <div className="form-group">
          <label>Tên đăng nhâp:</label>
          <input type="email" className="form-control"  name="txtname" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" name="txtpassword" />
        </div>
        <button type="button" className="btn btn-primary">Lưu</button>
        <button type="button" className="btn btn-danger" onClick={this.onGennerateData}>Kiểm tra </button>
      </form>
        </div>
        <div className="col-lg-6">
         <TaskList tasks={tasks}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;