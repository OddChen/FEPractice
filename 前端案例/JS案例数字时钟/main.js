const HOUR = document.querySelector('.hour>span')
const MINUTE = document.querySelector('.minute>span')
const SECOND = document.querySelector('.second>span')
const TIP = document.querySelector('.tip')
// 获取时间
const getTime = () => {
  const NOWTIME = new Date()

  const HOURS = NOWTIME.getHours()
  const MINUTES = NOWTIME.getMinutes()
  const SECONDS = NOWTIME.getSeconds()

  HOUR.innerHTML = HOURS < 10 ? '0' + HOURS : HOURS
  MINUTE.innerHTML = MINUTES < 10 ? '0' + MINUTES : MINUTES
  SECOND.innerHTML = SECONDS < 10 ? '0' + SECONDS : SECONDS
}
// 设置定时器
let timer = setInterval(() => {
  getTime()
}, 1000)

// let opacity = 0
const showTips = () => {
  TIP.style.opacity = 1
  setTimeout(() => {
    TIP.style.opacity = 0
  }, 2000)
  // let tips = setInterval(() => {
  //   // opacity += 0.1
  //   TIP.style.opacity = 1
  //   setTimeout(() => {
  //     clearInterval(tips)
  //     TIP.style.opacity = 0
  //   }, 1500)
  // }, 30)
}

// 开始和暂停功能
let flag = false
const start = () => {
  if (flag) {
    TIP.innerHTML = '时钟已开启~'
    showTips()
    timer = setInterval(() => {
      getTime()
    }, 1000)
    flag = false
    // tips
  } else {
    TIP.innerHTML = '时钟已在开启状态~'
    showTips()
  }
}

const pause = () => {
  TIP.innerHTML = '时钟已暂停~'
  showTips()
  clearInterval(timer)
  flag = true
}
