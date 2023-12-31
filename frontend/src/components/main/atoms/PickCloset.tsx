import React from "react";

const PickCloset = () => {
    return (
        <div className="flex flex-col items-center gap-y-3">
            <img src={`/images/closet3D.png`} alt="icon" className="w-1/2 min-w-[132px] hover:scale-105" />
            <div className="text-AppBody1">골라골라 옷장에서 골라</div>
        </div>
    )
}

export default PickCloset;
