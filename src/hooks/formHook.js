import { useEffect, useState } from "react";
import { valueIsEmpty } from "../utils";

const useForm = (options) => {
  const [form, setForm] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [hasBeenInit, setHasBeenInit] = useState({});

  useEffect(() => {
    if (isFormValid()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form, isFormValid]);

  function updateForm(obj) {
    if (!form[obj.id]) {
      setHasBeenInit({ ...hasBeenInit, [obj.id]: true });
    }
    return setForm({ ...form, [obj.id]: obj.value });
  }

  function setFormInit(obj, options) {
    if (options && options.setErrors) {
      let init = {};
      Object.keys(obj).forEach((key) => (init[key] = true));

      if (options?.valid) {
        setIsValid(false);
        setHasBeenInit(init);
      } else {
        setIsValid(true);
        setHasBeenInit(init);
      }
    }

    setForm({ ...form, ...obj });
    return;
  }

  function clearForm() {
    setForm({});
    return;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function isFormValid() {
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};

      Object.keys(validations).forEach((key) => {
        const renderError = hasBeenInit[key];
        const value = form[key];
        const validation = validations[key];

        if (valueIsEmpty(renderError)) {
          valid = false;
          return;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (
          custom?.isValid &&
          !custom.isValid(value, { validations: validations[key], form })
        ) {
          valid = false;
          let message;
          if (typeof custom.message === "string") {
            message = custom.message;
          } else {
            message = custom.message(value, { validations, form });
          }
          newErrors[key] = message;
        }

        if (validation?.required && valueIsEmpty(value)) {
          valid = false;
          newErrors[key] = "This field is required";
        }

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        if (!valid) {
          setErrors(newErrors);
          return false;
        }
      });
    }
  }

  return {
    form,
    updateForm,
    setForm,
    isValid,
    errors,
    clearForm,
  };
};

export default useForm;
