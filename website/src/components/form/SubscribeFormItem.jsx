import React from 'react'

const SubscribeFormItem = ({
  label,
  name,
  register,
  placeholder,
  errors,
  className,
}) => {
  return (
    <div className={className || ''}>
      <p className="text-1xl mt-4 text-slate-600">{label}</p>
      <input
        {...register(name)}
        placeholder={placeholder}
        className="subscribe-form-input w-full"
      />
      <p className={`h-4 text-red-700`}>{errors[name]?.message}</p>
    </div>
  )
}

export default SubscribeFormItem
