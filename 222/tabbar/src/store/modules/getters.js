export const getters = {
  getMore20 (state) {
    return state.students
      .filter(item => item.age >= 20)
      .reduce((prev, value) => {
        return prev + value.id
      }, 0)
  }
}
