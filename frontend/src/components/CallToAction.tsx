import { motion } from "framer-motion";
import { Button, Heading } from "@/components";
import { ArrowRight, spring, star } from "@/assets/images";
import { imageAnimation, textAnimation } from "@/motion";

export default function CallToAction() {
	const phrases1 = ["Sign up for free today"];
	// const phrases1 = ["Start Your DSA Journey Today"];

  const phrases2 = [
    "Learn with an AI-powered coding coach,",
    "and master problem solving with confidence.",
  ];

  const phrases3 = [
    "Join thousands of learners building stronger DSA fundamentals through interactive code execution, intelligent hints, and real-time visualizations.",
  ];
	return (
		<div className="w-full padding-x py-10 relative bg-gradient-to-b from-white to-[#d2dcff]">
			<div className="w-full flex items-center gap-5">
				<motion.div
					variants={imageAnimation}
					initial="initial"
					whileInView="enter"
					viewport={{ once: true }}
					className="xm:hidden sm:hidden">
					<img
						src={star}
						alt="star-hero-img"
						width={400}
						height={400}
					/>
				</motion.div>
				<div className="w-full flex items-center flex-col gap-3">
					<div>
						<Heading
							classname="heading font-bold xm:text-center sm:text-center"
							title={phrases1}
						/>
					</div>
					<div>
						<Heading
							classname="paragraph font-normal text-center block xm:hidden sm:hidden"
							title={phrases2}
						/>
						<Heading
							classname="paragraph font-normal text-center hidden xm:block sm:block"
							title={phrases3}
						/>
					</div>
					<motion.div
						variants={textAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}
						className="flex gap-4 items-center mt-3 overflow-hidden">
						<Button
							className="text-white bg-black py-2 px-4"
							title="Lets Start"
						/>
						<div className="flex items-center gap-2">
							<Button
								className="text-black"
								title="Learn more"
							/>
							<img
								src={ArrowRight}
								alt="ArrowRight"
								width={20}
								height={20}
								className="text-black"
							/>
						</div>
					</motion.div>
				</div>
				<motion.div
					className="xm:hidden sm:hidden"
					variants={imageAnimation}
					initial="initial"
					whileInView="enter"
					viewport={{ once: true }}>
					<img
						src={spring}
						alt="spring-hero-img"
						width={400}
						height={400}
					/>
				</motion.div>
			</div>
		</div>
	);
}
