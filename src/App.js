import React, { useState } from "react";
import Toggle from "./Components/Toggle";
import PricingBox from "./Components/PricingBox";
import PricingBoxPurple from "./Components/PricingBoxPurple";
import { annually } from "./anually";
import { monthly } from "./monthly";

function App (){
    const [anualPay, setAnualPay] = useState(true);

    const handlePayment = () => {
        anualPay ? setAnualPay(false) :setAnualPay(true);
    }

    return ( 
        <div className="container" > 
            <Toggle handlePayment={handlePayment} />
            <div className="box">
                <PricingBox 
                    title={
                        anualPay ? 
                        annually[0].title
                        : monthly[0].title}
                    price={
                        anualPay ?
                        annually[0].price
                        : monthly[0].price}
                    description={
                        anualPay ?
                        annually[0].description
                        : monthly[0].description
                    } />
                <PricingBoxPurple
                    title={
                        anualPay ? 
                        annually[1].title
                        : monthly[1].title}
                    price={
                        anualPay ?
                        annually[1].price
                        : monthly[1].price}
                    description={
                        anualPay ?
                        annually[1].description
                        : monthly[1].description
                    } />
                <PricingBox 
                    title={
                        anualPay ? 
                        annually[2].title
                        : monthly[2].title}
                    price={
                        anualPay ?
                        annually[2].price
                        : monthly[2].price}
                    description={
                        anualPay ?
                        annually[2].description
                        : monthly[2].description
                    } />
            </div> 
        </div>
    )
}

export default App;