import "./PricingBox.css";

const PricingBox = ({ title, price, description }) => {
    return (
        <div className="container-price">
            <div className="box-price">
                <h3 className="title-list">{ title }</h3>
                <p className="price">
                    <span className="price-simbol">$</span>{ price }
                </p>

                { description.map(data => 
                    (<p key={data} className="list-element">{data}</p>)
                )}

                <hr className="hr-element"></hr>
                
                <button>LEARN MORE</button>
            </div>
        </div>     
    )
}

export default PricingBox;