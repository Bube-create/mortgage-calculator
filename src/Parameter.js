import React from "react";
import styled from "styled-components";

const Parameter = ({
	name,
	value,
	inputHandler,
	symbol,
	title,
	max = 1000000,
}) => {
	return (
		<StyledParameter>
			<label htmlFor={name}>
				{title} {symbol !== "years" && symbol !== "%" ? symbol : ""}
				<span>{value.toLocaleString()}</span>{" "}
				{symbol === "years" || symbol === "%" ? symbol : ""}
			</label>
			<input
				type="range"
				min="0"
				max={max}
				step="1"
				value={value}
				id={name}
				name={name}
				onInput={inputHandler}
			/>
		</StyledParameter>
	);
};

export default Parameter;

const StyledParameter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	label {
		width: 100%;
		font-size: 1rem;
		font-weight: 600;
	}
	input {
		width: 100%;
	}
`;
