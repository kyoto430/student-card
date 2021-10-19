import React, { useEffect, useState } from 'react'
import Field from './Field'
import { validator } from '../utils/validator'
import RenderCard from './RenderCard'

const StudentCardForm = () => {
  const [student, setStudent] = useState()
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
    name: {
      isRequired: { message: 'Поле Имя обязательно для заполнения' },
      isLetters: { message: 'Поле должно содержать буквы' },
    },
    surname: {
      isRequired: { message: 'Поле Фамилия обязательно для заполнения' },
      isLetters: { message: 'Поле должно содержать буквы' },
    },
    age: {
      isRequired: { message: 'Поле Дата рождения обязательно для заполнения' },
      isDate: {
        message: 'Поле введено не корректно',
      },
    },
    portfolio: {
      isRequired: { message: 'Поле Портфолио обязательно для заполнения' },
      isLink: {
        message: 'Поле должно содердать ссылку',
      },
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
  const isValid = Object.keys(errors).length === 0
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
    setStudent(data)
  }

  return student ? (
    <RenderCard student={student} />
  ) : (
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
        <button
          type="submit"
          className="btn btn-primary mt-2"
          disabled={!isValid}
        >
          Создать
        </button>
      </form>
    </div>
  )
}

export default StudentCardForm
