import { useGetEvents } from "../../hooks/useGetEvents";
import "./style.css";


export const Home = () => {
    const { events = [], loading, error } = useGetEvents(); // Ensure `events` is defined, and handle loading/error states.

    return (
        <>
            <div className="test-event">
                <div className="container">
                    <h1>Home Page</h1>
                </div>
            </div>
            <div className="events-created">
                <h3>All Events</h3>
                {loading ? (
                    <p>Loading events...</p>
                ) : error ? (
                    <p>Error loading events: {error.message}</p>
                ) : events.length === 0 ? (
                    <p>No events have been created yet.</p>
                ) : (
                    <ul>
                        {events.map((event) => (
                            <li key={event.id}>
                                <h3><strong>{event.eventName}</strong><br/></h3>
                                Description: {event.description}<br/>
                                Location: {event.location}<br/> 
                                Attire: {event.attire}<br/>
                                Theme: {event.theme}<br/>
                                Special Notes: {event.specialNotes}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
