import React from 'react'

const RenderCard = ({ student }) => {
  return (
    <div className="article-group">
      <div>{student.name}</div>
    </div>
  )
}

export default RenderCard
