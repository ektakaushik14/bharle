import React, { useEffect, useRef, useState } from "react";
import "./write.css";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Paragraph from "@editorjs/paragraph";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Underline from "@editorjs/underline";
import LinkAutocomplete from "@editorjs/link-autocomplete";
import Hyperlink from "editorjs-hyperlink";
import InlineSpoilerTool from "editorjs-inline-spoiler-tool";
import AnyButton from "editorjs-button";

import ChangeCase from "editorjs-change-case";
import Tooltip from "editorjs-tooltip";
import Strikethrough from "@sotaproject/strikethrough";
import TextColorPlugin from "editorjs-text-color-plugin";
import InlineImage from "editorjs-inline-image";
import { db } from "../firebase";

import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignIn from "./SignIn";


// blogs



export default function Write() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [editorData, setEditorData] = useState();
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state variable

  const editorRef = useRef();

  const initiator = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      autofocus: true,
      onReady: () => {
        editorRef.current = editor;
      },
      tools: {
        image: {
          class: InlineImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: true,
            },
          },
        },
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4, 5, 6],
          },
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
        },
        delimiter: {
          class: Delimiter,
          inlineToolbar: true,
        },
        marker: {
          class: Marker,
          inlineToolbar: true,
        },
        inlineCode: {
          class: InlineCode,
          inlineToolbar: true,
        },
        underline: {
          class: Underline,
          inlineToolbar: true,
        },
        linkAutocomplete: {
          class: LinkAutocomplete,
          config: {
            endpoint: "http://localhost:8008/searchLinks",
          },
        },
        hyperlink: {
          class: Hyperlink,
          config: {
            placeholder: "Enter a link",
            target: "_blank",
            rel: "nofollow",
          },
          inlineToolbar: true,
        },
        inlineSpoilerTool: {
          class: InlineSpoilerTool,
          inlineToolbar: true,
        },
        changeCase: {
          class: ChangeCase,
          inlineToolbar: true,
        },
        tooltip: {
          class: Tooltip,
          inlineToolbar: true,
        },
        strikethrough: {
          class: Strikethrough,
          inlineToolbar: true,
        },
        textColor: {
          class: TextColorPlugin,
          inlineToolbar: true,
        },
      },
      onChange: async (api, event) => {
        let content = await editor.saver.save();
        setEditorData(content);
      },
    });
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  function getCurrentTimestamp() {
    return Date.now();
  }

  useEffect(() => {
    if (editorRef?.current === null) {
      initiator();
    }
    return () => {
      editorRef?.current?.destroy();
      editorRef.current = null;
    };
  }, [isLoggedIn]);

  const handleSave = async () => {
    setLoader(true);
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        heading: heading,
        subHeading: subHeading,
        image: imageUrl,
        outputData: editorData,
        time: getCurrentTimestamp(),
      });
      setLoader(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return !isLoggedIn ? (
    <SignIn />
  ) : (
    <div className="writeContainer">
      <h1>Write Blog</h1>
      <div className="writeContainerHeader">
        <div>
          <div>Heading</div>
          <input onChange={(e) => setHeading(e.target.value)} type="text" />
        </div>
        <div>
          <div>Subheading</div>
          <input onChange={(e) => setSubHeading(e.target.value)} type="text" />
        </div>
        <div>
          <div>Image Url</div>
          <input onChange={(e) => setImageUrl(e.target.value)} type="text" />
        </div>
      </div>
      <div id="editorjs" className="editorjs"></div>
      <div className="saveEditor">
        <button
          className={
            heading === "" || subHeading === "" || imageUrl === ""
              ? "disabled"
              : ""
          }
          disabled={
            heading === "" || subHeading === "" || imageUrl === ""
              ? true
              : false
          }
          onClick={handleSave}
        >
          {loader ? "Loading" : "Save"}
        </button>
      </div>
    </div>
  );
}
