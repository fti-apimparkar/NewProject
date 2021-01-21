import * as React from "react";

function SvgViewSettings(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M7.281 9.376a1.308 1.308 0 001.939 0l.627-.7a1.306 1.306 0 012.273.942l-.047.934a1.3 1.3 0 001.371 1.371l.934-.047a1.305 1.305 0 01.941 2.273l-.694.627a1.306 1.306 0 000 1.939l.694.627a1.305 1.305 0 01-.941 2.273l-.934-.047a1.305 1.305 0 00-1.371 1.371l.047.934a1.306 1.306 0 01-2.273.942l-.627-.7a1.308 1.308 0 00-1.939 0l-.627.7a1.306 1.306 0 01-2.273-.942l.047-.934a1.307 1.307 0 00-1.371-1.371l-.934.047a1.306 1.306 0 01-.942-2.273l.695-.627a1.308 1.308 0 000-1.939l-.695-.627a1.306 1.306 0 01.942-2.273l.934.047a1.305 1.305 0 001.371-1.371l-.047-.934a1.306 1.306 0 012.273-.942l.627.7z" />
        <circle cx={8.25} cy={15.751} r={1.875} />
        <path d="M18.638 5a.375.375 0 100 .75.375.375 0 000-.75h0" />
        <path d="M21.194 1.848a.75.75 0 01.971.971l-.5 1.286a.749.749 0 00.229.856l1.075.864a.75.75 0 01-.355 1.326l-1.363.211a.749.749 0 00-.627.626l-.211 1.364a.75.75 0 01-1.326.355l-.864-1.075a.751.751 0 00-.856-.23l-1.286.5a.75.75 0 01-.971-.971l.5-1.286a.749.749 0 00-.229-.856l-1.075-.865a.749.749 0 01.355-1.324l1.363-.211a.751.751 0 00.627-.627l.211-1.362a.749.749 0 011.325-.355l.865 1.075a.75.75 0 00.856.229l1.286-.501z" />
      </g>
    </svg>
  );
}

export default SvgViewSettings;