const FAMILY_TREE_UA = [
	{
		id: 1,
		sex: 'чоловік',
		birthday: '01.07.1997',
		fullname: 'Вишняков Ігор Вʼячеславович',
		birthplace: {
			country: 'Україна',
			region: 'Чернівецька область',
			city: 'Чернівці'
		},
		parents: [3, 4],
		partner: 2
	},
	{
		id: 2,
		sex: 'жінка',
		birthday: '19.01.2001',
		fullname: 'Вишнякова Яна Василівна',
		birthplace: {
			country: 'Україна',
			region: 'Чернівецька область',
			city: 'Чернівці'
		},
		parents: [3, 4],
		partner: {
			id: 2,
			sex: 'жінка',
			birthday: '19.01.2001',
			fullname: 'Вишнякова Яна Василівна',
			birthplace: {
				country: 'Україна',
				region: 'Чернівецька область',
				city: 'Чернівці'
			}
		}
	}
];
