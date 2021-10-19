import React from 'react'
import { Link } from 'react-router-dom'
import RenderCard from './RenderCard'

const StudentCard = ({ student, onDelete }) => {
  return (
    <div className="container">
      <h1>Карточка студента</h1>
      <div>
        {localStorage.length ? (
          <div>
            <RenderCard student={student} />
            <Link to="/edit">
              <button className="btn btn-primary">Редактировать</button>
            </Link>
            <Link to="/">
              <button
                className="btn btn-danger m-2"
                type="button"
                onClick={onDelete}
              >
                Удалить
              </button>
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
