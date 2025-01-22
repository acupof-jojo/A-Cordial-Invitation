import { useGetEvents } from "../../hooks/useGetEvents";
import "./style.css";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export const Home = () => {
    const { name, profilePhoto } = useGetUserInfo();
    const { events = [], loading, error } = useGetEvents();

    return (
        <>
            <div className="test-event">
                {/* <div className="container"> */}
                    <h2>   </h2>
                    <img className="logo" src = "https://i.imgur.com/1k9FPmd.png" alt= "Logo"/>
                    <h2>Welcome Back, {name}!</h2>
                {/* </div> */}
            </div>
            <div className="events-created">
                <h3>Your Events</h3>
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
