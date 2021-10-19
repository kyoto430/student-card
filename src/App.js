import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import StudentCard from './components/StudentCard'
import StudentCardForm from './components/StudentCardForm'

function App() {
  const [student, setStudent] = useState()
  const addStudent = (name, surname, age, portfolio) => {
    setStudent(
      localStorage.setItem('name', name),
      localStorage.setItem('surname', surname),
      localStorage.setItem('age', age),
      localStorage.setItem('portfolio', portfolio)
    )
  }

  if (!student) {
    setStudent({
      name: localStorage.getItem('name'),
      surname: localStorage.getItem('surname'),
      age: localStorage.getItem('age'),
      portfolio: localStorage.getItem('portfolio'),
    })
  }

  const handleDelete = () => {
    localStorage.clear()
  }

  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <StudentCard student={student} onDelete={handleDelete} />
          )}
        />
        <Route
          path="/student/edit"
          render={(props) => (
            <StudentCardForm student={student} onAdd={addStudent} />
          )}
        />
        <Route
          path="/student"
          render={(props) => <StudentCardForm onAdd={addStudent} />}
        />
      </Switch>
    </>
  )
}

export default App
