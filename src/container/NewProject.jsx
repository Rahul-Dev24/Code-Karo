import React, { useState, useEffect } from "react";
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import SplitPane from "react-split-pane";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Link } from "react-router-dom";
import { MdCheck, MdEdit } from "react-icons/md";

const NewProject = () => {
  const [html, sethtml] = useState(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1> Let's Start Code with Rahul-Dev24 </h1>
  </body>
  </html>`);

  const [css, setcss] = useState(`* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}`);

  const [javaScript, setjavaScript] = useState(`console.log("Hello World");`);
  const [output, setoutput] = useState("");

  useEffect(() => {
    updateOutput();
  }, [html, css, javaScript]);

  const updateOutput = () => {
    const combinedOutput = `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Rahul-dev24</title>
      <style>
      ${css}
      </style>
  </head>
  <body>
      ${html}
      <script>${javaScript}</script>
  </body>
  </html>
      `;
    setoutput(combinedOutput);
  };

  const [isTitle, setisTitle] = useState("");
  const [title, settitle] = useState("Untitle");

  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden newProject">
      {/* aleart section */}

      {/* header section */}

      <header className="w-full flex px-12 py-4 items-center justify-between">
        <div className="flex items-center justify-center gap-6">
          <Link to="home/project">
            <img
              src="/logo.png"
              className="w-32 h-auto object-contain logoImg"
              alt=""
            />
          </Link>
          <div className="flex flex-col items-start justify-start">
            {/* title section */}
            <div className="flex items-center justify-center gap-3">
              {isTitle ? (
                <>
                  <input
                    type="text"
                    // key={TitleInput}
                    placeholder="Your Title"
                    value={title}
                    onChange={(e) => {
                      settitle(e.target.value);
                    }}
                  />
                </>
              ) : (
                <>
                  <p className="px-3 py-2 text-white text-xl">{title}</p>
                </>
              )}

              {isTitle ? (
                <>
                  <div
                    className="cursor-pointer"
                    onClick={() => setisTitle(false)}
                    key={"MdCheck"}
                  >
                    <MdCheck className="text-2xl text-emerald-500" />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="cursor-pointer"
                    onClick={() => setisTitle(true)}
                    key={"MdEdit"}
                  ></div>
                  <MdEdit className="text-2xl text-primaryText" />
                </>
              )}
            </div>

            {/* follow section */}
          </div>
        </div>
      </header>

      {/* coding section */}
      <div>
        {/* vertical */}
        <SplitPane
          split="horizontal"
          minSize={90}
          maxSize={-100}
          defaultSize={"60%"}
        >
          {/* top coding section */}
          <SplitPane split="vertical" defaultSize={"40%"} maxSize={600}>
            {/* html */}
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between bg-[black]">
                <div className="bg-secondary px-4 py-2 border-t-4 flex gap-3 items-center justify-center ">
                  <FaHtml5 className="text-red-500 text-xl" />
                  <p className="text-primaryText font-semibold border-t-gray-500">
                    HTML
                  </p>
                </div>
                {/* icons */}
                <div className="flex items-center justify-center cursor-pointer gap-5 px-4">
                  <FcSettings className="text-xl text-primaryText" />
                  <FaChevronDown className="text-xl text-primaryText" />
                </div>
              </div>
              <div className="w-full px-2">
                <CodeMirror
                  className="text-[16px]"
                  value={html}
                  height="600px"
                  theme={"dark"}
                  extensions={[javascript({ jsx: true })]}
                  onChange={(value, viewUpdate) => {
                    sethtml(value);
                  }}
                />
              </div>
            </div>

            {/* css */}
            <SplitPane split="vertical" defaultSize={"40%"} maxSize={500}>
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between bg-[black]">
                  <div className="bg-secondary px-4 py-2 border-t-4 flex gap-3 items-center justify-center ">
                    <FaCss3 className="text-sky-500 text-xl" />
                    <p className="text-primaryText font-semibold border-t-gray-500">
                      CSS
                    </p>
                  </div>
                  {/* icons */}
                  <div className="flex items-center justify-center cursor-pointer gap-5 px-4">
                    <FcSettings className="text-xl text-primaryText" />
                    <FaChevronDown className="text-xl text-primaryText" />
                  </div>
                </div>
                <div className="w-full px-2">
                  <CodeMirror
                    className="text-[15px] w-full"
                    value={css}
                    height="600px"
                    theme={"dark"}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setcss(value);
                    }}
                  />
                </div>
              </div>
              {/* js */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between bg-[black]">
                  <div className="bg-secondary px-4 py-2 border-t-4 flex gap-3 items-center justify-center ">
                    <FaJs className="text-yellow-500 text-xl" />
                    <p className="text-primaryText font-semibold border-t-gray-500">
                      JS
                    </p>
                  </div>
                  {/* icons */}
                  <div className="flex items-center justify-center cursor-pointer gap-5 px-4">
                    <FcSettings className="text-xl text-primaryText" />
                    <FaChevronDown className="text-xl text-primaryText" />
                  </div>
                </div>
                <div className="w-full px-2">
                  <CodeMirror
                    className="text-[15px] w-full"
                    value={javaScript}
                    height="600px"
                    theme={"dark"}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setjavaScript(value);
                    }}
                  />
                </div>
              </div>
            </SplitPane>
          </SplitPane>
          {/* bottom result coding section */}
          <div
            className="bg-white w-full h-full"
            style={{ overflow: "hidden", height: "100%" }}
          >
            <iframe
              srcDoc={output}
              style={{ border: "none", width: "100%", height: "100%" }}
              frameborder="0"
              title="Result"
            />
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default NewProject;
