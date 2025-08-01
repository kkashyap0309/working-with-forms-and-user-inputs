import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [formData, setFormData] = useState(defaultValue);

  const [isEdited, setIsEdited] = useState(false);

  function handleOnchangeEvent(event) {
    setFormData(event.target.value);
    setIsEdited(false);
  }

  function handleInputBoxBlur() {
    setIsEdited(true);
  }

  const isValid = validationFn(formData);

  return {
    value: formData,
    isEdited,
    handleOnchangeEvent,
    handleInputBoxBlur,
    hasError: isEdited && !isValid,
  };
}
