import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor() {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
      ["image"],
    ],
  };

  const [value, setValue] = useState("");
  const [storyHTML, setStoryHTML] = useState("");

  const saveStory = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/text/addEditedText",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contentDelta: value }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error saving story:", error);
    }
  };

  const fetchStory = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/text/getEditedText"
      );
      const data = await response.json();
      const contentDelta = data.contentDelta;
      console.log(data);
      setStoryHTML(contentDelta);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  useEffect(() => {
    fetchStory();
  }, []);
  console.log(storyHTML);
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        onChange={setValue}
      />
      <button onClick={saveStory}>Save Story</button>
      <button onClick={fetchStory}>Get Story</button>
      <div
        className="ql-editor    "
        dangerouslySetInnerHTML={{ __html: storyHTML }}
      />
      <div>
        <h1>THIS IS H1 TAG</h1>
        <p>THIS IS P TAG</p>
      </div>
    </div>
  );
}

export default TextEditor;
