import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddEvent } from "../../hooks/useAddEvent";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";

import "./style.css";

export const CreateEvent = () => {
    const { addEvent } = useAddEvent();
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
            <div className="create-event">
                <div className="container">
                    <h1>Create Your Event</h1>
                    <div className="Event Creation">
                    </div>
                    <form className="add-event-response" onSubmit={submit}>
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name</label>
                            <input
                                type="text"
                                id="eventName"
                                placeholder="Event Name"
                                value={eventName}
                                required
                                onChange={(e) => setEventName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                placeholder="Description"
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                placeholder="Location"
                                value={location}
                                required
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="attire">Attire</label>
                            <input
                                type="text"
                                id="attire"
                                placeholder="Attire"
                                value={attire}
                                onChange={(e) => setAttire(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="theme">Theme</label>
                            <input
                                type="text"
                                id="theme"
                                placeholder="Theme"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="specialNotes">Special Notes</label>
                            <input
                                type="text"
                                id="specialNotes"
                                placeholder="Special Notes"
                                value={specialNotes}
                                onChange={(e) => setSpecialNotes(e.target.value)}
                            />
                        </div>
                        <button type="submit">Create Event</button>
                    </form>
                </div>
            </div>
        </>
    );
};
