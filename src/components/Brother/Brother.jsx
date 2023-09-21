import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Brother = () => {

    const [money] = useContext(MoneyContext);


    return (
        <div className="border-2 border-rose-600 rounded-lg p-8">
            <h2 className="text-4xl font-bold">Brother</h2>
            <p>Grandpa has: {money} tk</p>
        </div>
    );
};

export default Brother;