import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Success() {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Payment successfyll</h1>
      <h2>Reference No.{referenceNum}</h2>
    </div>
  );
}
