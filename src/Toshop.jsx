import React, {Component} from 'react';

class Toshop extends Component{
    constructor(props){
        super(props);
        this.state ={
            updatingContent:false,
            updatingPriority:false,
            contentInput: props.content,
            priorityInput: props.priority
        }
    }

    handleToshopRemoveClick =()=>{
        var id = this.props.id;
        this.props.removeToshop(id)
    }
    handleContentDoubleClick = () =>{
        this.setState({updatingContent:true})
    }

    handlePriorityDoubleClick = () =>{
        this.setState({updatingPriority:true})
    }

    handleContentInputBlur = () =>{
        var id = this.props.id;
        var data = {
            content:this.state.contentInput
        };

        this.props.updateToshop(id,data);
        this.setState({updatingContent:false})
    }

    handlePriorityInputBlur = () =>{
        var id = this.props.id;

        var data ={
            priority:this.state.priorityInput
        };
        this.props.updateToshop(id,data);
        this.setState({updatingPriority:false})
    }

    handleContentInputChange =(e) =>{
        this.setState({contentInput:e.target.value})
    }

    handlePriorityInputChange =(e) =>{
        this.setState({priorityInput:e.target.value})
    }



    render(){
        return(
            
            <div className="item">
                <div className="itemtext" onDoubleClick ={this.handleContentDoubleClick}>
                    {this.state.updatingContent === true ? (<input onChange={this.handleContentInputChange} onBlur={this.handleContentInputBlur} type="text" className = 'content-Input'autoFocus/>
                    ): this.props.content}
               </div>

                <div className="priority" onDoubleClick={this.handlePriorityDoubleClick}>
                    {this.state.updatingPriority === true ? (<input onChange={this.handlePriorityInputChange} onBlur={this.handlePriorityInputBlur} type="text" className='priority-update' autoFocus/>): this.props.priority

                    }
                </div>
                <i onClick={this.handleToshopRemoveClick} className="fas fa-times"></i>
          </div>

        )
    }
}

export default Toshop;