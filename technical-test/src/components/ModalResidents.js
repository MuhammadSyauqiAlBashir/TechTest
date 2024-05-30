import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Card from "./Card";
// import closeBtn from "../Assets/closeBtn.svg";

export default function ModalResidents({ Modal, toggleModal }) {
  return (
    <>
      {Modal.length > 0 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white h-5/6 w-full mx-4 px-4 rounded-xl md:w-1/2 lg:w-1/2 relative">
            <h1 className="text-center text-2xl font-bold mt-6 mb-6">Listed Residents</h1>
            <div
              onClick={() => toggleModal([])}
              className="absolute top-0 right-0 m-2 cursor-pointer"
            >
              <img
                src={
                  "https://cdn.icon-icons.com/icons2/933/PNG/512/close-button_icon-icons.com_72803.png"
                }
                alt="Close"
                className="h-8 w-8 btn-ghost"
              />
            </div>
            <div className="grid grid-cols-2 p-16 items-center justify-center h-5/6 max-md:grid-cols-1 overflow-y-scroll">
              {Modal.map((data, index) => {
                return <Card data={data} key={index} put={"location"}/>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
