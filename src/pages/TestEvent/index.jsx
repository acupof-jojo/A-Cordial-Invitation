import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddEvent } from "../../hooks/useAddEvent";
import { useGetEvents } from "../../hooks/useGetEvents";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";

export const TestEvent = () => {
    const { addEvent } = useAddEvent();
    const { events = [], loading, error } = useGetEvents(); // Ensure `events` is defined, and handle loading/error states.
    const navigate = useNavigate();

    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [attire, setAttire] = useState("");
    const [theme, setTheme] = useState("");
    const [specialNotes, setSpecialNotes] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        try {
            await addEvent({
                eventName,
                description,
                location,
                attire: attire || "N/A",
                theme: theme || "N/A",
                specialNotes: specialNotes || "N/A",
            });

            // Clear form fields after successful submission.
            setEventName("");
            setDescription("");
            setLocation("");
            setAttire("");
            setTheme("");
            setSpecialNotes("");
        } catch (error) {
            console.error("Error adding event:", error);
        }
    };

    const signUserOut = async () => {
        try {
          await signOut(auth);
          localStorage.clear();
          navigate("/");
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <>
            <div className="test-event">
                <div className="container">
                    <h1>Test Event Page</h1>
                    <button className="sign-out-button" onClick={signUserOut}>
                        Sign Out
                    </button>
                    <div className="Event Creation">
                        <h3>Create your event:</h3>
                    </div>
                    <form className="add-event-response" onSubmit={submit}>
                        <input
                            type="text"
                            placeholder="Event Name"
                            value={eventName}
                            required
                            onChange={(e) => setEventName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={description}
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            required
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Attire"
                            value={attire}
                            onChange={(e) => setAttire(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Theme"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Special Notes"
                            value={specialNotes}
                            onChange={(e) => setSpecialNotes(e.target.value)}
                        />
                        <button type="submit">Create Event</button>
                    </form>
                </div>
            </div>
            <div className="events-created">
                <h3>Events Created</h3>
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
                                <strong>{event.eventName}</strong>: {event.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
