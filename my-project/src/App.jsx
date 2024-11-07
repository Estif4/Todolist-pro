import React, { useState } from 'react';
import './App.css';
import Aside from './Aside';
import DefaultDisplay from './DefaultDisplay';
import InputForm from './InputForm';
import DisplayProject from './DisplayProject';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [Title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [activePage, setActivepage] = useState('DefaultPage');
  const [projectStorage, setProjectStorage] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState();
  const [Task, setTask] = useState([]);

  function storeprojet() {
    const newProject = {
      id: uuidv4(),
      title: Title,
      description: description,
      date: date,
      task: []
    };
    setProjectStorage((prev) => [newProject, ...prev]);
    setSelectedProjectId(newProject.id);
  }

  function PageSwitcher(pageName) {
    setActivepage(pageName);
  }

  function deleteproject(idtodelete) {
    console.log(idtodelete);
    const result = prompt('Are you sure to Delete? once you Delete the project you can not get it back');
    if (result === '') {
      const updatedprojectStorage = projectStorage.filter((item) => item.id !== idtodelete);
      setProjectStorage(updatedprojectStorage);
    }
  }

  function projectswitcher(unid) {
    console.log("Looking for project with id:", unid);
    const project = projectStorage.find((item) => item.id === unid);
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setDate(project.date);
      setSelectedProjectId(project.id);
      setActivepage('DisplayProjectPage');
    } else {
      console.log("Project not found");
    }
  }

  function inputHandler(event) {
    const inputValue = event.target.value;
    const inputId = event.target.id;

    if (inputId === 'title') {
      setTitle(inputValue);
    } else if (inputId === 'description') {
      setDescription(inputValue);
    } else if (inputId === 'date') {
      setDate(inputValue);
    }
  }

  return (
    <div className="flex flex-row">
      <Aside PageSwitcher={PageSwitcher} projectStorage={projectStorage} projectswitcher={projectswitcher} />
      {activePage === 'DefaultPage' && <DefaultDisplay />}
      {activePage === 'InputForm' && (
        <InputForm
          PageSwitcher={PageSwitcher}
          inputHandler={inputHandler}
          setActivepage={setActivepage}
          storeprojet={storeprojet}
        />
      )}
      {activePage === 'DisplayProjectPage' && (
        <DisplayProject
          setActivepage={setActivepage}
          deleteproject={deleteproject}
          id={selectedProjectId}
          Title={Title}
          description={description}
          date={date}
          Task={Task}
          setTask={setTask}
          projectStorage={projectStorage}
          setProjectStorage={setProjectStorage}
        />
      )}
    </div>
  );
}

export default App;
