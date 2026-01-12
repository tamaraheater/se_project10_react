import { useState, useCallback } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  }

  const handleReset = useCallback(() => setValues(defaultValues), []);

  return { values, handleChange, handleReset };
}
