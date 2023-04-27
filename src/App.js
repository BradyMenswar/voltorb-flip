import { useState } from "react";
import Board from "./components/Board";
function App() {
	function handleRetro() {
		const screen = document.querySelector("#screen");
		screen.classList.toggle("retro");
	}

	return (
		<div className="flex flex-col items-center w-screen overflow-hidden app ">
			<div className="relative flex flex-col items-center w-full max-w-[1400px]  gba">
				<button
					onClick={handleRetro}
					className="absolute self-center w-[7%] h-[10%] left-[80%] top-[41%] rounded-full"
				></button>
				<div className="p-2 bg-black board h-fit">
					<div
						id="screen"
						className="flex justify-center w-full min-w-[250px] aspect-square p-[2%] bg-stone-900 "
					>
						<Board></Board>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
