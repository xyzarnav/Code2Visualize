import Links from "./Links";
import { navigationItems } from "@/constants";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { curve, menuSlide } from "@/motion";

export default function Navbar() {
	const pathname = "/";
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="h-screen bg-[#292929] fixed right-0 top-0 text-white">
			<div className="box-border h-full z-[999] relative py-[30px] px-[60px]  sm:px-[40px] xm:px-[40px] flex flex-col justify-between">
				<div
					onMouseLeave={() => {
						setSelectedIndicator(pathname);
					}}
					className="flex flex-col text-[50px] md:text-[45px] sm:text-[40px] xm:text-[30px] mt-[60px]">
					<div className="text-[#999999] border-b-[1px] border-[#999999] uppercase text-[12px] mb-[20px]">
						<p>Navigation</p>
					</div>
					{navigationItems.map((data, index) => {
						return (
							<Links
								className="text-black"
								key={index}
								data={{ ...data, index }}
								isActive={selectedIndicator == data.href}
								setSelectedIndicator={setSelectedIndicator}></Links>
						);
					})}
				</div>
				<div className="flex w-full justify-between text-[12px] gap-[20px]">
					<a href={"/"}>Awwwards</a>
					<a href={"/"}>Instagram</a>
					<a href={"/"}>Dribble</a>
					<a href={"/"}>LinkedIn</a>
				</div>
			</div>
			<svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-[#292929] stroke-none">
				<motion.path
					variants={curve}
					initial="initial"
					animate="enter"
					exit="exit"
				/>
			</svg>
		</motion.div>
	);
}
