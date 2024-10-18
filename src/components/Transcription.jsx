import React from "react";

export default function Transcription(props) {
  const { output } = props;
  const finaltext = output.map((val) => val.text);
  return <div>{finaltext}</div>;
}
