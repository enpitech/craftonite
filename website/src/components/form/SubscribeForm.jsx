'use client'

import { FormService } from '@/services/FormService'

import * as yup from 'yup'
import SubscribeFormItem from './SubscribeFormItem'

export const SubscribeForm = () => {
  const schema = yup.object({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
    email: yup.string().email().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = FormService(schema)

  const onSubmit = (data) => console.log(data)
  return (
    <div className="bg-gray round mx-auto mb-4 mt-4  max-w-lg rounded-lg border-r-2 bg-gray-200 p-4">
      <h1 className="mb-4 text-center font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Subscribe
      </h1>
      <form
        className="grid grid-cols-2 gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SubscribeFormItem
          className={'col-span-1 w-full'}
          label="First Name"
          name="firstName"
          register={register}
          placeholder="First Name"
          errors={errors}
        />

        <SubscribeFormItem
          className={'col-span-1 w-full'}
          label="Last Name"
          name="lastName"
          register={register}
          placeholder="Last Name"
          errors={errors}
        />

        <SubscribeFormItem
          className={'col-span-2 w-full'}
          label="Email address"
          name="email"
          register={register}
          placeholder="Email"
          errors={errors}
        />

        <SubscribeFormItem
          className={'col-span-2 w-full'}
          label="Phone number (optional)"
          name="phone"
          register={register}
          placeholder="Phone number - optional"
          errors={errors}
        />

        <input
          type="submit"
          className="col-span-2 mx-auto rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        />
      </form>
    </div>
  )
}
