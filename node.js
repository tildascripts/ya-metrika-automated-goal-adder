let targetNameSelector = "BODY>:nth-child(20)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)"
const robot = require("robotjs");

//открыть консоль так чтобы разрешение было 900х657

robot.setKeyboardDelay(2)

let addbtn = { x: 260, y: 400 }
let targetname = { x: 314, y: 290 }
let jsswitsh = { x: 532, y: 389 }
let targetid = { x: 407, y: 504 }
let lastadd = { x: 184, y: 590 }
let devToolsConsole = { x: 937, y: 673 }

const click = ({x, y}) => {
  robot.moveMouse(x, y)
  robot.mouseClick()
}

let targets = {
  formbutton: "Клик по кнопке с формой",
  button: "Клик по кнопке",
  link: "Клик по ссылке",
  video: "Просмотр видео",
  anchor: "Клик по якорной ссылке",
  expandedfaq: "Раскрытие вопроса"
}
let chase = [
  {
    human: {
      description: "Заказать сайт в хэдере",
    },
    goal: {
      target: "button",
      description: "order_site"
    },
    selectors: [
      "#nav221914254 a[href='#contacts']",
    ],
  },
];

let pasteTargetName = i => {
  let targets = {
    formbutton: "Клик по кнопке с формой",
    button: "Клик по кнопке",
    link: "Клик по ссылке",
    video: "Просмотр видео",
    anchor: "Клик по якорной ссылке",
    expandedfaq: "Раскрытие вопроса"
  }
  document.querySelector("BODY>:nth-child(20)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)").value = `МСК — ${targets[chase[i].goal.target]}: ${chase[i].human.description}`
}

let i = 0
const next = () => {
  let item = chase[i]
  if (!item) {
    console.log("end")
  }
  click(addbtn)
  setTimeout(() => {
    click(jsswitsh)
    setTimeout(() => {
      click(devToolsConsole)
      robot.typeString(`pasteTargetName(${i})`)
      robot.keyTap("enter")
      click(targetname)
      //robot.typeString(`МСК — ${targets[item.goal.target]}: ${item.human.description}`)
      click(targetid)
      robot.typeString(`${item.goal.target}_${item.goal.description}`)
      click(lastadd)
      i++
      setTimeout(next, 200)
    }, 100)
  }, 100)
}

setTimeout(() => {
  next()
}, 3000)