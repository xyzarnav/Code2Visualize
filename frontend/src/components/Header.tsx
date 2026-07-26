import { useState } from "react";
import { Button } from "@/components";
import { navVariants } from "@/motion";
import { MobileMenu } from "@/animations";
import { navigationItems } from "@/constants";
import { arrowRightWhite, logo } from "@/assets/images";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > lastScrollY && latest > 100) {
			setHidden(true);
		} else {
			setHidden(false);
		}
		setLastScrollY(latest);
	});
	return (
    <>
      <motion.div
        initial="initial"
        whileInView="enter"
        variants={navVariants}
        className="fixed w-full top-0 z-50 xm:hidden sm:hidden"
      >
        {/* <motion.div
          className="w-full flex items-center justify-center gap-3 py-3 bg-black"
          variants={navVariants}
          animate={hidden ? "hidden" : "vissible"}
        >
          <div className="xm:hidden sm:hidden">
            <h1 className="text-[#FFFFFF99] text-[18px] font-normal leading-tight">
              Watch your code execute, understand every step, and solve with
              confidence.
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-white text-[16px] leading-tight font-normal">
              Get started for free
            </button>
            <img
              src={arrowRightWhite}
              alt="arrowRightWhite"
              width={20}
              height={20}
              className="text-white"
            />
          </div>
        </motion.div> */}
        <motion.div
          className="w-full flex items-center justify-between gap-8 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200"
          animate={hidden ? { y: -100 } : { y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex items-center">
            <img src={logo} alt="logo" width={40} height={40} />
          </div>
          <div className="flex items-center gap-8 xm:hidden sm:hidden">
            {navigationItems.map((item) => (
              <a
                href={item.href}
                key={item.id}
                className="text-[15px] font-medium leading-tight text-gray-700 hover:text-[#183EC2] transition-colors"
              >
                {item.title}
              </a>
            ))}
            <Button
              className="text-white bg-[#183EC2] px-6 py-2.5 rounded-lg font-medium hover:bg-[#010D3E] transition-colors"
              title="Get for free"
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="fixed w-full top-0 z-50 hidden xm:block sm:block">
        <MobileMenu />
      </div>
    </>
  );
}
