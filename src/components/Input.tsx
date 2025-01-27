import React from 'react';

interface propTypes {
  type?: 'text' | 'date'
  label: string
  textarea?: boolean
  placeholder?: string
}

const Input: React.FC<propTypes> = ({ label, textarea, ...props }) => {
  return ( <p className='flex flex-col gap-1 my-4'>
    <label className='label'>
        {label}
    </label>
    {textarea ? (
        <textarea className="input" {...props} />
      ) : (
        <input className="input" {...props} />
      )}
    </p>
  );
}

export default Input;