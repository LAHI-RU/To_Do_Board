import { useState } from 'react';
import Input from './components/Input';

function App() {

  const [taskList, setTaskList] = useState("");

  console.log(taskList);

  return (
    <div className='flex flex-col' items-center justify-center py-4>
      <h1 className='text-xl font-semibold'> 02 - To Do board </h1>

      <Input taskList = {taskList} setTaskList = {setTaskList} />

      <div>
        {taskList.map( (task,index) =>
            <li key = {index}>{task} </li>
        )}
      </div>
    </div>
  );
}

export default App;
