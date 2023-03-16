export default function tickerEngine(setText: (text: string) => void) {
	const text = ['fullstack developer', 'on Python', 'and JavaScript'];

	const run = (index: number, print: boolean) => {
		let letterIndex = print ? 0 : text[index].length - 1;

		const interval = setInterval(() => {
			console.log(text[index].length, letterIndex, print);

			if (letterIndex === text[index].length) {
				clearInterval(interval);

				setTimeout(() => {
					run(index, !print);
				}, 1000);
			}

			if (!print && letterIndex === 0) {
				clearInterval(interval);

				setTimeout(() => {
					run(text.length === index + 1 ? 0 : index + 1, true);
				}, 1000);
			}

			setText(text[index].slice(0, letterIndex));

			if (print) {
				letterIndex += 1;
			} else {
				letterIndex -= 1;
			}
		}, 100);
	};

	run(0, true);
}
