import React, {Component} from 'react';

class Toshop extends Component{
    constructor(props){
        super(props);
    }

    handleToshopRemoveClick =()=>{
        var id = this.props.id;
        this.props.removeToshop(id)

    }

    render(){
        return(
            
            <div className="item">
                <div className="itemtext">{this.props.content}</div>
                <div className="priority">{this.props.priority}</div>
                <i onClick={this.handleToshopRemoveClick} className="fas fa-times"></i>
          </div>

        )
    }
}

export default Toshop;