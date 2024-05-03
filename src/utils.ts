/**
 * Return a random integer from 1 to 10
 * other than the number id passed to it
 * 
 * @param id number
 * @returns number
 */
export const getAnotherId = (id: number): number => {
  const randomId = Math.floor(Math.random() * 10);
  if (id === randomId) {
    return getAnotherId(id);
  }
  return randomId;
};
