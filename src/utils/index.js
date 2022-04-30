export function valueIsEmpty(value) {
  if (!value) return true;

  if (value instanceof Object && Object.keys(value) === 0) {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "string" && value === "") {
    return true;
  }

  return false;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
