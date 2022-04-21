import React, { useState } from "react";
import styled from "styled-components";
import Parameter from "./Parameter";

const Mortgage = () => {
	const [sliderVal, setSliderVal] = useState({
		purchasePrice: 0,
		downPayment: 0,
		repaymentTime: 0,
		interestRate: 0,
		loanAmount: 0,
		estimated: 0,
	});
	function inputHandler(event) {
		if (
			!!sliderVal.purchasePrice &&
			!!sliderVal.downPayment &&
			!!sliderVal.repaymentTime &&
			!!sliderVal.interestRate
		) {
			setMonthlyPayment(
				monthlyPaymentResult(
					loan,
					sliderVal.repaymentTime * 12,
					sliderVal.interestRate / 12 / 100
				)
			);
		}
		setSliderVal({
			...sliderVal,
			[event.target.name]: Number(event.target.value),
		});
		setLoan(sliderVal.purchasePrice - sliderVal.downPayment);
	}

	const [loan, setLoan] = useState(0);
	const [monthlyPayment, setMonthlyPayment] = useState(0);

	function monthlyPaymentResult(p, n, i) {
		return Math.floor(
			(p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
		);
	}
	return (
		<StyledMain>
			<Container>
				<h1>Mortgage Calculator</h1>

				<Calculator>
					<Parameter
						name={"purchasePrice"}
						inputHandler={inputHandler}
						symbol={"$"}
						value={sliderVal.purchasePrice}
						title={"Purchase price:"}
					/>
					<Parameter
						name={"downPayment"}
						inputHandler={inputHandler}
						symbol={"$"}
						value={sliderVal.downPayment}
						title={"Down payment:"}
					/>
					<Parameter
						name={"repaymentTime"}
						inputHandler={inputHandler}
						symbol={"years"}
						value={sliderVal.repaymentTime}
						title={"Repayment time:"}
						max={30}
					/>
					<Parameter
						name={"interestRate"}
						inputHandler={inputHandler}
						symbol={"%"}
						value={sliderVal.interestRate}
						title={"Interest rate:"}
						max={100}
					/>
					<StyledResults>
						<p>Loan Amount</p>
						<span>${loan.toLocaleString() || 0}</span>
					</StyledResults>

					<StyledResults>
						<p>Estimated per. month</p>
						<span>${monthlyPayment.toLocaleString()}</span>
					</StyledResults>
				</Calculator>
			</Container>
		</StyledMain>
	);
};

export default Mortgage;

const StyledMain = styled.main`
	min-height: 100%;
	background-color: deeppink;
	display: grid;
	place-content: center;
`;

const Container = styled.div`
	max-width: 800px;
	background-color: white;
	border-radius: 8px;
	padding: 16px;
	margin: 16px;
	h1 {
		margin-bottom: 32px;
		font-size: 2.5rem;
		margin-left: 16px;
	}
`;
const Calculator = styled.div`
	display: grid;
	gap: 32px;
	grid-template-columns: repeat(3, minmax(200px, 1fr));
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
`;

const StyledResults = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	p {
		font-size: 1.2rem;
		font-weight: 600;
	}

	span {
		font-size: 2rem;
		font-size: 500;
	}
`;
