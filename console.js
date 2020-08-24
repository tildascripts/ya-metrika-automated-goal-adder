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
  document.querySelector("BODY>:nth-child(20)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)").value = `${targets[chase[i].goal.target]}: ${chase[i].human.description}`
}