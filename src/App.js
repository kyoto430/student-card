import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import StudentCard from './components/StudentCard'
import StudentCardForm from './components/StudentCardForm'

function App() {
  const [student, setStudent] = useState()
  const addStudent = (name, surname, age, portfolio) => {
    setStudent({
      id: 1,
      name,
      surname,
      age,
      portfolio,
    })
  }
  console.log(student)
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <StudentCard student={student} />}
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
