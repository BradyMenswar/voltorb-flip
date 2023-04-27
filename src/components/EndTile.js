import { useState } from "react";
export default function EndTile(props) {
	let sum = 0;
	let bombs = 0;
	props.values.forEach((v) => {
		if (v === 4) {
			bombs++;
		} else {
			sum += v;
		}
	});
	let winClass = props.win ? "win" : "";
	let loseClass = props.lose ? "lose" : "";

	return (
		<div
			style={{ backgroundColor: props.color }}
			className={
				props.spot +
				`${loseClass} ${winClass} p-1 flex flex-col text-[100%] pointer-events-none select-none items-center justify-around text-stone-100 font-bold h-full w-full border-[0.2rem] rounded border-stone-950 endtile`
			}
		>
			<h3 className="leading-1">{sum}</h3>
			<div className="flex items-center justify-center w-full h-full gap-1">
				<div className="w-full h-full bombImg"></div>
				<h3 className="w-full">{bombs}</h3>
			</div>
		</div>
	);
}
