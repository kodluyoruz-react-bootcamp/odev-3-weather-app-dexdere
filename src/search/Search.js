import axios from 'axios';

const apiKey = '51811f3d3ebe4ec7b3b7f18b8390343b';
const base = 'https://api.weatherbit.io/v2.0/forecast/daily?city=';

export const search = async (searchKey) => {
	try {
		const response = await axios.get(`${base}${searchKey}&days=7&key=${apiKey}`);
		const forecasts = response.data.data.map((forecast) => {
			const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			const d = new Date(forecast.datetime);
			const date = days[d.getDay()];

			return {
				maxTemp: forecast.app_max_temp,
				minTemp: forecast.app_min_temp,
				dateTime: date,
				iconCode: forecast.weather.icon,
			};
		});
		return forecasts;
	} catch (e) {
		console.log(e);
	}
};
