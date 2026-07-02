import { Fragment, ReactNode } from "react";

export function renderInlineFormatting(text: string): ReactNode[] {
  return text.split(/(\*\*.*?\*\*)/g).map((segment, index) => {
    const isBold = segment.startsWith("**") && segment.endsWith("**");

    if (!isBold) {
      return <Fragment key={`${segment}-${index}`}>{segment}</Fragment>;
    }

    return (
      <strong key={`${segment}-${index}`} className="font-bold">
        {segment.slice(2, -2)}
      </strong>
    );
  });
}
