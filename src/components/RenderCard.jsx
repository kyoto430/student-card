import React from 'react'

const RenderCard = ({ student }) => {
  return (
    <div className="article-group">
      <div>
        <span className="fw-bold">Имя:</span>
        <span>{student.name}</span>
      </div>
      <div>
        <span className="fw-bold">Фамилия:</span>
        <span>{student.surname}</span>
      </div>
      <div>
        <span className="fw-bold">Год рождения:</span>
        <span>{student.age}</span>
      </div>
      <div>
        <span className="fw-bold">Портфолио:</span>
        <a href={student.portfolio}>{student.portfolio}</a>
      </div>
    </div>
  )
}

export default RenderCard
