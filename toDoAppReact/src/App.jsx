import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const STORAGE_KEY = "todo_mvc_react";

const initialData = [
  { id: 1, text: "Study React", done: true },
  { id: 2, text: "Finish Capstone Project", done: true },
  { id: 3, text: "Read Your Book", done: false },
  { id: 4, text: "Take a Walk", done: false },
  { id: 5, text: "Meet with Your Friends", done: true },
  { id: 6, text: "Have fun!", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialData;
  });

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const editRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (editingId) editRef.current?.focus();
  }, [editingId]);

  const todoLeft = todos.filter((t) => !t.done).length;
  const todoDone = todos.filter((t) => t.done).length;

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.done);
    if (filter === "completed") return todos.filter((t) => t.done);
    return todos;
  }, [todos, filter]);

  function addTodo(e) {
    e.preventDefault();
    const value = newTodo.trim();
    if (!value) return;

    setTodos([{ id: Date.now(), text: value, done: false }, ...todos]);
    setNewTodo("");
  }

  function toggleAll(checked) {
    setTodos(todos.map((t) => ({ ...t, done: checked })));
  }

  function toggleTodo(id) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  function clearCompleted() {
    setTodos(todos.filter((t) => !t.done));
  }

  function startEdit(todo) {
    setEditingId(todo.id);
    setEditingText(todo.text);
  }

  function saveEdit(id) {
    const value = editingText.trim();
    if (!value) deleteTodo(id);
    else setTodos(todos.map((t) => (t.id === id ? { ...t, text: value } : t)));
    setEditingId(null);
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={addTodo}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </form>
        </header>

        {todos.length > 0 && (
          <section className="main">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={todoLeft === 0}
              onChange={(e) => toggleAll(e.target.checked)}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <ul className="todo-list">
              {filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className={`${todo.done ? "completed" : ""} ${editingId === todo.id ? "editing" : ""}`}
                >
                  {editingId === todo.id ? (
                    <input
                      ref={editRef}
                      className="edit"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onBlur={() => saveEdit(todo.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit(todo.id);
                        if (e.key === "Escape") setEditingId(null);
                      }}
                    />
                  ) : (
                    <div className="view">
                      <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodo(todo.id)}
                      />
                      <label onDoubleClick={() => startEdit(todo)}>
                        {todo.text}
                      </label>
                      <button
                        className="destroy"
                        onClick={() => deleteTodo(todo.id)}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {todos.length > 0 && (
          <footer className="footer">
            <span className="todo-count">
              {todoLeft} item{todoLeft !== 1 && "s"} left
            </span>

            <ul className="filters">
              <li>
                <a
                  className={filter === "all" ? "selected" : ""}
                  onClick={() => setFilter("all")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={filter === "active" ? "selected" : ""}
                  onClick={() => setFilter("active")}
                >
                  Active
                </a>
              </li>
              <li>
                <a
                  className={filter === "completed" ? "selected" : ""}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </a>
              </li>
            </ul>

            {todoDone > 0 && (
              <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
              </button>
            )}
          </footer>
        )}
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Part of TodoMVC</p>
      </footer>
    </>
  );
}
