import React, {Component} from 'react';
import './App.css';
import NewToshopForm from './NewToshopForm.jsx';
import Toshop from './Toshop.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      toshops:[
        {
          id:1,
          content: 'Broccoli',
          priority: 'Important'
        },
        {
          id:2,
          content: 'Garlic',
          priority: 'Urgent'
        },
        {
          id:3,
          content: 'Pupkim',
          priority: 'Important'
        },
        {
          id:4,
          content: 'Kumura',
          priority: 'Can wait'
        },
      ],
    }

  }

  addToshop =(data)=>{
    var newToshop = {
      id: Date.now(),
      ...data
    };
    var toshops = [newToshop,...this.state.toshops];

    this.setState({toshops})
  }
  removeToshop =(id)=>{
    var toshops = this.state.toshops;

    var filtered = toshops.filter((toshop)=>{
      return toshop.id !==id;
    });
    this.setState({
      toshops: filtered
    })
  }

  updateToshop =(id,data)=>{
    var toshops = this.state.toshops;

    var index = toshops.findIndex(function(toshop){
      return toshop.id === id;
    });

    var updatedToshop = {
      ...toshops[index],
      ...data
    };

    toshops[index] = updatedToshop;

    this.setState({toshops});

    



  }

  render(){
    return(
      <div className="container">
      <header>
          <div className="nav"> 
            <i className="fas fa-bars"></i>
            <i className="fas fa-search"></i>
          </div>
          <div className="title">Groceries</div>
          <div className="info">
            <p>A personal list</p>
            <p><span></span>todos</p>
          </div>
      </header>
      <main>
        <div className="toshops">

          {
            this.state.toshops.map((toshop) => {
              var toshopProps = {
                ...toshop,
                key:toshop.id,
                removeToshop:this.removeToshop,
                updateToshop: this.updateToshop
              };
              return(
                <Toshop {...toshopProps}/>
              )
            })
          }

          {/* Kiko, below 'this' is refer to the app, in case, any bucket have the same name addToshop. to prevent confusion. */}
          <NewToshopForm addToshop={this.addToshop}/>  
        </div>
      </main>
      <footer></footer>
    </div>


    );
  }

}

export default App;
