import './App.css';
import Input from './components/Input';
import { ForecastProvider } from './components/ForecastContext';
import Forecast from './components/Forecast';

function App() {
	return (
		<div className="App">
			<h1>WEATHER FORECAST</h1>

			<ForecastProvider>
				<Input />
				<Forecast />
			</ForecastProvider>
		</div>
	);
}

export default App;
