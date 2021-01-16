import { citys } from '../search/Citys';
import { useContext } from 'react';
import { ForecastContext } from './ForecastContext';

const Input = () => {
	const { setSearchKey } = useContext(ForecastContext);

	const changeHandler = (e) => {
		setSearchKey(e.target.value);
	};

	return (
		<form className="form" onChange={changeHandler}>
			{citys}
		</form>
	);
};

export default Input;
