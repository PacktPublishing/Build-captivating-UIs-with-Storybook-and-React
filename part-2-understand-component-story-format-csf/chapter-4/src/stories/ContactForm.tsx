import React from 'react';
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
  return (
    <form style={styles.form} className='storybook-button'  >
      <label htmlFor="subject" style={styles.label}>
        Subject:
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={subject}
        style={styles.input}
      />
      <label htmlFor="email" style={styles.label}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        style={styles.input}
      />
      <label htmlFor="message" style={styles.label}>
        Message:
      </label>
      <textarea id="message" name="message" value={message} style={styles.textarea} />
      <button type="submit" style={styles.button} className='storybook-button'>
        Send
      </button>
    </form>
  );
};
