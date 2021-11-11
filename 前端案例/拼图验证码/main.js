let shouleMove = false
const captcha = document.querySelector('#captcha')
const handle = document.querySelector('#handle')
const button = document.querySelector('#handle span')

button.addEventListener('mousedown', (e) => {
  shouleMove = true
})

window.addEventListener('mousemove', (e) => {
  if (shouleMove) {
    // console.log('move')
    //滑动按钮与屏幕左边的距离
    const offsetLeft = handle.getBoundingClientRect().left
    //按钮的宽度
    const buttonWidth = button.getBoundingClientRect().width

    captcha.style.setProperty(
      `--moved`,
      `${e.clientX - offsetLeft - buttonWidth / 2}px`
    )
  }
})

window.addEventListener('mouseup', (e) => {
  if (shouleMove) {
    //移动的距离
    const finalOffset = e.clientX - handle.getBoundingClientRect().left

    if (finalOffset >= 430 && finalOffset <= 450) {
      captcha.classList.add('passed')
    } else {
      captcha.style.setProperty('--moved', '0px')
    }

    shouleMove = false
  }
})
