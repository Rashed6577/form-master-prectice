import Cousin from "../Cousin/Cousin";

// eslint-disable-next-line react/prop-types
const Uncle = ({assets}) => {
    return (
        <div className="border-2 border-rose-600 rounded-lg p-8">
            <h2 className="text-4xl font-bold">Uncle</h2>
            <div className="flex justify-center gap-10 my-5">
                <Cousin name={'Arif'} assets={assets}></Cousin>
                <Cousin name={'Asif'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;