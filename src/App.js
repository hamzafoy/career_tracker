import './App.css';
import { FrappeGantt } from 'frappe-gantt-react';

var tasks = [
  {
	id: 'Task 1',
	name: 'Design Career Tracker',
	start: '2022-06-27',
	end: '2022-07-8',
	progress: 25,
	dependencies: 'Task 2, Task 3'
  }
];

function App() {
    

  return (

    <div className="App">

      <header className="App-header">

        <FrappeGantt
          tasks={tasks}
          //viewMode={this.state.mode}
          onClick={task => console.log(task)}
          onDateChange={(task, start, end) => console.log(task, start, end)}
          onProgressChange={(task, progress) => console.log(task, progress)}
          onTasksChange={tasks => console.log(tasks)}
        />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

    </div>

  );
}

export default App;
