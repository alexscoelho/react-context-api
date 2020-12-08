import logo from './logo.svg';
import './App.css';
import {ContextWrapper} from './AppContext'
import {TodoList} from './TodoList'
function App() {
  return (
    <ContextWrapper>
      <TodoList />
    </ContextWrapper>
  )
}

export default App;
