function Grid(){
    return(
        <div className=" grid grid-cols-5  gap-2">
        <div className="bg-primary-100  row-span-2 text-center   ">1</div>
        <div className="bg-blue-500 h-[50px] col-span-3 text-center">2</div>
        <div className="bg-yellow-500 h-[50px] text-center">3</div>
        <div className="bg-red-500  h-[50px] text-center">4</div>
        <div className="bg-blue-500 h-[50px] text-center">5</div>
        <div className="bg-primary-50 h-[50px] text-center ">6</div>
        <div className="bg-red-500  h-[50px] text-center">7</div>
        <div className="bg-blue-500 h-[50px] text-center">8</div>
        <div className="bg-yellow-500  text-center row-span-2">9</div>
        <div className="bg-red-500  h-[50px] text-center">10</div>
        <div className="bg-blue-500 h-[50px] text-center col-span-2">11</div>
        <div className="bg-yellow-500 h-[50px] text-center">12</div>
        <div className="bg-red-500  h-[50px] text-center">13</div>
        <div className="bg-blue-500 h-[50px] text-center">14</div>
        <div className="bg-yellow-500 h-[50px] text-center">15</div>
    </div>
    );
}
export default Grid;