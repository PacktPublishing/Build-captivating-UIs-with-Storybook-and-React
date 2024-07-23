import React, { useState } from 'react';
import './button.css';

export interface ContactFormProps {
  subject?: string;
  email?: string;
  message?: string;
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export const ContactForm = ({
  subject = '',
  email = '',
  message = '',
}: ContactFormProps) => {
  const [subjectValue, setSubjectValue] = useState(subject);
  const [emailValue, setEmailValue] = useState(email);
  const [messageValue, setMessageValue] = useState(message);

  const [complete, setComplete] = useState(false );

  const handleSubmit = (event) => {
    event.preventDefault();
    setComplete(true)
    // Handle form submission logic here
    console.log('Form submitted:', { subject: subjectValue, email: emailValue, message: messageValue });

  };

  return (
    <form style={styles.form} className='storybook-button' onSubmit={handleSubmit}>
      <label htmlFor="subject" style={styles.label}>
        Subject:
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={subjectValue}
        style={styles.input}
        onChange={(event) => setSubjectValue(event.target.value)}
      />
      <label htmlFor="email" style={styles.label}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={emailValue}
        style={styles.input}
        onChange={(event) => setEmailValue(event.target.value)}
      />
      <label htmlFor="message" style={styles.label}>
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        value={messageValue}
        style={styles.textarea}
        onChange={(event) => setMessageValue(event.target.value)}
      />
      <button type="submit" style={styles.button} className='storybook-button'>
        Send
      </button>
      {complete && <p> Form submitted with Success</p>}
    </form>
  );
};
