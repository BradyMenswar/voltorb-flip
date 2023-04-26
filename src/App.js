import { useState } from "react";
import Board from "./components/Board";
function App() {
	function handleRetro() {
		const screen = document.querySelector("#screen");
		screen.classList.toggle("retro");
	}

	return (
		<div className="flex flex-col items-center w-screen h-screen bg-stone-950">
			<button
				onClick={handleRetro}
				className="absolute self-center px-4 py-2 bg-blue-100 rounded right-10"
			>
				Toggle Retro Mode
			</button>

			<div className="flex flex-col items-center pt-[9%] w-full h-full gba">
				<div className="h-[75%] p-4 bg-stone-950 w-[35%]">
					<div
						id="screen"
						className="flex justify-center h-full p-4 bg-stone-900 "
					>
						<Board></Board>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
