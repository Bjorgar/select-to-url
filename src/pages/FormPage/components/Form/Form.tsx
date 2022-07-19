import { ChangeEvent, useState } from 'react';

import Button from '../Button';
import { FORM_FIELDS } from './constants';
import { form, input } from './Form.css';
import { Values } from './types';

export default function Form(): JSX.Element {
  const [inputValues, setInputValues] = useState<Values>({
    name: '',
    email: '',
    phone: '',
  });

  const changeHandler = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <form
      className={form}
    >
      {
        FORM_FIELDS.map(({ id, name, label }) => (
          <input
            onChange={changeHandler}
            className={input}
            key={id}
            id={id}
            name={name}
            placeholder={label}
            value={inputValues[name] || ''}
          />
        ))
      }
      <Button variant="blue">
        Send
      </Button>
    </form>
  );
}
