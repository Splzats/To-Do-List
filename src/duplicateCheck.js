export function dupCheck(array, test) {
  let result = undefined;
  if (array.length > 0) {
    array.forEach((item) => {
      if (item.id === test) {
        result = 1;
      }
    });
  }
  return result;
}
