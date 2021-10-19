import React from 'react'
import { Link } from 'react-router-dom'
import RenderCard from './RenderCard'

const StudentCard = ({ student }) => {
  return (
    <div className="container">
      <h1>Карточка студента</h1>
      <div>
        {student ? (
          <div>
            <RenderCard student={student} />
            <Link to="/student/edit">
              <button className="btn btn-primary">Редактировать</button>
            </Link>
          </div>
        ) : (
          <div>
            <p>Нет данных</p>
            <Link to="/student">
              <button className="btn btn-primary">Добавить</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentCard
