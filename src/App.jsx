import { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#022B3A').all(10));

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
      setError(false);
			let colors = new Values(color).all(10);
			setList(colors)
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<div className='App'>
			<>
				{error && (
					<div className='flex items-center justify-center'>
						<h4 className='text-center mt-6 -mb-2 px-2 py-1 text-md font-semibold bg-red-300 border-l-4 border-red-800 inline-block '>
							<span className='text-red-600'>invalid input</span>... c'mon man
							help me, help you, help us 😫
						</h4>
					</div>
				)}
				<section className='section-container'>
					<h3 className='mb-0 mr-8 md:text-3xl font-bold'>color generator</h3>
					<form onSubmit={handleSubmit} className='flex items-center'>
						{!error ? (
							<input
								className='border-transparent py-2 px-4 text-[1.2rem] rounded-md md:text-[0.85rem] w-[10rem] md:w-[16rem] mr-2'
								type='text'
								value={color}
								onChange={(e) => setColor(e.target.value)}
								placeholder='#022B3A'
							/>
						) : (
							<div className=''>
								<input
									className='border-2 border-red-600 py-2 px-4 text-[1.2rem] rounded-md  md:text-[0.85rem] w-[10rem] md:w-[16rem] mr-2'
									type='text'
									value={color}
									onChange={(e) => setColor(e.target.value)}
								/>
							</div>
						)}
						<button
							className='bg-gradient-to-r from-teal-500 to-cyan-500 py-2 px-4 md:text-[0.85rem] border-transparent rounded-md capitalize text-white tracking-[0.1rem] font-semibold cursor-pointer'
							type='submit'
						>
							submit
						</button>
					</form>
				</section>
				<section className='colors'>
					{list.map((color, index) => {
						return (
							<SingleColor
								key={index}
								{...color}
								index={index}
								hexColor={color.hex}
							/>
						);
					})}
				</section>
			</>
		</div>
	);
}

export default App;
