import React, { useState } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "Product" },
    { url: "/services", title: "Services" },
    { url: "/about", title: "About" },
  ];

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "bg-secondary",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "bg-secondary",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-neutral rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-neutral rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-neutral rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <>
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-secondary text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <a href={link.url}>{link.title}</a>
                </motion.div>
              ))}
              <button className="flex gap-2 font-bold rounded-3xl border-2 border-solid bg-neutral text-primary text-xl lg:text-base px-12 py-6 leading-7">
                Login
              </button>
            </motion.div>
          </>
        )}
      </div>

      <nav className="hidden md:flex gap-10 justify-center items-center text-base font-semibold px-12">
        <a
          href="#product"
          className="self-stretch my-auto leading-7 text-neutral"
        >
          Product
        </a>
        <a
          href="#services"
          className="self-stretch my-auto leading-7 text-neutral"
        >
          Services
        </a>
        <a
          href="#about"
          className="self-stretch my-auto leading-7 text-neutral"
        >
          About
        </a>
        <button className="gap-2 self-stretch px-10 py-2 my-auto font-bold rounded-3xl border-2 border-solid text-primary bg-neutral max-md:px-5">
          Log In
        </button>
      </nav>
    </>
  );
};

export default Navigation;
