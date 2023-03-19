import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState('');
  const [allentry, setAllentry] = useState([]);

  const submitTodo = (e) => {
    e.preventDefault();
    if (todo) {
      setAllentry([...allentry, todo]); //spreaded the array and appended the object
      console.log(setAllentry)
      setTodo("");
    } else {
      alert("Enter the to do.");
    }
  };
  const removeTodo = (i) => {
    const updatedTodoList = allentry.filter((curElem, id) => {
      return i !== id;
    });
    setAllentry(updatedTodoList);
  };

  const strikeTodo = (i) => {
    const ToStrikeElement = document.getElementsByClassName("todoElem")[i];
    ToStrikeElement.classList.toggle("strike-through");
  };

  return (
    <>
      <div className="todo">
        <div className="header">ToDo App</div>
        <div className="todospace">
          <div className="tododiv">
            <form className="form" onSubmit={submitTodo}>
              <span className="AddTodo">
                <u>Add Todo</u> :{" "}
              </span>
              <input
                className="input"
                placeholder="Add your Todos here:"
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
              <button className="button" type="submit">+</button>
            </form>
            <div className="todolist">
              {allentry.map((curElem, i) => {
                return (
                  <div className="todoObject" key={i}>
                    <span>{i + 1}</span>
                    <p className="todoElem">{curElem}</p>
                    <button type="button" className="strike" onClick={() => { strikeTodo(i) }}>TODO</button>
                    <i className="fa-solid fa-trash-can" onClick={() => { removeTodo(i) }}></i>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="calendarspace">
            <div className="calendarheader"><u>Calendar</u></div>
            <div className="calendardiv">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
