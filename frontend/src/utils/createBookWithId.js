const createBookWithId = book => {
  return {
    ...book,
    isFavorite: false,
    id: crypto.randomUUID(),
  }
}

export default createBookWithId
