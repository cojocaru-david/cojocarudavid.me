---
title: "How to build a task management app with react"
slug: "how-to-build-a-task-management-app-with-react"

heroAlt: "How to Build a Task Management App with React visual cover image"
description: "Explore how to build a task management app with react in this detailed guide, offering insights, strategies, and practical tips to enhance your understanding and application of the topic."
pubDate: 2025-04-11
updatedDate: 2025-04-11
tags:
  - "build"
  - "task"
  - "management"
  - "with"
  - "react"
---

# Build Your Own Task Management App with React: A Step-by-Step Guide

Are you looking to boost your React skills while creating a practical application? Building a task management app is a fantastic project! This guide provides a clear, step-by-step walkthrough of **how to build a task management app using React**, covering essential concepts like component structure, state management with hooks, and handling user interactions.

By the end of this tutorial, you'll have a functional application allowing users to create, edit, delete, and mark tasks as complete. This project will solidify your understanding of React and give you a tangible result to showcase your abilities. Let's get started!

## What You'll Need Before You Begin

Before diving into the code, make sure you have the following:

- **Fundamental JavaScript and React Knowledge:** Familiarity with JSX, components, and props is essential.
- **Node.js and npm (or yarn) Installed:** These are required for running and managing your React project.
- **A Code Editor:** VS Code (recommended) or your preferred code editor.

## Project Setup: Creating a New React App

Let's begin by setting up a new React project using Create React App:

```bash
npx create-react-app task-manager
cd task-manager
npm start
```

These commands will:

1.  Create a new React project named "task-manager."
2.  Navigate into the project directory.
3.  Start the development server, which will automatically open your app in the browser.

Next, install the `uuid` package to generate unique IDs for our tasks:

```bash
npm install uuid
```

## Structuring Your Task Management App: Component Breakdown

We'll break down our app into three main components: `Task`, `TaskList`, and `TaskForm`. This modular approach makes the code easier to manage and understand.

### 1. The `Task` Component

The `Task` component is responsible for displaying individual task details and handling actions like deletion and completion.

```jsx
import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <h3>{task.text}</h3>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default Task;
```

- This component receives `task` data, `onDelete` (a function to delete the task), and `onToggle` (a function to toggle completion) as props.
- The `className` dynamically adds a "completed" class based on the `task.completed` status, allowing for visual styling.

### 2. The `TaskList` Component

The `TaskList` component renders a list of `Task` components.

```jsx
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
```

- This component receives the `tasks` array, `onDelete`, and `onToggle` functions as props.
- It uses the `map` function to iterate through the `tasks` array and render a `Task` component for each task. The `key` prop is crucial for React's efficient rendering.

### 3. The `TaskForm` Component

The `TaskForm` component provides a user interface for adding new tasks.

```jsx
import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
```

- This component utilizes the `useState` hook to manage the input field's value.
- The `handleSubmit` function prevents the default form submission behavior, ensures the input is not empty, and calls the `onAdd` function (passed as a prop) to add the new task. It then clears the input field.

## State Management with React Hooks in the `App` Component

The `App` component will manage the overall state of the application using the `useState` hook. This includes storing the list of tasks and handling the logic for adding, deleting, and toggling tasks.

```jsx
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: uuidv4(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
    </div>
  );
}

export default App;
```

- `useState([])` initializes the `tasks` state variable as an empty array.
- `addTask` creates a new task object with a unique ID (using `uuidv4`), the task text, and an initial `completed` status of `false`. It then updates the `tasks` state using the spread operator to create a new array.
- `deleteTask` filters the `tasks` array to remove the task with the matching ID.
- `toggleComplete` maps through the `tasks` array and updates the `completed` status of the task with the matching ID.
- Finally, the `App` component renders the `TaskForm` and `TaskList` components, passing the necessary props.

## Basic Styling with CSS

Let's add some basic CSS to style our app. Create an `index.css` file (or similar) and add the following styles:

```css
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.task {
  background: #f4f4f4;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task.completed {
  text-decoration: line-through;
  opacity: 0.7;
}

button {
  background: #333;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 5px;
}

input {
  padding: 8px;
  width: 70%;
  margin-right: 10px;
}
```

Remember to import this CSS file into your `App.js` or `index.js` file: `import './index.css';`

## Taking Your Task Manager to the Next Level (Optional Enhancements)

Once you have the basic app working, consider these enhancements:

- **Local Storage Persistence:** Use `localStorage` to save tasks and load them when the app reloads.
- **Drag and Drop Reordering:** Implement drag-and-drop functionality to allow users to reorder tasks.
- **Categories or Tags:** Add the ability to categorize tasks for better organization.
- **Due Dates and Reminders:** Include due dates and potentially integrate with a notification system.

## Conclusion: You've Built a Task Management App!

Congratulations! You've successfully built a functional task management app with React. This project has provided valuable practice in state management, component architecture, and handling user interactions. This is a great foundation for further exploration and development.

Remember, the best way to learn is by doing. Don't hesitate to experiment with the code, add new features, and explore different approaches. Happy coding!
