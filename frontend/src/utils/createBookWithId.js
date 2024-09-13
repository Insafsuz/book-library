const createBookWithId = (book, source) => {
  return {
    ...book,
    source,
    isFavorite: false,
    id: crypto.randomUUID(),
  }
}

export default createBookWithId
