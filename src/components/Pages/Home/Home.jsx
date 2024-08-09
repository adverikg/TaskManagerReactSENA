
import React, { useContext } from "react";
import { Header } from "../../Layouts/Header/Header";
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks";
import { Main } from "../../Layouts/Main/Main";
import { NewTask } from "../../NewTask/NewTask";
import { taskContext } from "../../Context/Context";
import { ItemTask } from "../../ItemTask/ItemTask";
import { FilterTasks } from "../../FilterTasks/FilterTasks";

export const Home = () => {
  const { filteredTasks } = useContext(taskContext);

  return (
    <>
      <Header>
        <h1>Task Manager</h1>
        <h2>Welcome to the task manager</h2>
      </Header>
      <Main>
        <NewTask />
        <FilterTasks />
        <ContainerTasks>
          {filteredTasks.map((task) => (
            <ItemTask
              idTask={task.id}
              key={task.id}
              titleTask={task.title}
              content={task.description}
            />
          ))}
        </ContainerTasks>
      </Main>
    </>
  );
};
