import Friends from "../Friends/Friends";
import Specal from "../Specal/Specal";

// eslint-disable-next-line react/prop-types
const Cousin = ({name, assets}) => {
    return (
        <div className="border-2 border-rose-600 rounded-lg p-8">
            <h2 className="text-4xl font-bold">Cousin <br /> {name}</h2>
            <div className="flex justify-center gap-10 my-5">
                { assets && <Specal assets={assets}></Specal>}
                {name === 'Labiba' && <Friends></Friends>}
            </div>
        </div>
    );
};

export default Cousin;