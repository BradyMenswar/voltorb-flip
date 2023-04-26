import { useState } from "react";
export default function Lock(props) {
	let lockedClass = props.locked ? "locked " : "";
	let winClass = props.win ? "win" : "";
	let loseClass = props.lose ? "lose" : "";
	return (
		<div
			style={{ backgroundColor: props.color }}
			className={`${winClass} ${loseClass} ${lockedClass} lock border-stone-950 h-[100%] aspect-square border-[0.3rem] rounded`}
			onClick={props.handleClick}
		></div>
	);
}
