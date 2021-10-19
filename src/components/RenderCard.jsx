import React from 'react'

const RenderCard = ({ student }) => {
  const date = new Date().getFullYear()
  function declOfNum(number, words) {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
    ]
  }
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
        <span>{`${student.age}(${date - student.age}${declOfNum(
          `${date - student.age}`,
          [' год', ' года', ' лет']
        )})`}</span>
      </div>
      <div>
        <span className="fw-bold">Портфолио:</span>
        <a href={student.portfolio}>{student.portfolio}</a>
      </div>
    </div>
  )
}

export default RenderCard
