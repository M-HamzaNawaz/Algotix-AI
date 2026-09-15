import React, { ReactNode } from "react";

export const renderStyledTitle = (
  title: string,
  highlightClass: string = "text-primary",
): ReactNode[] => {
  const words: string[] = title.split(" ");

  return words.map((word: string, index: number): ReactNode => {
    const middleTwoWords: boolean = index >= 2 && index < 4;

    return (
      <React.Fragment key={index}>
        {index > 0 && " "}
        <span className={middleTwoWords ? highlightClass : ""}>{word}</span>
      </React.Fragment>
    );
  });
};
