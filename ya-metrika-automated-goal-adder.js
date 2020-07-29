let addbtn = "BODY>:nth-child(3)>:nth-child(1)>:nth-child(2)>:nth-child(3)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(3)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(1)"
let targetname = "BODY>:nth-child(15)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)"
let jsswitsh = "BODY>:nth-child(15)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)>:nth-child(2)>:nth-child(3)>:nth-child(1)"
let targetid = "BODY>:nth-child(15)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(3)>:nth-child(3)>:nth-child(3)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2)"
let lastadd = "BODY>:nth-child(15)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)"


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
			description: "Преимущества",
			block: "Хэдер",
		},
		goal: {
			target: "anchor",
			description: "AdvantagesHeader",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(19)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Проверьте свой авто",
			block: "Хэдер",
		},
		goal: {
			target: "anchor",
			description: "CheckYourCarHeader",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(20)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Примеры",
			block: "Хэдер",
		},
		goal: {
			target: "anchor",
			description: "ExamplesHeader",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(21)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Отзывы",
			block: "Хэдер",
		},
		goal: {
			target: "anchor",
			description: "ReviewsHeader",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(22)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Контакты",
			block: "Хэдер",
		},
		goal: {
			target: "anchor",
			description: "ContactsHeader",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(23)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "FAQ",
			block: "Хэдер",
		},
		goal: {
			target: "anchor",
			description: "FAQHeader",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(24)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Номер телефона",
			block: "Хэдер",
		},
		goal: {
			target: "link",
			description: "PhoneHeader",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(18)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Узнать стоимость авто за 5 минут",
			block: "Первый экран",
		},
		goal: {
			target: "formbutton",
			description: "GetCarPriceFirstBlock",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(3)>:nth-child(2)>:nth-child(1)>:nth-child(16)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Узнать стоимость авто",
			block: "Под \"А что, если мы скажем, что деньги...\"",
		},
		goal: {
			target: "formbutton",
			description: "GetCarPriceSecondBlock",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(4)>:nth-child(2)>:nth-child(1)>:nth-child(10)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Оставить заявку на оценку авто",
			block: "Вместо этого",
		},
		goal: {
			target: "formbutton",
			description: "SubmitRequestCarPrice",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(7)>:nth-child(2)>:nth-child(1)>:nth-child(7)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Продать автомобиль за 30 минут",
			block: "Под сравнительной таблицей",
		},
		goal: {
			target: "formbutton",
			description: "SellCarFor30Min",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(15)>:nth-child(2)>:nth-child(1)>:nth-child(3)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Оставить заявку",
			block: "\"Автомобиль подходит по параметрам?\"",
		},
		goal: {
			target: "formbutton",
			description: "SubmitRequestCarFits",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(19)>:nth-child(2)>:nth-child(1)>:nth-child(6)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Оставить заявку на оценку авто",
			block: "\"Специальные условия на следующие авто\"",
		},
		goal: {
			target: "formbutton",
			description: "SubmitRequestSpecial",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(25)>:nth-child(2)>:nth-child(1)>:nth-child(3)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Карина",
			block: "Отзывы о компании",
		},
		goal: {
			target: "video",
			description: "ReviewKarina",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(28)>:nth-child(2)>:nth-child(1)>:nth-child(5)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Ильдар",
			block: "Отзывы о компании",
		},
		goal: {
			target: "video",
			description: "ReviewIldar",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(28)>:nth-child(2)>:nth-child(1)>:nth-child(8)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Юлия",
			block: "Отзывы о компании",
		},
		goal: {
			target: "video",
			description: "ReviewJulia",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(28)>:nth-child(2)>:nth-child(1)>:nth-child(11)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Светлана",
			block: "Отзывы о компании",
		},
		goal: {
			target: "video",
			description: "ReviewSvetlana",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(28)>:nth-child(2)>:nth-child(1)>:nth-child(14)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Оставить заявку",
			block: "\"Хотите также?\"",
		},
		goal: {
			target: "formbutton",
			description: "SubmitRequestWantToo",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(29)>:nth-child(2)>:nth-child(1)>:nth-child(7)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "В течении какого времени выкупаете автомобиль?",
			block: "FAQ",
		},
		goal: {
			target: "expandedfaq",
			description: "TimeOfRedeem",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(32)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Каким образом происходит расчет за автомобиль?",
			block: "FAQ",
		},
		goal: {
			target: "expandedfaq",
			description: "HowDoIPay",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(32)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Каким образом происходит оформление?",
			block: "FAQ",
		},
		goal: {
			target: "expandedfaq",
			description: "HowDoYouExecute",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(32)>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Вы выкупаете кредитные авто?",
			block: "FAQ",
		},
		goal: {
			target: "expandedfaq",
			description: "DoYouBuyCreditCar",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(32)>:nth-child(1)>:nth-child(1)>:nth-child(4)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Вы выкупаете авто после ДТП?",
			block: "FAQ",
		},
		goal: {
			target: "expandedfaq",
			description: "DoYouBuyAfterAccident",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(32)>:nth-child(1)>:nth-child(1)>:nth-child(5)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Слышал, что в Trade-In можно получить более выгодную цену",
			block: "FAQ",
		},
		goal: {
			target: "expandedfaq",
			description: "TradeIn",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(32)>:nth-child(1)>:nth-child(1)>:nth-child(6)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Я хочу подождать и продать подороже",
			block: "FAQ",
		},
		goal: {
			target: "expandedfaq",
			description: "WantToSellExpensive",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(32)>:nth-child(1)>:nth-child(1)>:nth-child(7)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Узнать стоимость авто за 10 минут",
			block: "\"Сделайте первый шаг!\"",
		},
		goal: {
			target: "formbutton",
			description: "MakeFirstStep",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(34)>:nth-child(2)>:nth-child(1)>:nth-child(7)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Выбор карты с офисом в Стерлитамаке",
			block: "Карта",
		},
		goal: {
			target: "button",
			description: "SterlitamakMap",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(36)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Выбор карты с офисом в Уфе",
			block: "Карта",
		},
		goal: {
			target: "button",
			description: "UfaMap",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(36)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Номер офиса в Уфе",
			block: "Карта",
		},
		goal: {
			target: "link",
			description: "UfaPhone",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(37)>:nth-child(2)>:nth-child(1)>:nth-child(5)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Номер офиса в Стерлитамаке",
			block: "Карта",
		},
		goal: {
			target: "link",
			description: "SterlitamakPhone",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(38)>:nth-child(2)>:nth-child(1)>:nth-child(5)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Раскрытие меню",
			block: "Меню",
		},
		goal: {
			target: "button",
			description: "OpenMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)",
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(2)",
		]
	},
	{
		human: {
			description: "Преимущества",
			block: "Меню",
		},
		goal: {
			target: "button",
			description: "AdvantagesInMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(1)",
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(1)",
		]
	},
	{
		human: {
			description: "Почему carshopping",
			block: "Меню",
		},
		goal: {
			target: "button",
			description: "WhyCarshoppingInMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(2)",
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(2)",
		]
	},
	{
		human: {
			description: "Проверьте свой авто",
			block: "Меню",
		},
		goal: {
			target: "button",
			description: "CheckYouCarInMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(3)",
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(3)",
		]
	},
	{
		human: {
			description: "Примеры выкупленных авто",
			block: "Меню",
		},
		goal: {
			target: "button",
			description: "ExamplesInMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(4)",
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(4)",
		]
	},
	{
		human: {
			description: "Отзывы",
			block: "Меню",
		},
		goal: {
			target: "button",
			description: "ReviewsInMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(5)",
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(5)",
		]
	},
	{
		human: {
			description: "Частые вопросы",
			block: "Меню",
		},
		goal: {
			target: "button",
			description: "FAQInMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(6)",
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(6)",
		]
	},
	{
		human: {
			description: "Контакты",
			block: "Меню",
		},
		goal: {
			target: "button",
			description: "ContactsInMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(7)",
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(7)",
		]
	},
	{
		human: {
			description: "Номер телефона",
			block: "Меню",
		},
		goal: {
			target: "link",
			description: "PhoneMenu",
		},
		selectors: [
			"BODY>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(1)",
			"BODY>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(2)>:nth-child(1)>:nth-child(1)",
		]
	},
]

let i = 0
const next = () => {
	let item = chase[i]
	document.querySelector(addbtn).click()
	setTimeout(() => {
		document.querySelector(jsswitsh).click()
		setTimeout(() => {
			document.querySelector(targetname).value = `${item.human.block} — ${targets[item.goal.target]}: ${item.human.description}`
			document.querySelector(targetid).value = `${item.goal.target}_${item.goal.description}`
			//document.querySelector(lastadd).click()
		}, 100)
	}, 100)

	i++
}

next()