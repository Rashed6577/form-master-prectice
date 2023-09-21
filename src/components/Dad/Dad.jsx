import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

// eslint-disable-next-line react/prop-types
const Dad = ({assets}) => {
    return (
        <div className="border-2 border-rose-600 rounded-lg p-8">
            <h2 className="text-4xl font-bold">Dad</h2>
            <div className="flex justify-center gap-10 my-5">
            <MySelf assets={assets}></MySelf>
            <Brother></Brother>
            <Sister></Sister>
            </div>
        </div>
    );
};

export default Dad;