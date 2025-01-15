export const TestEvent = () => {

    return (
        <>
            <div className="test-event">
                <div className="container">
                    <h1>Test Event</h1>
                    <div className="balance">
                        <h3>Your Attendace</h3>
                        <h4>3/8</h4>
                    </div>
                    <div className="Summary">
                        <div className="able-to-come">
                            <h4># of People coming:</h4>
                            <p>3</p>
                        </div>
                        <div className="unable-to-come">
                            <h4># of People not coming:</h4>
                            <p>5</p>
                        </div>
                    </div>
                    <form className="add-guest-response">
                        <input type="text" placeholder="Name of Guest" required />
                        <input type="number" placeholder="Amount" require />
                        <input type="radio" id="coming" value="coming" />
                        <label htmlFor="coming">Coming</label>
                        <input type="radio" id="not-coming" value="not-coming" />
                        <label htmlFor="not-coming">Not coming</label>

                        <button type="submit"> Add Guest Response</button>
                    </form>
                </div>
            </div>
            <div className="guest-responses">
                <h3>Guest Responses</h3>
            </div>
        </>
    )
}