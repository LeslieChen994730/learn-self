export const actions = {
  UpdateInfo (context, payload) {
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit('increment', payload)
      }, 1000)
      resolve(payload)
    })
  }
}
