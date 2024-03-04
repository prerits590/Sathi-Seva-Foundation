// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import QuillDeltaToHtmlConverter from "quill-delta-to-html";

function TextDisplay() {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/admin/text/getEditedText"
//         );
//         const data = response.data;
//         if (data.contentDelta) {
//           const delta = JSON.parse(data.contentDelta);
//           const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
//           const htmlContent = converter.convert();
//           setContent(htmlContent);
//         }
//       } catch (error) {
//         console.error("Error retrieving text:", error);
//       }
//     };

//     fetchData();
//   });

  return (
    <div
      className="text-display border-2"
    //   dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default TextDisplay;
