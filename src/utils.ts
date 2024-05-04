/**
 * Return a random id number from 1 to given max
 * other than the given id passed to it
 * 
 * @param id number
 * @returns number
 */
export const getAnotherId = (id: number, max: number): number => {
  const randomId = Math.floor(Math.random() * max);
  if (id === randomId) {
    return getAnotherId(id, max);
  }
  return randomId;
};
