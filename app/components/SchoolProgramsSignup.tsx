'use client';

import { FormEvent, useState } from 'react';

export default function SchoolProgramsSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="school-programs-signup school-programs-signup--thanks">
        <p>Thank you for signing up for School and Community Programs updates!</p>
      </div>
    );
  }

  return (
    <form
      className="school-programs-signup"
      onSubmit={handleSubmit}
      noValidate
    >
      <h3 className="school-programs-signup__title">
        Sign Up for School and Community Programs Updates
      </h3>
      <div className="school-programs-signup__fields">
        <div className="school-programs-signup__field">
          <label htmlFor="scp-fullname">Full Name</label>
          <input
            type="text"
            id="scp-fullname"
            name="fullname"
            placeholder="Type your name"
          />
        </div>
        <div className="school-programs-signup__field">
          <label htmlFor="scp-email">
            Email<span className="field-required"> *</span>
          </label>
          <input
            type="email"
            id="scp-email"
            name="email"
            placeholder="Type your email"
            required
          />
        </div>
        <div className="school-programs-signup__submit-wrap">
          <button type="submit" className="school-programs-signup__submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
