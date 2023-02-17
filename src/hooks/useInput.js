import { useState } from 'react'

export function useInput(initalValue) {
  const [value, setValue] = useState(initalValue)
  function onChange(e) {
    setValue(e.currentTarget.value)
  }
  return { value, onChange }
}
