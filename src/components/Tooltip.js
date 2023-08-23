//padding and font-size was not dynamically changing thats because it was not parsed in the index.js

import React, { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import Home from "@/pages";

export const TooltipItem = ({
  children,
  tooltipsText,
  position,
  backgroundColour,
  textColour,
  cornerRadius,
  tooltipWidth,
  // arrowWidth,
  // arrowHeight,
  toggledValue,
  textSize,
  padding,
}) => {
  const [bg, setBg] = useState(backgroundColour);
  const [color, setColor] = useState(textColour);
  const [dynamicPadding, setDynamicPadding] = useState(padding);
  const [dynamicTextSize, setDynamicTextSize] = useState(textSize);
  const [dynamicCornerRadius, setDynamicCornerRadius] = useState(cornerRadius);
  const [dynamicTooltipWidth, setDynamicTooltipWidth] = useState(tooltipWidth);

  useEffect(() => {
    setBg(backgroundColour);
    setColor(textColour);
    setDynamicPadding(padding);
    setDynamicTextSize(textSize);
    setDynamicCornerRadius(cornerRadius);
    setDynamicTooltipWidth(tooltipWidth);
  }, [
    backgroundColour,
    textColour,
    padding,
    textSize,
    cornerRadius,
    tooltipWidth,
  ]);
  console.log(toggledValue);

  if (toggledValue) return null;
  return (
    <React.Fragment>
      <div className="">
        <div className="">
          <div className="group relative">
            {" "}
            {children}{" "}
            <div
              div
              style={{
                backgroundColor: bg,
                color: color,
                padding: dynamicPadding,
                fontSize: dynamicTextSize,
                borderRadius: dynamicCornerRadius,
                width: dynamicTooltipWidth,
                // height: 31,
              }}
              className={` ${
                (position === "right" &&
                  `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded  font-semibold  opacity-0 group-hover:opacity-100 `) ||
                (position === "top" &&
                  `absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded   font-semibold  opacity-0 group-hover:opacity-100 `) ||
                (position === "left" &&
                  `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded   font-semibold  opacity-0 group-hover:opacity-100 `) ||
                (position === "bottom" &&
                  `absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded   font-semibold  opacity-0 group-hover:opacity-100 `)
              }`}
            >
              <span
                style={{
                  backgroundColor: bg,
                  color: color,
                  padding: dynamicPadding,
                  fontSize: dynamicTextSize,
                }}
                className={` ${
                  (position === "right" &&
                    `absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm `) ||
                  (position === "top" &&
                    `absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm `) ||
                  (position === "left" &&
                    `absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm `) ||
                  (position === "bottom" &&
                    `absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm `)
                } `}
              ></span>
              {tooltipsText}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TooltipItem;
