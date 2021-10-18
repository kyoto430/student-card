import React, { useEffect, useState } from 'react'
import Field from './Field'
import { validator } from '../utils/validator'

const StudentCardForm = () => {
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({
    name: '',
    surname: '',
    age: '',
    portfolio: '',
  })
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const validatorConfig = {
    name: { isRequired: { message: 'Поле Имя обязательно для заполнения' } },
    surname: {
      isRequired: { message: 'Поле Фамилия обязательно для заполнения' },
    },
    age: {
      isRequired: { message: 'Поле Дата рождения обязательно для заполнения' },
    },
    portfolio: {
      isRequired: { message: 'Поле Портфолио обязательно для заполнения' },
    },
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }
  return (
    <div className="container">
      <h1>Создать</h1>
      <form onSubmit={handleSubmit}>
        <Field
          label="Имя"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Field
          label="Фамилия"
          type="text"
          name="surname"
          value={data.surname}
          onChange={handleChange}
          error={errors.surname}
        />
        <Field
          label="Год рождения"
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
          error={errors.age}
        />
        <Field
          label="Портфолио"
          type="text"
          name="portfolio"
          value={data.portfolio}
          onChange={handleChange}
          error={errors.portfolio}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Создать
        </button>
      </form>
    </div>
  )
}

export default StudentCardForm
