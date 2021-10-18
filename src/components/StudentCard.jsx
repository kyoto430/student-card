import React from 'react'
import { Link } from 'react-router-dom'

const StudentCard = () => {
  return (
    <div className="container">
      <h1>Карточка студента</h1>
      <div>
        <p>Нет данных</p>
        <Link to="/student">
          <button className="btn btn-primary">Добавить</button>
        </Link>
      </div>
    </div>
  )
}

export default StudentCard
