interface IDish {
	name: string;
	price: string;
	grams?: string;
	description?: string;
	img?: string;
}

interface IMenuList {
	title: string;
	id: string;
	dish: IDish[]
}

const menuList: IMenuList[] = [
	{
		title: 'Пиццы',
		id: 'pizzas',
		dish: [
			{
				name: 'Super',
				price: '22',
				grams: '600 гр',
				description: 'Кукуруза, помидоры, ветчина, курица, сыр, белый соус',
				img: 'pizza-1'
			},
			{
				name: 'Злодейская',
				price: '22',
				grams: '620 гр',
				description:
					'Ветчина, охотничьи колбаски, пепперони, помидор, сладкий перец, сыр, томатный соус',
				img: 'pizza-2'
			},
			{
				name: 'Чемпион',
				price: '22',
				grams: '590 гр',
				description: 'Пепперони, курица, помидоры, лук, сыр, бургер-соус',
				img: 'pizza-3'
			},
			{
				name: '4-героя',
				price: '22',
				grams: '550 гр',
				description: 'Ветчина, охотничьи колбаски, соленый огурец, лук, сыр, сырный соус',
				img: 'pizza-4'
			},
			{
				name: 'Марио',
				price: '22',
				grams: '600 гр',
				description: 'Грибы, лук, болгарский перец, сыр, томатный соус',
				// img: 'pizza-4'
			},
			{
				name: 'Лило и стич',
				price: '22',
				grams: '600 гр',
				description: 'Курица, ветчина, ананасы консервированные, сыр, томатный соус'
			},
			{
				name: 'Сплинтер',
				price: '22',
				grams: '600 гр',
				description: 'Сладкий перец, лук, помидоры, кукуруза, сыр, томатный соус)'
			}
		]
	},
		{
		title: 'Сеты',
		id: 'sets',
		dish: [
			{
				name: 'Сет №1',
				price: '29',
				img: 'set-1',
				description: 'Три бургера и картофель фри'
			},
			{
				name: 'Сет №2',
				price: '13',
				img: 'set-2',
				description: 'Бургер и картофель фри'
			},
			{
				name: 'Сет №3',
				price: '40',
				img: 'set-3',
				description: 'Три порции картофеля фри, три порции наггетсов, три охотничьи колбаски'
			}
		]
	},
	{
		title: 'Закуски',
		id: 'snacks',
		dish: [
			{
				name: 'Французский хот-дог',
				price: '6',
				grams: '135 гр',
				description: 'Нежная булочка, колбаска, кетчуп, майонез'
			},
			{
				name: 'Датский хот-дог',
				price: '7',
				grams: '150 гр',
				description: 'Открытая булочка, колбаска, огурчики "Релиш", сыр, соус "Бургер"'
			},
			{
				name: 'Картофель фри',
				price: '5,5',
				grams: '100 гр'
			},
			{
				name: 'Наггетсы',
				price: '6,5',
				grams: '100 гр'
			},
			{
				name: 'Бургер',
				price: '9,5',
				grams: '190 гр',
				description:
					'Сочная куриная котлета, соленые огурчики, соус "Бургер" и сыр укутанный в нежную булочку с кунжутом'
			},
			{
				name: 'Колбаска',
				price: '3',
				grams: '75 гр',
				description: 'Хорошенько прожаренная во фритюре колбаска из говядины'
			},
			{
				name: 'Сырники',
				price: '6.5',
				grams: '120 гр',
				description: 'Пара вкусных обжаренных до золотистой корочки сырников'
			},
			{
				name: 'Пончик',
				price: '4,5',
				grams: '60 гр',
				description: 'Пончик с яркой глазурью. Вкусы: черника, малина, тутти-фрутти, клубника, банан'
			}
		]
	},
		{
		title: 'Горячие напитки',
		id: 'hot-drinks',
		dish: [
			{
				name: 'Американо',
				price: '5,5',
				grams: '200 мл'
			},
			{
				name: 'Двойной американо',
				price: '8',
				grams: '200 мл'
			},
			{
				name: 'Эспрессо',
				price: '4',
				grams: '30 мл'
			},
			{
				name: 'Капучино',
				price: '6',
				grams: '250 мл'
			},
			{
				name: 'Капучино',
				price: '7,5',
				grams: '300 мл'
			},
			{
				name: 'Латте',
				price: '8',
				grams: '350 мл'
			},
			{
				name: 'Флет уайт',
				price: '8',
				grams: '300 мл'
			},
			{
				name: 'Раф',
				price: '8',
				grams: '300 мл'
			},
			{
				name: 'Глясе',
				price: '8',
				grams: '300 мл'
			},
			{
				name: 'Горячий шоколад',
				price: '6',
				grams: '200 мл'
			},
			{
				name: 'Чай',
				price: '2'
			}
		]
	},
	{
		title: 'Мороженое',
		id: 'iceCream',
		dish: [
			{
				name: '1 шарик',
				price: '3',
				grams: '50 г'
			},
			{
				name: '2 шарика',
				price: '5',
				grams: '100 г'
			},
			{
				name: '3 шарика',
				price: '7',
				grams: '150 г'
			},
			{
				name: 'Рожок, топинг (шоколад, сироп, мармелад и др)',
				price: '1,5'
			},
			{
				name: 'Молочный коктейль',
				price: '7',
				description: '1 шарик мороженого, молоко и сироп на выбор'
			}
		]
	},
];

export default menuList;
