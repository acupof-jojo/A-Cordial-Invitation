import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddEvent } from "../../hooks/useAddEvent";
import { useGetEvents } from "../../hooks/useGetEvents";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";

export const Home = () => {
    const { events = [], loading, error } = useGetEvents(); // Ensure `events` is defined, and handle loading/error states.
    const navigate = useNavigate();

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
                    <h1>Home Page</h1>
                    <button className="sign-out-button" onClick={signUserOut}>
                        Sign Out
                    </button>
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
                                <strong>{event.eventName}</strong>: {event.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
