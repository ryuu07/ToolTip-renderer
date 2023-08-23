import React, { useState } from "react";
import Tooltip from "./Tooltip";
import Home from "@/pages";

const Modal = ({ isVisible, Close, ...props }) => {
  const [targetElement, setTargetElement] = useState("");
  const [tooltipText, setTooltipText] = useState("");
  const [textSize, setTextsize] = useState(0);
  const [padding, setPadding] = useState(0);
  const [textColour, setTextColour] = useState("");
  const [backgroundColour, setBackgroundColour] = useState("");
  const [arrowWidth, setArrowWidth] = useState(0);
  const [arrowHeight, setArrowHeight] = useState(0);
  const [cornerRadius, setCornerRadius] = useState(0);
  const [tooltipWidth, setTooltipWidth] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const stateVariables = {
      targetElement,
      tooltipText,
      textSize,
      padding,
      textColour,
      backgroundColour,
      arrowWidth,
      arrowHeight,
      cornerRadius,
      tooltipWidth,
    };
    props.onSubmit(stateVariables);
  };

  if (!isVisible) return null;
  return (
    <form onSubmit={handleSubmit}>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="lg:w-[643px] lg:h-[612px] md:w-[643px] md:h-[612px] flex flex-col px-2 sm:w-[643px] sm:h-[612px]">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => {
              Close();
            }}
          >
            {" "}
            X{" "}
          </button>{" "}
          <div className="bg-gray-100 p-2 rounded h-auto">
            <div className="p-4 gap-4 flex flex-col h-full justify-between font-MainFont text-[16px]">
              <div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold pb-1">
                    Target Element
                  </label>
                  <select
                    value={targetElement}
                    onChange={(event) => {
                      setTargetElement(event.target.value);
                    }}
                    name="button"
                    id="button"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  "
                  >
                    <option value="Default" disabled>
                      Default
                    </option>
                    <option value="Button1">Button1</option>
                    <option value="Button2">Button2</option>
                    <option value="Button3">Button3</option>
                    <option value="Button4">Button4</option>
                    <option value="Button5">Button5</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold pb-1">
                  Tooltip Text
                </label>
                <input
                  value={tooltipText}
                  onChange={(event) => {
                    setTooltipText(event.target.value);
                  }}
                  type="text"
                  placeholder="Input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-1.5  placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold pb-1">
                    Text Size
                  </label>
                  <input
                    // defaultValue={"10"}
                    value={textSize}
                    onChange={(event) => {
                      setTextsize(event.target.value);
                    }}
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-52 p-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold pb-1">
                    Padding
                  </label>
                  <input
                    // defaultValue={3}
                    value={padding}
                    onChange={(event) => {
                      setPadding(event.target.value);
                    }}
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-52 p-1.5"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="font-semibold pb-1">
                  Text Colour
                </label>
                <input
                  type="text"
                  value={textColour}
                  onChange={(event) => {
                    setTextColour(event.target.value);
                  }}
                  placeholder="Input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-1.5  placeholder:text-gray-300"
                />
              </div>
              <div>
                <label htmlFor="" className="font-semibold pb-1">
                  Background Colour
                </label>
                <input
                  type="text"
                  value={backgroundColour}
                  onChange={(event) => {
                    setBackgroundColour(event.target.value);
                  }}
                  placeholder="Input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-1.5  placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold pb-1">
                    Corner radius
                  </label>
                  <input
                    defaultValue={3}
                    value={cornerRadius}
                    onChange={(event) => {
                      setCornerRadius(event.target.value);
                    }}
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-52 p-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold pb-1">
                    Tooltip width
                  </label>
                  <input
                    value={tooltipWidth}
                    onChange={(event) => {
                      setTooltipWidth(event.target.value);
                    }}
                    defaultValue={3}
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-52 p-1.5"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold pb-1">
                    Arrow width
                  </label>
                  <input
                    value={arrowWidth}
                    onChange={(event) => {
                      setArrowWidth(event.target.value);
                    }}
                    defaultValue={3}
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-52 p-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-semibold pb-1">
                    Arrow height
                  </label>
                  <input
                    value={arrowHeight}
                    onChange={(event) => {
                      setArrowHeight(event.target.value);
                    }}
                    defaultValue={3}
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-52 p-1.5"
                  />
                </div>
              </div>
              <button className="flex flex-row items-center justify-center bg-slate-200 rounded-md p-1.5 font-semibold">
                Add
              </button>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </form>
  );
};

export default Modal;
