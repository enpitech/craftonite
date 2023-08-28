'use client'

import { subscribeFormService } from '@/services/subscribeFormService'

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = subscribeFormService()

  const onSubmit = (data) => console.log(data)

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input {...register('fullName')} placeholder="fullName" />
      <p>{errors.fullName?.message}</p>

      <input {...register('email')} placeholder="email" />
      <p>{errors.email?.message}</p>

      <input {...register('phone', {})} placeholder="Phone number - optional" />
      <p>{errors.phone?.message}</p>

      <input type="submit" />
    </form>
  )
}
