import { useContext } from "react";
import { AssetsContext } from "../GrandPa/GrandPa";

// eslint-disable-next-line react/prop-types
const Specal = ({assets}) => {

    const gift = useContext(AssetsContext)

    return (
        <div className="border-2 border-rose-600 rounded-lg p-8">
            <h2 className="text-4xl font-bold">Special: </h2>
            <p className="text-2xl">has: {assets}</p>
            <p className="text-2xl">also has: {gift}</p>
        </div>
    );
};

export default Specal;