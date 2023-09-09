'use client'

import { FormService } from '@/services/FormService'

import * as yup from 'yup'

export const SubscribeForm = () => {
  const schema = yup.object({
    firstName: yup.string().required().min(8),
    lastName: yup.string().required().min(4),
    email: yup.string().email().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = FormService(schema)

  const onSubmit = (data) => console.log(data)

  return (
    <form
      className="center grid grid-cols-2 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-1 w-full">
        <input
          {...register('firstName')}
          placeholder="First Name"
          className="subscribe-form-input w-full"
        />
        <p>{errors.firstName?.message}</p>
      </div>

      <div className="col-span-1 w-full">
        <input
          {...register('lastName')}
          placeholder="Last name"
          className="subscribe-form-input w-full"
        />
        <p>{errors.lastName?.message}</p>
      </div>

      <div className="col-span-2 w-full">
        <input
          {...register('email')}
          placeholder="Email"
          className="subscribe-form-input w-full"
        />
        <p>{errors.email?.message}</p>
      </div>

      <div className="col-span-2 w-full">
        <input
          {...register('phone')}
          placeholder="Phone number - optional"
          className="subscribe-form-input w-full"
        />
        <p>{errors.phone?.message}</p>
      </div>

      <input type="submit" className="col-span-2 " />
    </form>
  )
}
