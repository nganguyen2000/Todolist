import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component{
  constructor(){
    super();
    this.state ={
      todoItems:[
        {title: 'Buy Snacks', isComplete:true},
        {title: 'Go swimming', isComplete:true},
        {title:'Take a dog for a walk' }
        
      ]

    } 
  }
  onItemClicked(item){
   
    return(event)=>{
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems:[
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };

  }

  render(){
    const {todoItems} =this.state;
    if(todoItems.length){
    return (
      <div className="App">
        {
          todoItems.length && todoItems.map((item,index)=>
          <TodoItem 
            key={index} 
            item={item}
            onClick={this.onItemClicked(item)}
          />
          )
        }
          {/* <TodoItem title="Buy Snacks" />
          <TodoItem  title="Go swimming"/>
          <TodoItem  title = "Take a dog for a walk"/> */}
        {
           todoItems.length == 0 && 'Nothing Here'
        }
      </div>
    );

    

  }
}

}
export default App;

