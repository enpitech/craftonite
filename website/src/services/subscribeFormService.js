import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const subscribeFormService = () => {
  const schema = yup.object({
    fullName: yup.string().required().min(4),
    email: yup.string().email().required(),
  })

  const formMethods = useForm({
    resolver: yupResolver(schema),
  })

  return formMethods
}
