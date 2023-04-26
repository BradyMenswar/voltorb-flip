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
				`${loseClass} ${winClass} flex flex-col gap-1 pointer-events-none select-none items-center justify-center text-stone-100 font-bold text-xl h-[100%] aspect-square border-[0.3rem] rounded border-stone-950 endtile`
			}
		>
			<h3>{sum}</h3>
			<div className="w-[70%] h-[1px] bg-white"></div>
			<div className="flex items-center gap-1">
				<div className="w-6 h-6 bombImg"></div>
				<h3>{bombs}</h3>
			</div>
		</div>
	);
}
