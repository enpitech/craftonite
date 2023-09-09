import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export const FormService = (schema) => {

  const subscribeFormMethods = useForm({
    resolver: yupResolver(schema),
  })

  return subscribeFormMethods
}
