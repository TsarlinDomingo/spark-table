export const getAnotherId = (id: number): number => {
  const randomId = Math.floor(Math.random() * 10);
  if (id === randomId) {
    return getAnotherId(id);
  }
  return randomId;
}