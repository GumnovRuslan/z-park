const currency = 'BYN';
let priceList = [
	{
		title: 'Посещение парка',
		line: [
      {
				name: '(Пн-Чт) Браслеты на 1 час / день ',
				price: `12 ${currency} / 16 ${currency}`,
        description: `Кроме каникул и праздников`
			},
      {
				name: '(Пт) Браслеты на 1 час / день ',
				price: `16 ${currency} / 20 ${currency}`,
        description: `Кроме каникул и праздников`
			},
			{
				name: '(Суб-Вс) Браслеты на 1 час / день ',
				price: `18 ${currency} / 26 ${currency}`,
        description: `Включая каникулы и праздники`
			},
      
		]
	},
	{
		title: 'Бронирование комнат',
		line: [
			{
				name: 'на 2 часа',
				price: 'Бесплатно',
				description: `При заказе на баре от 60 ${currency} (всё, кроме пиццы)`
			}
		]
	},
	{
		title: 'Продлени комнаты',
		line: [
      {
        name: 'Для дня рождения (ПН-ЧТ/Пт/Суб-Вс)',
        price: `40 ${currency} / 40 ${currency} / 50 ${currency}`
      },
			// {
			// 	name: 'Выходные, Праздники, каникулы',
			// 	price: `500 ${currency}`
			// }
		]
	},
	{
		title: 'Бронирование столов',
		line: [
			{
				name: 'стол до 10 человек',
				price: 'Беспланто',
				description: `При заказе на баре от 50 ${currency} (всё, кроме пиццы)`
			},
			{
				name: 'стол до 14 человек',
				price: 'Беспланто',
				description: `При заказе на баре от 60 ${currency} (всё, кроме пиццы)`
			},
			{
				name: 'будни',
				price: '-',
				description: 'Столики бронироуются в любое время'
			},
			{
				name: 'Суббота',
				price: '-',
				description: '(10:00 - 15:00) (15:30 - 20:30)'
			},
			{
				name: 'Воскресение',
				price: '-',
				description: '(10:00 - 14:30) (15:00 - 19:30)'
			}
		]
	},
	{
		title: 'Анимации',
		line: [
			{
				name: 'Вынос тортика',
				price: `25 ${currency}`,
        description: `Торт: 1 герой`
			},
			{
				name: 'Флешмоб',
				price: `35 ${currency}`,
				description:
					'Это особенный танец, где дети могут весело провести время с нашим героем. В конце танца имениннику вынесут тортик и он сможет задуть свечи, чтобы загадать свое самое заветное желание! (Время проведения ~ 15 минут)'
			},
			{
				name: 'Флешмоб + вынос тортика',
				price: `45 ${currency}`,
        description: `Торт: 1 герой, до 15 мин`
			},
      {
				name: `Шоу программы (от 30 до 40 мин)`,
				price: `140 ${currency}`,
        description: `Научное шоу / шоу мыльных пузырей / блестящая дискатека `
			},
      {
				name: 'Аниматор на выезде',
				price: `150 ${currency}`,
        description: `До 30 мин`
			},
			{
				name: 'Дополнительный герой',
				price: `20 ${currency}`
			},
      {
				name: 'Сторонняя анимация',
				price: `25 ${currency}`,
        description: `Только при бронировании комнаты`
			}
		]
	},
  {
		title: 'Фото служба',
		line: [
			{
				name: 'Фотосессия',
				price: `120 ${currency}`,
        description: `до 60 мин`
			},
			{
				name: 'Магнит маленький (1 шт)',
				price: `6 ${currency}`,
			},
      {
				name: 'Магнит большой (1 шт)',
				price: `8 ${currency}`,
			},
      {
				name: 'Фото без рамки (10Х15)',
				price: `5 ${currency}`,
			},
      {
				name: 'Фото в эл.виде без обработки',
				price: `1 ${currency}`,
			},
      {
				name: 'Фото в эл.виде с обработкой',
				price: `2.5 ${currency}`,
			},
      {
				name: 'Фото в рамке с магнитом',
				price: `15 ${currency}`,
			},
      {
				name: 'Фото в рамке с подставкой и магнитом',
				price: `12 ${currency}`,
			},
		]
	},
  {
		title: 'Аквагрим',
		line: [
			{
				name: 'Аквагрим',
				price: `от 6 ${currency}`,
			},
		]
	},
  {
		title: 'Аэрохокей',
		line: [
			{
				name: 'Одна игра',
				price: `5 ${currency}`,
			},
			{
				name: '6 игр',
				price: `25 ${currency}`,
			},
		]
	},
];

export default priceList;
