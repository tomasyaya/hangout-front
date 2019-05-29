
export const checkEmptyFields = (fields) => {
  let hasEmptyField = false;
  fields.forEach(field => {
    if(field.length === 0) {
      hasEmptyField = true
    }
  })
  return hasEmptyField
}