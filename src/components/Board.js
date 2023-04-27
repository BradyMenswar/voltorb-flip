import Tile from "./Tile";
import EndTile from "./EndTile";
import Lock from "./Lock";
import { useEffect, useState } from "react";

export default function Board(props) {
	let colors = ["#531CB3", "#6EA4BF", "#CE8147", "#087E8B"];
	const boardArrays = [
		[
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4,
				4,
			],
		],
		[
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4,
				4,
			],
		],
		[
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
		],
		[
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
		],
		[
			[
				1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
		],
		[
			[
				1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
		],
		[
			[
				1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
		],
		[
			[
				1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
			[
				1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4,
			],
		],
	];
	const [color, setColor] = useState(0);
	const [difficulty, setDifficulty] = useState(1);
	const [shuffled, setShuffled] = useState(null);
	const [locked, setLocked] = useState(false);
	const [lose, setLose] = useState(false);
	const [win, setWin] = useState(false);
	const [board, setBoard] = useState(boardArrays[0][0]);
	const [tileStates, setTileStates] = useState([
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
		[false, false],
	]);

	useEffect(() => {
		setShuffled(shuffleArray(board));
	}, [board]);

	function handleTileStates(index, newState) {
		const newStates = [...tileStates];
		newStates[index] = newState;
		setTileStates(newStates);

		let winningIndexs = [];
		shuffled.forEach((value, i) => {
			if (value === 2 || value === 3) {
				winningIndexs.push(i);
			}
		});
		let count = 0;
		newStates.forEach((state, i) => {
			if (state[0] && shuffled[i] === 4) {
				setLose(true);
				handleGameOver();
				return;
			} else {
				if (state[0] && winningIndexs.includes(i)) {
					count++;
				}
				if (count === winningIndexs.length) {
					setWin(true);
					handleGameOver();
				}
			}
		});
	}

	function handleResetClicked() {
		let randomIndex = Math.floor(
			Math.random() * boardArrays[difficulty - 1].length
		);

		setBoard(boardArrays[difficulty - 1][randomIndex]);
		setTileStates(tileStates.map(([_, second]) => [false, false]));
		setLose(false);
		setWin(false);
	}

	function handleGameOver() {
		setTileStates(tileStates.map(([_, second]) => [true, false]));
	}

	function handleLock() {
		setLocked(!locked);
	}

	function handleDifficultyUp() {
		if (difficulty < 8) {
			setDifficulty(difficulty + 1);
		}
	}

	function handleDifficultyDown() {
		if (difficulty > 1) {
			setDifficulty(difficulty - 1);
		}
	}

	function handleColorRight() {
		if (color === colors.length - 1) {
			setColor(0);
		} else {
			setColor(color + 1);
		}
	}

	function handleColorLeft() {
		if (color === 0) {
			setColor(colors.length - 1);
		} else {
			setColor(color - 1);
		}
	}

	function shuffleArray(array) {
		let tempArray = array;
		for (let i = tempArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
		}
		return tempArray;
	}

	return (
		shuffled && (
			<div className="flex w-full gap-[2%] items-center">
				<div className="select-none w-[10%] h-[90%] bg-stone-950 rounded flex flex-col p-[1%] gap-[1%] text-white">
					<div
						className={
							"endtile font-bold flex items-center justify-center w-full h-full transition-all duration-200 " +
							(difficulty > 7 ? "bg-red-900 " : "bg-stone-900 ")
						}
					>
						8
					</div>
					<div
						className={
							"endtile font-bold flex items-center justify-center w-full h-full transition-all duration-200 " +
							(difficulty > 6 ? "bg-red-700 " : "bg-stone-900 ")
						}
					>
						7
					</div>
					<div
						className={
							"endtile font-bold flex items-center justify-center w-full h-full transition-all duration-200 " +
							(difficulty > 5 ? "bg-orange-700 " : "bg-stone-900 ")
						}
					>
						6
					</div>
					<div
						className={
							"endtile font-bold flex items-center justify-center w-full h-full transition-all duration-200 " +
							(difficulty > 4 ? "bg-orange-600 " : "bg-stone-900 ")
						}
					>
						5
					</div>
					<div
						className={
							"endtile font-bold flex items-center justify-center w-full h-full transition-all duration-200 " +
							(difficulty > 3 ? "bg-yellow-600 " : "bg-stone-900 ")
						}
					>
						4
					</div>
					<div
						className={
							"endtile font-bold flex items-center justify-center w-full h-full transition-all duration-200 " +
							(difficulty > 2 ? "bg-yellow-400 " : "bg-stone-900 ")
						}
					>
						3
					</div>
					<div
						className={
							"endtile font-bold flex items-center justify-center w-full h-full transition-all duration-200 " +
							(difficulty > 1 ? "bg-green-400 " : "bg-stone-900 ")
						}
					>
						2
					</div>
					<div
						className={
							"endtile font-bold flex items-center justify-center w-full h-full transition-all duration-200 " +
							(difficulty > 0 ? "bg-green-600 " : "bg-stone-900 ")
						}
					>
						1
					</div>
				</div>
				<div className="w-[90%] h-[90%] custom-grid gap-[1%]">
					<button
						className="absolute w-[12%] h-[12%] left-[-49%] top-[33%]"
						onClick={handleColorRight}
					></button>
					<button
						className="absolute w-[12%] h-[12%] left-[-73.5%] top-[33%]"
						onClick={handleColorLeft}
					></button>
					<button
						className="absolute w-[12%] h-[12%] left-[-61%] top-[21%]"
						onClick={handleDifficultyUp}
					></button>
					<button
						className="absolute w-[12%] h-[12%] left-[-61%] top-[45%]"
						onClick={handleDifficultyDown}
					></button>
					<button
						onClick={handleResetClicked}
						className="absolute self-center w-[19%] h-[19%] rounded-full top-[27%] right-[-81%]"
					></button>
					{shuffled.map((value, index) => {
						return (
							<Tile
								handleGameOver={handleGameOver}
								tileState={tileStates[index]}
								setTileState={handleTileStates}
								lock={locked}
								key={index}
								index={index}
								color={colors[color]}
								value={value}
								lose={lose}
								win={win}
							></Tile>
						);
					})}
					<EndTile
						spot="end-11 "
						color={colors[color]}
						values={shuffled.slice(0, 5)}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-12 "
						color={colors[color]}
						values={shuffled.slice(5, 10)}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-13 "
						color={colors[color]}
						values={shuffled.slice(10, 15)}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-14 "
						color={colors[color]}
						values={shuffled.slice(15, 20)}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-15 "
						color={colors[color]}
						values={shuffled.slice(20, 25)}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-21 "
						color={colors[color]}
						values={shuffled.filter((v, index) => {
							return index % 5 === 0;
						})}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-22 "
						color={colors[color]}
						values={shuffled.filter((v, index) => {
							return index % 5 === 1;
						})}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-23 "
						color={colors[color]}
						values={shuffled.filter((v, index) => {
							return index % 5 === 2;
						})}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-24 "
						color={colors[color]}
						values={shuffled.filter((v, index) => {
							return index % 5 === 3;
						})}
						lose={lose}
						win={win}
					></EndTile>
					<EndTile
						spot="end-25 "
						color={colors[color]}
						values={shuffled.filter((v, index) => {
							return index % 5 === 4;
						})}
						lose={lose}
						win={win}
					></EndTile>
					<Lock
						color={colors[color]}
						handleClick={handleLock}
						locked={locked}
						lose={lose}
						win={win}
					></Lock>
				</div>
			</div>
		)
	);
}
