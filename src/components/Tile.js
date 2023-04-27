export default function Tile(props) {
	function handleClick() {
		if (props.lock && !props.tileState[0]) {
			props.setTileState(props.index, [
				props.tileState[0],
				!props.tileState[1],
			]);
		} else if (!props.tileState[0] && !props.tileState[1]) {
			props.setTileState(props.index, [
				!props.tileState[0],
				props.tileState[1],
			]);
		}
	}
	let flippedClass = props.tileState[0]
		? "flipped cursor-auto"
		: "cursor-pointer";
	let lockedClass = props.tileState[1] ? "locked" : "";
	let loseClass = props.lose ? "lose" : "";
	let winClass = props.win ? "win" : "";
	let valueClass = "";
	if (props.tileState[0]) {
		if (props.value === 1) {
			valueClass = "one ";
		} else if (props.value === 2) {
			valueClass = "two ";
		} else if (props.value === 3) {
			valueClass = "three ";
		} else {
			valueClass = "bomb ";
		}
	}
	return (
		<div
			style={{ backgroundColor: props.color }}
			className={`${winClass} ${loseClass} ${lockedClass} ${valueClass} ${flippedClass} tile  border-[0.2rem] rounded border-stone-950`}
			onClick={handleClick}
		></div>
	);
}
