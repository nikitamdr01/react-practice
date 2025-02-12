function Card() {
    return (
        <div className="bg-indigo-300 h-45 w-45 rounded-2xl flex flex-col items-center justify-center p-3 relative group">
            <img className="h-52 w-52 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Cq55u84JVRZSF_KKGxQ85qH1W3INww3NWw&s" />
            <h1 className="my-9"> Gojo Satoru</h1>
            <div className="bg-[rgb(0,0,0)]/[0.7] rounded-2xl p-3 absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80">
                <h1 className="text-gray-100"> Gojo Satoru</h1>
                <h2 className="text-gray-100"> Jujutsu High School</h2>
                <h2 className="text-gray-100">9840369932 </h2>
            </div>
        </div>
    );
}
export default Card;