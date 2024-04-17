import '../styles/config-component.css';

function ConfigComponent({
	selectedStops,
	setSelectedStops,
	selectedCurrency,
	setSelectedCurrency,
}) {
	function handleCheckboxChange(value) {
		if (
			selectedStops.length === 0 ||
			(selectedStops.length === 1 && selectedStops.includes(value))
		) {
			setSelectedStops(['all']);
		} else if (value === 'all') {
			setSelectedStops(['all']);
		} else if (selectedStops.includes('all')) {
			setSelectedStops([value]);
		} else {
			const updatedStops = selectedStops.includes(value)
				? selectedStops.filter((item) => item !== value)
				: [...selectedStops, value];

			if (updatedStops.length === 4) {
				setSelectedStops(['all']);
			} else {
				setSelectedStops(updatedStops);
			}
		}
	}

	function handleCurrencyChange(value) {
		setSelectedCurrency(value);
	}

	function NewCurrencyButton({ text, onClick, id }) {
		const isSelected = selectedCurrency === text;
		return (
			<>
				<button
					type="button"
					onClick={onClick}
					id={id}
					className={` ${
						isSelected ? 'selected-currency-button' : ''
					}`}
				>
					{text}
				</button>
			</>
		);
	}

	function NewFilterCheckbox({ text, onChange, value, checked }) {
		return (
			<>
				<label>
					<input
						type="checkbox"
						value={value}
						checked={checked}
						onChange={onChange}
						className="checkbox"
					/>
					{text}
				</label>
			</>
		);
	}

	return (
		<div className="config-container">
			<h1>Валюта</h1>
			<div className="currency-buttons-wrapper">
				<NewCurrencyButton
					text="RUB"
					onClick={() => handleCurrencyChange('RUB')}
					id="rub-button"
				/>
				<NewCurrencyButton
					text="USD"
					onClick={() => handleCurrencyChange('USD')}
					id="usd-button"
				/>
				<NewCurrencyButton
					text="EUR"
					onClick={() => handleCurrencyChange('EUR')}
					id="eur-button"
				/>
			</div>
			<h1>Колличество пересадок</h1>
			<div className="checkboxes-wrapper">
				<NewFilterCheckbox
					text="Все"
					value={'all'}
					checked={selectedStops.includes('all')}
					onChange={() => handleCheckboxChange('all')}
				/>
				<NewFilterCheckbox
					text="Без пересадок"
					value={0}
					checked={selectedStops.includes('0')}
					onChange={() => handleCheckboxChange('0')}
				/>
				<NewFilterCheckbox
					text="1 пересадка"
					value={1}
					checked={selectedStops.includes('1')}
					onChange={() => handleCheckboxChange('1')}
				/>
				<NewFilterCheckbox
					text="2 пересадки"
					value={2}
					checked={selectedStops.includes('2')}
					onChange={() => handleCheckboxChange('2')}
				/>
				<NewFilterCheckbox
					text="3 пересадки"
					value={3}
					checked={selectedStops.includes('3')}
					onChange={() => handleCheckboxChange('3')}
				/>
			</div>
		</div>
	);
}
export default ConfigComponent;
