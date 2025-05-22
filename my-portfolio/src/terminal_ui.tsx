"use client";
import React, { useState, useRef, useEffect } from "react";
import myImg from './assets/kaltarang_img.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectsTable = () => (
  <div className="border border-dashed p-2 my-2 text-green-300">
    <table className="w-full text-left border-collapse border-spacing-2">
      <thead className="text-green-400 border-b border-dashed">
        <tr>
          <th>Permission</th>
          <th>Tech</th>
          <th>slug</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            permission: "drwxrwxr-x",
            tech: "Next.js, TypeScript, MongoDB, Express Js, AWS, Tailwind",
            slug: "Kaltarang",
            title: "kaltarang"
          },
          {
            permission: "drwxrwxr-x",
            tech: "Next.js, TypeScript, AWS, MongoDB, Tailwind, Express Js",
            slug: "fintiate",
            title: "Fintiate"
          },
          {
            permission: "drwxrwxr-x",
            tech: "Next.js, TypeScript, Tailwind, AWS, Express Js, MongoDB",
            slug: "pme",
            title: "Prime Marketing Experts"
          },
          {
            permission: "drwxrwxr-x",
            tech: "Next.js, TypeScript, Express Js, MongoDB, AWS, Tailwind",
            slug: "kinfah",
            title: "Kinfah"
          }
        ].map((proj, idx) => (
          <tr key={idx} className="border-t border-dashed">
            <td>{proj.permission}</td>
            <td>{proj.tech}</td>
            <td className="text-green-500">{proj.slug}</td>
            <td>{proj.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-green-500 mt-2">Run: view [slug] (e.g., <code>view kinfah</code>)</p>
  </div>
);

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<React.ReactNode[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim();

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (command === "ls") {
      setHistory((prev) => [
        ...prev,
        <div key={`cmd-${prev.length}`}>{'>>> '} {command}</div>,
        <ProjectsTable key={`table-${prev.length}`} />
      ]);
    } else if (command.startsWith("view ")) {
      const project = command.split(" ")[1];
      const projectDescriptions: Record<string, React.ReactNode> = {
        kaltarang: (
          <div className="mt-2">
            <a
              href="https://kaltarang.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                src={myImg}
                alt="Kaltarang 2025"
                width={400}
                height={250}
                className=" rounded-lg hover:scale-105 transition"
              />
            </a>
            <h2 className="text-green-400 text-xl mt-4 mb-2 font-mono">Kaltarang</h2>
    <p className="text-green-300 font-mono">
      A premier cultural festival platform celebrating art, music, and creativity. Kaltarang brings together diverse talents, offering a vibrant space for artists, performers, and enthusiasts to connect and showcase their work. The platform features event management tools, artist portfolios, ticketing solutions, and community engagement features. With a focus on seamless user experience and robust performance, Kaltarang leverages modern web technologies to deliver a dynamic and interactive environment for cultural exchange and celebration.
    </p>
          </div>
        ),
        fintiate: "Fintiate is a fintech app offering personalized investment insights.",
        pme: "Prime Marketing Experts is a marketing automation tool for small businesses.",
        kinfah: "Kinfah is a community-powered social platform for local events."
      };
      setHistory((prev) => [
        ...prev,
        <div key={`cmd-${prev.length}`}>{'>>> '} {command}</div>,

        projectDescriptions[project]
          ? projectDescriptions[project]
          : `No information found for project '${project}'`
      ]);
    } else if (command !== "") {
      setHistory((prev) => [
        ...prev,
        <div key={`cmd-${prev.length}`}>{'>>> '} {command}</div>,

        `'${command}' is not recognized as a command`
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className="dark:bg-black text-green-500 from-neutral-950 text-lg p-4 rounded-md shadow-lg min-h-[600px]"
      onClick={() => inputRef.current?.focus()}
    >
      <p className="text-green-500 mb-2">$ ~/terminal</p>
      <div className="space-y-1 min-h-[200px]">
        {/* Static Commands Section */}
        <div className="text-green-400">
          <div>Commands</div>
          <div>ls - unlock my featured projects</div>
          <div>view [project-name] - discover more about the project</div>
          <div>clear - clear terminal</div>
        </div>

        {/* Dynamic History */}
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}

        {/* Input prompt */}
        <div className="flex items-center space-x-1">
        <span className="text-green-500">{'>>>'}</span>

          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-green-500 w-full"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
