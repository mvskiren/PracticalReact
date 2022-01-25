import React, { useEffect, useLayoutEffect } from "react";
export default function Modals() {

  useEffect(() => {
    console.log("useEffect is first here");
    const greenModal = document.querySelector(".Modal--lime");
    greenModal.style.transform = "translateX(-50%)";
    greenModal.style.left = "50%";
    greenModal.style.top = "0";
  });

  useLayoutEffect(() => { 
    console.log("layout is first here");
    const purpleModal = document.querySelector(".Modal--purple");
    purpleModal.style.transform = "translateX(-50%)";
    purpleModal.style.left = "50%";
    purpleModal.style.bottom = "0";
  });
  return (
    <div className="Modals">
      <div className="Modal Modal--lime">Modal--lime</div>
      <div className="Modal Modal--purple">Modal--purple</div>
      {[...Array(5000).keys()].map((idx) => {
        return <p key={idx}></p>;
      })}
    </div>
  );
}
