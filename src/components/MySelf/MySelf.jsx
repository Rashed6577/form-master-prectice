import Specal from "../Specal/Specal";

// eslint-disable-next-line react/prop-types
const MySelf = ({assets}) => {
    return (
        <div className="border-2 border-rose-600 rounded-lg p-8">
            <h2 className="text-4xl font-bold">My Self</h2>
            <div className="flex justify-center gap-10 my-5">
                <Specal assets={assets}></Specal>
            </div>
        </div>
    );
};

export default MySelf;