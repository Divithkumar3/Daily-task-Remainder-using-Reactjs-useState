import React,{useState} from 'react';
import './App.css'

function Plan(){
      let [task,setTask] = useState([]);
      let [newTask,setNewTask] =useState('');
      let [newTime,setNewTime] = useState('');
      let [remainders,setRemainders]=useState([]);

      const addTask=()=>{
        setTask([...task,{task:newTask, time:newTime}]);
        setNewTask('');
        setNewTime('');
      };
      let addRemainder = (task) => {
        setRemainders([...remainders,task]);
      };

      return(
        <div className='box'>
          
          
          
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Enter your work'/><br></br><br></br>
          <input type="time" value={newTime} onChange={(e) => setNewTime(e.target.value)} placeholder='Enter work time'/><br></br><br></br>
          <button onClick={addTask}>Add Task</button>
          <div className='div'>
          <h2>Reaminder </h2>

          {task.map((task, index) => (
           <div className='answer' key={index}>You have {task.task} at {task.time}
             
           </div>
         ))}
      
        {remainders.map((remainder, index) => (
          <div key={index}>
            {remainder.task}  {remainder.time}
          </div>
        ))}
      </div>
        </div>
      )
}

export default Plan;



