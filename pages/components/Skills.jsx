import Image from "next/image";
import React from "react";
import Html from "../images/html.png";
import Css from "../images/css.png";
import Javascript from "../images/js.png";
import ReactImg from "../images/react.png";
import Tailwind from "../images/tailwind.png";
import Github from "../images/github.png";
import Firebase from "../images/firebase.png";
import NextJS from "../images/nextjs.png";
import vscode from "../images/vscode.png";
import postman from "../images/postman.png";
import npm from "../images/npm.png";
import figma from "../images/figma.png";
import git from "../images/git.png";
import Mongo from "../images/mongo.png";
import Python from "../images/python.jpeg";
import Bootstrap from "../images/bootstrap.png";
import Navbar from "./Navbar";

const Skills = () => {
  return (
    <>
      <Navbar />
      <div id="skills" className="w-full lg:h-screen mb-10">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center pt-7 sm:pt-20 md:pt-10 p-7">
          <p className="uppercase block text-center text-3xl xs:text-4xl md:text-5xl font-serif italic p-5">
            Skills
          </p>
          <h2 className="py-4 text-lg">These are the programming languages and frameworks with which I possess extensive experience:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <ProgressBar progressPercentage="70"/> */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Html} width="60px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Css} width="60px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Javascript} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={ReactImg} width="70px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>React JS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Tailwind} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Firebase} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Github} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Github</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={NextJS} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Next JS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Mongo} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>MongoDB</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Python} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Python</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Bootstrap} width="80px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
          </div>
          <p className="uppercase block text-center text-3xl xs:text-4xl md:text-5xl font-serif italic pt-10">
            Tools
          </p>
          <h2 className="py-4 text-lg">These are the tools I utilize to create exceptional websites:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={vscode} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Visual Studio Code</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={postman} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Postman</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={npm} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>NPM</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={figma} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>Figma</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={git} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center text-sm">
                  <h3>GIT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
    </>
  );
};

export default Skills;
