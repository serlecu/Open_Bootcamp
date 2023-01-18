import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/task_list';
import ContactCard from './components/pure/contactCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Comonente GReetings*/}
        {/* <Greeting name="Ralph"></Greeting>*/}
        {/*<GreetingF name='Ralph'></GreetingF> */}

        <ContactCard></ContactCard>
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
