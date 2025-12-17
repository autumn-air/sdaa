import React from "react";



type OverlayProps = {
    children: string
    className?: string
    divClass?: string
    fillWidth?: boolean
};
export default function Overlay({children, className, divClass, fillWidth}: OverlayProps) {
   return (
    <div className={divClass + " relative "}>
      <span className={className + " absolute" }>{children}</span>
      <span className={className + " absolute translate-px rotate-1"}>{children}</span>
      <span className={className + " absolute -translate-px rotate-0.5"}>{children}</span>
      <span className={className + " absolute translate-0.5 -rotate-0.5"}>{children}</span>
      <span className={className + " absolute -translate-0.5 -rotate-1"}>{children}</span>
      <span className={className + " absolute" }>{children}</span>
      {fillWidth && <span className="opacity-0">{children}</span>}
    </div>
   ) 
}