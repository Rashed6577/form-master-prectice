import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {


    const [money, setMoney] = useContext(MoneyContext)


    return (
        <div className="border-2 border-rose-600 rounded-lg p-8">
            <h2 className="text-4xl font-bold">Aunty</h2>
            <div className="flex justify-center gap-10 my-5">
            <Cousin name={'Mijbah'}></Cousin>
            <Cousin name={'Labiba'}></Cousin>
            </div>

            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)} className="bg-blue-500 text-white p-3 rounded-2xl mt-5">Add 1000</button>

        </div>
    );
};

export default Aunty;