import React, {Component} from 'react';

class NewToshopForm extends Component{
    constructor(props){
        super(props);
        this.state ={
          contentInput:'',
          priorityInput: ''
        }   
    }

    handleContentInputChange = (e) =>{
      this.setState({
        contentInput: e.target.value
      });
    }
    handlePriorityInputChange = (e)=>{
      this.setState({
        priorityInput:e.target.value
      })

    }

    handleToshopAddClick = (e)=>{

      e.preventDefault();

      var data = {
        content: this.state.contentInput,
        priority: this.state.priorityInput
      }
      this.props.addToshop(data);

    }
    
    render(){
        return(
            <form>
            <div className="add-item">
              <div className="form-group">
                <label htmlFor="item-name">Item</label>
                <input type="text" id="item-name" onChange={this.handleContentInputChange}/> 
              </div>
              <div className="form-group">
                <label htmlFor="item-priority">Priority</label>
                <input type="text" id="item-priority" onChange={this.handlePriorityInputChange}/> 
              </div>
            </div>
            <button type="submit" onClick = {this.handleToshopAddClick}> New</button>
          </form>
        );
    }
}

export default NewToshopForm ;