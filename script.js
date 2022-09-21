let r = document.querySelector(':root');
let red, blue, green
let timer = 0

const updateTime = () => {
  let date
  if (new Date().getMonth() < 10) {
    date = 5 + 30 - new Date().getDate()
  } else {
    date = 5 - new Date().getDate()
  }
  let hour = 24 - new Date().getHours()
  let min = 60 - new Date().getMinutes()
  let second = 60 - new Date().getSeconds()
  let milliseconds = 1000 - new Date().getMilliseconds()
  milliseconds = milliseconds.toString().slice(0,2)
  let milli = new Date().getTime()
  hour.toString().length < 2 ? hour = '0' + hour : hour = hour
  min.toString().length < 2 ? min = '0' + min : min = min
  second.toString().length < 2 ? second = '0' + second : second = second

  if(date < 0){
    document.getElementById('timer').innerHTML = "Times Up!"
  }else{
    document.getElementById('timer').innerHTML = date + ":" + hour + ":" + min + ":" + second// + ":" + milliseconds
  }
  
  red = Math.floor((Math.sin(milli/1800)+1) * 127.5).toString(16)
  blue = Math.floor((Math.cos(milli/1800)+1) * 127.5).toString(16)
  green = Math.floor((Math.sin(milli/1800 * .5)+1) * 127.5).toString(16)
  red.length < 2 ? red = '0' + red : red = red
  blue.length < 2 ? blue = '0' + blue : blue = blue
  green.length < 2 ? green = '0' + green : green = green

  r.style.setProperty('--top', '#' + red.toString(16) + blue.toString(16) + green.toString(16));

  window.requestAnimationFrame(updateTime)
}

window.requestAnimationFrame(updateTime)

