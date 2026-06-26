import React, { useState } from 'react';

type Status = 'typing' | 'submitting' | 'success';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<Status>('typing');

  if (status === 'success') {
    return React.createElement('h1', null, 'That is right !');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In whitch city is there a bullboard that turns air into drinkable water?
      </p>
    </>
  );
}
