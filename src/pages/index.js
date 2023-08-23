import React, { useState, useEffect, useRef } from "react";
import TooltipItem from "@/components/Tooltip";
import Modal from "@/components/Modal";

export default function Home(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const [receivedData, setReceivedData] = useState(null);
  const [textLength, setTextLength] = useState(0);
  const defaultText = "Tooltip text goes here";

  useEffect(() => {
    setTextLength(defaultText.length * 5);
  }, [defaultText]);

  //USING USEREF TO STORE THE PREVIOUS STATE OF THE TOOLTIP UPON CHANGING THE STATE OF ANOTHER BUTTON IF THER IS NO USEREF HERE ON CHANGING ANOTHER BUTTONS STATE IT WILL REVERT ALL THE OTHER BUTTONS TO DEFAULT STATE

  const prevButtonData = useRef({
    Button1: null,
    Button2: null,
    Button3: null,
    Button4: null,
    Button5: null,
  });

  //GETTING THE DATA FROM THE MODAL JS FILE

  const getData = (data) => {
    setReceivedData(data);
    console.log(receivedData);
    if (data.targetElement) {
      prevButtonData.current[data.targetElement] = data;
    }
  };

  //EVERY BUTTON HAS THE SAME STRUCTURE SO YOU CAN VIEW ANY ONE BUTTON'S CODE TO UNDERSTAND WHATS GOING ON, EVERYWHERE YOU SEE PREVBUTTONDATA , IT MEANS USE REF IS IN ACTION

  return (
    <React.Fragment>
      {/* changes */}
      <div className="h-full min-h-screen bg-slate-200 font-MainFont">
        <div className=" flex flex-col justify-between min-h-screen p-2">
          <div className="flex flex-row justify-between ">
            {/* START OF 1ST BUTTON */}
            <TooltipItem
              tooltipWidth={
                receivedData && receivedData.targetElement === "Button1"
                  ? parseInt(receivedData.tooltipWidth)
                  : prevButtonData.current["Button1"]
                  ? parseInt(prevButtonData.current["Button1"].tooltipWidth)
                  : textLength
              }
              cornerRadius={
                receivedData && receivedData.targetElement === "Button1"
                  ? parseInt(receivedData.cornerRadius)
                  : prevButtonData.current["Button1"]
                  ? parseInt(prevButtonData.current["Button1"].cornerRadius)
                  : 4
              }
              textSize={
                receivedData && receivedData.targetElement === "Button1"
                  ? parseInt(receivedData.textSize)
                  : prevButtonData.current["Button1"]
                  ? parseInt(prevButtonData.current["Button1"].textSize)
                  : 10 //DEFAULT VALUE
              }
              padding={
                receivedData && receivedData.targetElement === "Button1"
                  ? parseInt(receivedData.padding)
                  : prevButtonData.current["Button1"]
                  ? parseInt(prevButtonData.current["Button1"].padding)
                  : 8 //DEFAULT VALUE
              }
              textColour={
                receivedData && receivedData.targetElement === "Button1"
                  ? receivedData.textColour
                  : prevButtonData.current["Button1"]
                  ? prevButtonData.current["Button1"].textColour
                  : "white" //DEFAULT VALUE
              }
              backgroundColour={
                receivedData && receivedData.targetElement === "Button1"
                  ? receivedData.backgroundColour
                  : prevButtonData.current["Button1"]
                  ? prevButtonData.current["Button1"].backgroundColour
                  : "black" //DEFAULT VALUE
              }
              position="right"
              tooltipsText={
                receivedData && receivedData.targetElement === "Button1"
                  ? receivedData.tooltipText
                  : prevButtonData.current["Button1"]
                  ? prevButtonData.current["Button1"].tooltipText
                  : "Tooltip text goes here" //DEFAULT VALUE
              }
              buttonId="Button1"
            >
              <button
                className="bg-white text-black rounded-md p-2 font-semibold w-36"
                onClick={() => {
                  setShowModal(true);
                  setSelectedButton("Button1");
                  setToggled(false);
                }}
              >
                Button 1
              </button>
            </TooltipItem>

            {/* END OF 1ST BUTTON */}

            <TooltipItem
              tooltipWidth={
                receivedData && receivedData.targetElement === "Button2"
                  ? parseInt(receivedData.tooltipWidth)
                  : prevButtonData.current["Button2"]
                  ? parseInt(prevButtonData.current["Button2"].tooltipWidth)
                  : textLength
              }
              cornerRadius={
                receivedData && receivedData.targetElement === "Button2"
                  ? parseInt(receivedData.cornerRadius)
                  : prevButtonData.current["Button2"]
                  ? parseInt(prevButtonData.current["Button2"].cornerRadius)
                  : 4
              }
              textSize={
                receivedData && receivedData.targetElement === "Button2"
                  ? parseInt(receivedData.textSize)
                  : prevButtonData.current["Button2"]
                  ? parseInt(prevButtonData.current["Button2"].textSize)
                  : 10
              }
              padding={
                receivedData && receivedData.targetElement === "Button2"
                  ? parseInt(receivedData.padding)
                  : prevButtonData.current["Button2"]
                  ? parseInt(prevButtonData.current["Button2"].padding)
                  : 8 //DEFAULT VALUE
              }
              textColour={
                receivedData && receivedData.targetElement === "Button2"
                  ? receivedData.textColour
                  : prevButtonData.current["Button2"]
                  ? prevButtonData.current["Button2"].textColour
                  : "white"
              }
              position="left"
              backgroundColour={
                receivedData && receivedData.targetElement === "Button2"
                  ? receivedData.backgroundColour
                  : prevButtonData.current["Button2"]
                  ? prevButtonData.current["Button2"].backgroundColour
                  : "black" //DEFAULT VALUE
              }
              tooltipsText={
                receivedData && receivedData.targetElement === "Button2"
                  ? receivedData.tooltipText
                  : prevButtonData.current["Button2"]
                  ? prevButtonData.current["Button2"].tooltipText
                  : "Tooltip text goes here"
              }
              buttonId="Button2"
            >
              <button
                className="bg-white text-black rounded-md p-2 font-semibold w-36"
                onClick={() => {
                  setShowModal(true);
                  setSelectedButton("Button2");
                  setToggled(false);
                }}
              >
                Button 2
              </button>
            </TooltipItem>
          </div>{" "}
          <div className="flex flex-row justify-center">
            <TooltipItem
              tooltipWidth={
                receivedData && receivedData.targetElement === "Button3"
                  ? parseInt(receivedData.tooltipWidth)
                  : prevButtonData.current["Button3"]
                  ? parseInt(prevButtonData.current["Button3"].tooltipWidth)
                  : textLength
              }
              cornerRadius={
                receivedData && receivedData.targetElement === "Button3"
                  ? parseInt(receivedData.cornerRadius)
                  : prevButtonData.current["Button3"]
                  ? parseInt(prevButtonData.current["Button3"].cornerRadius)
                  : 4
              }
              textSize={
                receivedData && receivedData.targetElement === "Button3"
                  ? parseInt(receivedData.textSize)
                  : prevButtonData.current["Button3"]
                  ? parseInt(prevButtonData.current["Button3"].textSize)
                  : 10
              }
              padding={
                receivedData && receivedData.targetElement === "Button3"
                  ? parseInt(receivedData.padding)
                  : prevButtonData.current["Button3"]
                  ? parseInt(prevButtonData.current["Button3"].padding)
                  : 8 //DEFAULT VALUE
              }
              textColour={
                receivedData && receivedData.targetElement === "Button3"
                  ? receivedData.textColour
                  : prevButtonData.current["Button3"]
                  ? prevButtonData.current["Button3"].textColour
                  : "white"
              }
              position="bottom"
              backgroundColour={
                receivedData && receivedData.targetElement === "Button3"
                  ? receivedData.backgroundColour
                  : prevButtonData.current["Button3"]
                  ? prevButtonData.current["Button3"].backgroundColour
                  : "black" //DEFAULT VALUE
              }
              tooltipsText={
                receivedData && receivedData.targetElement === "Button3"
                  ? receivedData.tooltipText
                  : prevButtonData.current["Button3"]
                  ? prevButtonData.current["Button3"].tooltipText
                  : "Tooltip text goes here"
              }
              buttonId="Button3"
            >
              <button
                className="bg-white text-black rounded-md p-2 font-semibold w-36"
                onClick={() => {
                  setShowModal(true);
                  setSelectedButton("Button3");
                  setToggled(false);
                }}
              >
                Button 3
              </button>
            </TooltipItem>
          </div>{" "}
          <div className="flex flex-row justify-between ">
            <TooltipItem
              tooltipWidth={
                receivedData && receivedData.targetElement === "Button4"
                  ? parseInt(receivedData.tooltipWidth)
                  : prevButtonData.current["Button4"]
                  ? parseInt(prevButtonData.current["Button4"].tooltipWidth)
                  : textLength
              }
              cornerRadius={
                receivedData && receivedData.targetElement === "Button4"
                  ? parseInt(receivedData.cornerRadius)
                  : prevButtonData.current["Button4"]
                  ? parseInt(prevButtonData.current["Button4"].cornerRadius)
                  : 4
              }
              textSize={
                receivedData && receivedData.targetElement === "Button4"
                  ? parseInt(receivedData.textSize)
                  : prevButtonData.current["Button4"]
                  ? parseInt(prevButtonData.current["Button4"].textSize)
                  : 10
              }
              padding={
                receivedData && receivedData.targetElement === "Button4"
                  ? parseInt(receivedData.padding)
                  : prevButtonData.current["Button4"]
                  ? parseInt(prevButtonData.current["Button4"].padding)
                  : 8 //DEFAULT VALUE
              }
              textColour={
                receivedData && receivedData.targetElement === "Button4"
                  ? receivedData.textColour
                  : prevButtonData.current["Button4"]
                  ? prevButtonData.current["Button4"].textColour
                  : "white"
              }
              position="top"
              backgroundColour={
                receivedData && receivedData.targetElement === "Button4"
                  ? receivedData.backgroundColour
                  : prevButtonData.current["Button4"]
                  ? prevButtonData.current["Button4"].backgroundColour
                  : "black" //DEFAULT VALUE
              }
              tooltipsText={
                receivedData && receivedData.targetElement === "Button4"
                  ? receivedData.tooltipText
                  : prevButtonData.current["Button4"]
                  ? prevButtonData.current["Button4"].tooltipText
                  : "Tooltip text goes here"
              }
              buttonId="Button4"
            >
              <button
                className="bg-white text-black rounded-md p-2 font-semibold w-36"
                onClick={() => {
                  setShowModal(true);
                  setSelectedButton("Button4");
                  setToggled(false);
                }}
              >
                Button 4
              </button>
            </TooltipItem>
            <TooltipItem
              tooltipWidth={
                receivedData && receivedData.targetElement === "Button5"
                  ? parseInt(receivedData.tooltipWidth)
                  : prevButtonData.current["Button5"]
                  ? parseInt(prevButtonData.current["Button5"].tooltipWidth)
                  : textLength
              }
              cornerRadius={
                receivedData && receivedData.targetElement === "Button5"
                  ? parseInt(receivedData.cornerRadius)
                  : prevButtonData.current["Button5"]
                  ? parseInt(prevButtonData.current["Button5"].cornerRadius)
                  : 4
              }
              textSize={
                receivedData && receivedData.targetElement === "Button5"
                  ? parseInt(receivedData.textSize)
                  : prevButtonData.current["Button5"]
                  ? parseInt(prevButtonData.current["Button5"].textSize)
                  : 10
              }
              padding={
                receivedData && receivedData.targetElement === "Button5"
                  ? parseInt(receivedData.padding)
                  : prevButtonData.current["Button5"]
                  ? parseInt(prevButtonData.current["Button5"].padding)
                  : 8 //DEFAULT VALUE
              }
              textColour={
                receivedData && receivedData.targetElement === "Button5"
                  ? receivedData.textColour
                  : prevButtonData.current["Button5"]
                  ? prevButtonData.current["Button5"].textColour
                  : "white"
              }
              position="top"
              backgroundColour={
                receivedData && receivedData.targetElement === "Button5"
                  ? receivedData.backgroundColour
                  : prevButtonData.current["Button5"]
                  ? prevButtonData.current["Button5"].backgroundColour
                  : "black" //DEFAULT VALUE
              }
              tooltipsText={
                receivedData && receivedData.targetElement === "Button5"
                  ? receivedData.tooltipText
                  : prevButtonData.current["Button5"]
                  ? prevButtonData.current["Button5"].tooltipText
                  : "Tooltip text goes here"
              }
              buttonId="Button5"
            >
              <button
                className="bg-white text-black rounded-md p-2 font-semibold w-36"
                onClick={() => {
                  setShowModal(true);
                  setToggled(false);
                  setSelectedButton("Button5");
                }}
              >
                Button 5
              </button>
            </TooltipItem>
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* MODAL BEING CALLED HERE */}
      <Modal
        isVisible={showModal}
        selectedButton={selectedButton}
        Close={() => {
          setShowModal(false);
        }}
        onSubmit={getData}
      />
    </React.Fragment>
  );
}
