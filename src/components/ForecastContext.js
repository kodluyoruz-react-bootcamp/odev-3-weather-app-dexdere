import { useState, createContext } from 'react';
export const ForecastContext = createContext(null);

export const ForecastProvider = ({ children }) => {
	const [searchKey, setSearchKey] = useState('Balıkesir');
	const [results, setResults] = useState([]);
	const values = {
		searchKey,
		setSearchKey,
		results,
		setResults,
	};

	return <ForecastContext.Provider value={values}>{children}</ForecastContext.Provider>;
};
