import React, { Component } from "react";
import "../../styles/slogan.scss";

export const Slogan = () => (
	<div className="mt-auto py-3 text-center">
		<p className="slogan">NOTHING BUT THE BEST FOR YOUR BABY</p>
		<p className="slogan">
			CURATED WITH{" "}
			<img
				src="https://res.cloudinary.com/scormier/image/upload/v1620161770/cutie-pie/heart-large_trfvou.png"
				alt="heart"
				width="37"
				height="34"
			/>
		</p>
	</div>
);
