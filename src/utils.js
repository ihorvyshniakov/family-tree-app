export const getPersonFromFormEvent = (event, personId) => {
	const {
		sex,
		birthday,
		deathday,
		fullname,
		birthplace,
		deathplace,
		parents,
		partner,
		children
	} = event.target;
	const person = new Map();
	person.set('id', personId);
	person.set('sex', sex.value);
	person.set('birthday', birthday.value);
	person.set('deathday', deathday.value);
	person.set('fullname', fullname.value);
	person.set('birthplace', birthplace.value);
	person.set('deathplace', deathplace.value);
	person.set('parents', parents.value);
	person.set('partner', partner.value);
	person.set('children', children.value);

	return person;
};
