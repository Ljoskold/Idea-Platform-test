import { useState, useEffect } from 'react';

import './App.css';
import ConfigComponent from './components/Config-component';
import TicketRenderer from './components/Tickets-renderer';
import ticketsData from './data/tickets.json';

function App() {
	const [tickets, setTickets] = useState([]);
	const [ticketsForSorting, setTicketsForSorting] = useState([...tickets]);
	const [selectedStops, setSelectedStops] = useState(['all']);
	const [selectedCurrency, setSelectedCurrency] = useState('RUB');

	useEffect(() => {
		setTickets(ticketsData.tickets);
	}, []);

	return (
		<div className="main-container">
			<ConfigComponent
				selectedStops={selectedStops}
				setSelectedStops={setSelectedStops}
				selectedCurrency={selectedCurrency}
				setSelectedCurrency={setSelectedCurrency}
			/>
			<TicketRenderer
				tickets={tickets}
				ticketsForSorting={ticketsForSorting}
				setTicketsForSorting={setTicketsForSorting}
				selectedStops={selectedStops}
				selectedCurrency={selectedCurrency}
			/>
		</div>
	);
}

export default App;
