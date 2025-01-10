import React from 'react'

const page = () => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData)

    console.log(payload)
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Contact Information</legend>

          <label>
            <input placeholder='placeholder' />
            First Name
          </label>
          <label>
            <input placeholder='placeholder' />
            Last Name
          </label>
          <label>
            <input placeholder='placeholder' />
            Email
          </label>
          <label>
            <input placeholder='placeholder' />
            Phone Number
          </label>
        </fieldset>
      </form>
    </div>
  )
}

export default page
