

import { Component } from 'react';


class SizeSetting extends Component {
  render(){
    return (
        
        <div className="card card-size">
          <div className="card-header">Size: 15px</div>
          <div className="card-body">
            <button type="button" className="btn btn-success up ">Tăng </button>
            <button type="button" className="btn btn-success">Giảm</button>
          </div>
        </div>
       
      
);
}
}

export default SizeSetting;

