export default function fakePause(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved')
    }, time)
  })
}

// credits to this    ->    https://javascript.plainenglish.io/how-to-shuffle-a-javascript-array-1357eed1680f
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
