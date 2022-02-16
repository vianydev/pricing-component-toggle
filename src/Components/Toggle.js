import "./Toggle.css";

const Toggle = ( { handlePayment }) => {
    return (
        <div className="toggle">
            <h2 className="toogle-h2">Our Pricing</h2>
            <div className="toggle-switch">
                <p className="toggle-text">Annually</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" onClick={handlePayment}></span>
                </label>
                <p className="toggle-text">Monthly</p>
            </div>
        </div>
    )
}

export default Toggle; 