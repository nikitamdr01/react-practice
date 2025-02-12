// const ReusableCard = () => {
//     const name="Nikita";
//     const age=20
//     return (
//         <div>
//             <h1>  Hello from {name},{age}</h1>
//         </div>
//     )
// }
// export default ReusableCard;

//props
function Card(props) {
    const { name,image,college, phone } = props;
    return (
        <div className="bg-indigo-300 h-45 w-45 rounded-2xl flex flex-col items-center justify-center p-3 relative group">
            <img className="h-50 w-52 rounded-md" src={image} />
            <h1 className="my-9"> Gojo Satoru</h1>
            <div className="bg-[rgb(0,0,0)]/[0.7] rounded-2xl p-3 absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80">
                <h1 className="text-gray-100"> {name} </h1>
                <h2 className="text-gray-100"> {college}</h2>
                <h2 className="text-gray-100">{phone} </h2>
            </div>
        </div>
    );
}
export default Card;