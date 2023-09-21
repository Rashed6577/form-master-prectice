import { useContext } from "react";
import { AssetsContext } from "../GrandPa/GrandPa";

const Friends = () => {


    const gift = useContext(AssetsContext);



    return (

        <div className="border-2 border-rose-600 rounded-lg p-8">
            <h2 className="text-4xl font-bold">Friend</h2>
            <p className="text-2xl">has: {gift}</p>
        </div>
    );
};

export default Friends;