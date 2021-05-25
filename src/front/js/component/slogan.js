import React, { Component } from "react";
import "../../styles/slogan.scss";

export const Slogan = () => (
	<div className="mt-auto pt-4 p-2 text-center">
		<p className="slogan fade-in mt-2 mb-1">NOTHING BUT THE BEST FOR YOUR BABY</p>
		<p className="slogan fade-in mb-4">
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
