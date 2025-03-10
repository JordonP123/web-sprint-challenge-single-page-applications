import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
    .string()
    .required('must have a name bozo')
    .min(2, "name must be at least 2 characters"),

    size: yup
    .string(),

    toppingOne: yup
    .boolean(),

    toppingTwo: yup
    .boolean(),

    toppingThree: yup
    .boolean(),

    toppingFour: yup
    .boolean(),

    specialInstructions: yup
    .string()
  })

  export default schema
  