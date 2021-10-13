const bt = document.querySelector('#bt') as HTMLButtonElement

bt.addEventListener('click', (e: Event) => {
  e.preventDefault()
  const body = document.querySelector('body')!
  body.insertAdjacentHTML('beforeend', '<h2>向军老师</h2>')
})
