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
	dish: IDish[];
}

const menuList: IMenuList[] = [
	{
		title: 'Пиццы',
		id: 'pizzas',
		dish: [
			{
				name: 'Бэмби',
				price: '28',
				grams: '610 гр',
				description: 'Соус "Белый", ветчина, сыр, помидор, курица, кукуруза',
				img: '/img/cafe/pizza/super.webp'
			},
			{
				name: 'Феникс',
				price: '28',
				grams: '650 гр',
				description: 'Соус "Томатный", сыр, курица, грибы, перец, лук жаренный'
			},
			{
				name: 'Мститель',
				price: '26',
				grams: '600 гр',
				description: 'Соус "Томатный", сыр, кукуруза, перец, лук, помидор'
			},
			{
				name: 'Мафия',
				price: '28',
				grams: '640 гр',
				description: 'Соус "Сырный", сыр, ветчина, колбаски, огурцы, лук'
			},
			{
				name: 'Молния',
				price: '28',
				grams: '570 гр',
				description: 'Соус "Бургер", сыр, пепперони, курица, помидор, лук',
				img: '/img/cafe/pizza/чемпион.webp'
			},
			{
				name: 'Спайдер',
				price: '28',
				grams: '630 гр',
				description: 'Соус "Томатный", сыр, ветчина, пепперони, колбаски, помидор, перец',
				img: '/img/cafe/pizza/злодейка.webp'
			},
			{
				name: 'Моана',
				price: '28',
				grams: '650 гр',
				description: 'Соус "Белый", сыр, ветчина, ананасы, курица, кукуруза'
			},
			{
				name: 'Пеперониум',
				price: '26',
				grams: '545 гр',
				description: 'Соус "Томатный", сыр, пепперони'
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
				img: '/img/cafe/sets/set-1.webp',
				description: 'Три бургера и картофель фри'
			},
			{
				name: 'Сет №2',
				price: '13',
				img: '/img/cafe/sets/set-2.webp',
				description: 'Бургер и картофель фри'
			},
			{
				name: 'Сет №3',
				price: '40',
				img: '/img/cafe/sets/set-3.webp',
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
				description: 'Нежная булочка, колбаска, кетчуп, майонез',
				img: '/img/cafe/snacks/французский-хот-дог.jpg'
			},
			{
				name: 'Датский хот-дог',
				price: '7',
				grams: '150 гр',
				description: 'Открытая булочка, колбаска, огурчики "Релиш", сыр, соус "Бургер"',
				img: '/img/cafe/snacks/датский-хот-дог.jpg'
			},
			{
				name: 'Картофель фри',
				price: '5,5',
				grams: '100 гр',
				description: 'Хрустящий картофель фри с солью',
				img: '/img/cafe/snacks/картошка-фри.jpg'
			},
			{
				name: 'Наггетсы',
				price: '6,5',
				grams: '100 гр',
				description: 'Кусочки куриного филе в хрустящей панировке',
				img: '/img/cafe/snacks/нагетсы.jpg'
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
				description:
					'Пончик с яркой глазурью. Вкусы: черника, малина, тутти-фрутти, клубника, банан'
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
				grams: '300 мл',
				img: '/img/cafe/drinks/капучино-300.jpg'
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
				grams: '150 г',
				img: '/img/cafe/ice-cream/3-шарика.jpg'
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
	}
];

export default menuList;
