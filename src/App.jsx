import { useEffect, useState } from 'react';
import './App.scss';
import { getPersonFromFormEvent } from './utils';

// TODO: choose city using API?
// TODO: choose parents from existing list

const App = () => {
	const [persons, setPersons] = useState([]);
	const [personsCounter, setPersonsCounter] = useState(0);

	const addPerson = e => {
		e.preventDefault();

		const person = getPersonFromFormEvent(e, personsCounter);
		setPersonsCounter(prev => prev + 1);
		console.log(person);

		setPersons(existingPersonsList => [...existingPersonsList, person]);
	};

	useEffect(() => {
		console.log(persons);
	}, [persons]);

	return (
		<main>
			<h1>Родинне дерево</h1>
			<form onSubmit={addPerson}>
				<h2>Додати персону</h2>
				<fieldset>
					<label htmlFor='sex'>
						Оберіть стать
						<select name='sex' id='sex' required>
							<option value='male'>чоловік</option>
							<option value='female'>жінка</option>
						</select>
					</label>
					<label htmlFor='birthday'>
						Оберіть дату народження
						<input
							type='date'
							name='birthday'
							id='birthday'
							required
						/>
					</label>
					<label htmlFor='deathday'>
						Оберіть дату смерті
						<input
							type='date'
							name='deathday'
							id='deathday'
							required
						/>
					</label>
					<label htmlFor='fullname'>
						Введіть повне імʼя (ПІБ)
						<input
							type='text'
							name='fullname'
							id='fullname'
							required
						/>
					</label>
					<label htmlFor='birthplace'>
						Введіть країну, область та місто народження
						<input
							type='text'
							name='birthplace'
							id='birthplace'
							required
						/>
					</label>
					<label htmlFor='deathplace'>
						Введіть країну, область та місто смерті
						<input
							type='text'
							name='deathplace'
							id='deathplace'
							required
						/>
					</label>
					<label htmlFor='parents'>
						Оберіть батьків
						<select name='parents' id='parents' required>
							<option value='male'>чоловік</option>
							<option value='female'>жінка</option>
						</select>
					</label>
					<label htmlFor='partner'>
						Оберіть партнера(чоловік або дружина)
						<select name='partner' id='partner' required>
							<option value='1'>userId1</option>
							<option value='2'>userId2</option>
						</select>
					</label>
					<label htmlFor='children'>
						Оберіть дітей
						<select name='children' id='children' required>
							<option value='1'>userId1</option>
							<option value='2'>userId2</option>
						</select>
					</label>
					<button type='submit'>Створити</button>
				</fieldset>
			</form>
		</main>
	);
};

export default App;
