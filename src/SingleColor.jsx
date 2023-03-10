import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(',');
	const hexValue = `#${hexColor}`;

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [alert]);

	return (
		<article
			className='px-4 py-8 text-[1rem] cursor-pointer'
			style={{ backgroundColor: `rgb(${rgb})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
			}}
		>
			<p
				className={`mb-0 font-semibold tracking-[0.05rem] ${
					index > 9 ? 'text-gray-300' : ''
				}`}
			>
				{weight}%
			</p>
			<p
				className={`mb-0 font-semibold tracking-[0.05rem] ${
					index > 9 ? 'text-gray-300' : ''
				}`}
			>
				{hexValue}
			</p>
			{alert && (
				<p
					className={`mt-1 uppercase text-sm font-semibold tracking-[0.05rem] ${
						index > 9 ? 'text-gray-300' : ''
					}`}
				>
					copied to clipboard! 👍
				</p>
			)}
		</article>
	);
};

export default SingleColor;
