import React,{ useState } from "react";
import "./home.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[glowLight,setGlowLight]=useState("red")
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Traffic Light </h1>
			<div className="wrapper">
				<div className="trafficLHead bg-dark ">
					<button type="button" className={"red"+(glowLight==="red"?" glow":"")} onClick={() => {setGlowLight("red")}}
					><b className="text-center text-light">Stop</b>
					</button>	
					<button type="button" className={"orange"+(glowLight==="orange"?" glow":"")} onClick={() => {setGlowLight("orange")}}
					><b className="text-center text-light">Warning</b></button>
					<button type="button" className={"green"+(glowLight==="green"?" glow":"")} onClick={() => {setGlowLight("green")}}>
					<b className="text-center text-light">Go</b>	</button>
				</div>
				<div className='foot'></div>
			</div>
		
			
		</div>
	);
};

export default Home;
