import { Fragment, useState } from "react";
import styled from "styled-components";
import createStore from "zustand-opine";

const taskSlice = {
  initialState: {
    tasks: [
      {
        title: "Call Mom",
        status: "incomplete",
      },
    ],
  },
  actions: {
    addTask: (set) => (title) =>
      set(({ taskSlice }) => {
        taskSlice.tasks.push({ title, status: "incomplete" });
      }),
    deleteTask: (set) => (title) =>
      set(({ taskSlice }) => {
        taskSlice.tasks = taskSlice.tasks.filter(
          (task) => task.title !== title
        );
      }),
    toggleTaskStatus: (set) => (title) =>
      set(({ taskSlice }) => {
        const task = taskSlice.tasks.find((task) => task.title === title);
        task.status = task.status === "incomplete" ? "complete" : "incomplete";
      }),
  },
};

const useStore = createStore({ taskSlice });
const { toggleTaskStatus, addTask } = useStore.actions.taskSlice;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const opineDemo = {
  steps: 0,
  component: () => {
    const tasks = useStore(({ taskSlice }) => taskSlice.tasks);
    const [titleValue, setTitleValue] = useState("");
    return (
      <>
        <h1>Opine Task List Demo</h1>
        <List>
          {tasks.map(({ title, status }) => (
            <div key={title}>
              <input
                type="checkbox"
                checked={status === "complete"}
                onChange={() => toggleTaskStatus(title)}
              />
              {title}
            </div>
          ))}
          <input
            placeholder="Title"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addTask(e.target.value);
                setTitleValue("");
              }
            }}
          />
        </List>
      </>
    );
  },
};

export default opineDemo;
