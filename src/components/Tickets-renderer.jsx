import '../styles/tickets-renderer.css';
import { useEffect } from 'react';
import { format } from 'date-fns';
import turkish from '../assets/Turkish_Airlines_logo.png';

function TicketRenderer({
	tickets,
	ticketsForSorting,
	setTicketsForSorting,
	selectedStops,
	selectedCurrency,
}) {
	useEffect(() => {
		const filteredTickets = tickets.filter((ticket) => {
			if (selectedStops.includes('all')) {
				return true;
			} else {
				return selectedStops.includes(ticket.stops.toString());
			}
		});

		setTicketsForSorting(filteredTickets);
	}, [selectedStops, tickets]);

	function changeCurrency(currency, ticket) {
		if (currency === 'RUB') {
			return <span>{ticket.price}&#8381;</span>;
		} else if (currency === 'USD') {
			return <span>{(ticket.price * 0.011).toFixed(2)}&#36;</span>;
		} else {
			return <span>{(ticket.price * 0.01).toFixed(2)}&#8364;</span>;
		}
	}

	function formatDate(dateString) {
		const date = new Date(dateString);
		return format(date, 'dd MMM yyyy, EEE');
	}

	function NewTicket({ ticket }) {
		return (
			<div className="ticket-wrapper">
				<div className="ticket-left-side">
					<img
						src={turkish}
						alt="Airlines logo"
						className="airlines-img"
					/>
					<button type="button" className="buy-button">
						Купить <br></br> за{' '}
						{changeCurrency(selectedCurrency, ticket)}
					</button>
				</div>
				<div className="ticket-right-side">
					<div className="time-wrapper">
						<span className="time-span">
							{ticket.departure_time}
						</span>
						<div className="stops-indicator">
							{ticket.stops} пересадки
						</div>
						<span className="time-span">{ticket.arrival_time}</span>
					</div>
					<div className="location-date-wrapper">
						<div className="departure-data">
							<span className="location-span">
								<div className="airport-info">
									<span>{ticket.origin_name},</span>
									<span>{ticket.origin}</span>
								</div>
							</span>
							<span className="date-span">
								{formatDate(ticket.departure_date)}
							</span>
						</div>
						<div className="arrival-data">
							<span className="location-span">
								<div className="airport-info">
									<span>{ticket.destination_name},</span>
									<span>{ticket.destination}</span>
								</div>
							</span>
							<span className="date-span">
								{formatDate(ticket.arrival_date)}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="tickets-container">
			{ticketsForSorting.map((ticket, index) => (
				<NewTicket key={index} ticket={ticket} />
			))}
		</div>
	);
}

export default TicketRenderer;
