export function validator(data, config) {
  const errors = {}
  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        break
      case 'isLink': {
        const linkRegExp = /^\S+\:\/\/\S+\.\S+$/g
        statusValidate = !linkRegExp.test(data)
        break
      }
      case 'isDate': {
        const date = new Date()
        const year = date.getFullYear()
        statusValidate = data > year || data < 1900
        break
      }
      case 'isLetters': {
        const lettersRegExp = /^[A-zА-я]+$/g
        statusValidate = !lettersRegExp.test(data)
        break
      }
      default:
        break
    }
    if (statusValidate) return config.message
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
