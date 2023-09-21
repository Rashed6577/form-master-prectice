import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from './../Uncle/Uncle';

export const AssetsContext = createContext('gold');
export const MoneyContext = createContext(1000);

const GrandPa = () => {

    const [money, setMoney] = useState(1000);

    const assets = 'Diamond';

    return (
        <div className="border-2 border-rose-600 rounded-lg w-fit text-center mx-auto p-8">
            <h2 className="text-4xl font-bold mb-10">Grandpa</h2>
            <p>Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetsContext.Provider value="gold">
                    <div className="flex justify-center gap-10 my-5">
                        <Dad assets={assets}></Dad>
                        <Uncle assets={assets}></Uncle>
                        <Aunty></Aunty>
                    </div>
                </AssetsContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;