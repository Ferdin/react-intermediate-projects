import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

// Logic
/*

- When button is clicked, the "show more" state need to be changed to "show less". 
- if state is show more then collapsedWords = `${children.substring(0, collapsedNumWords)}...`
- else collapsedWords = children;
- 
*/

function TextExpander({
  collapsedNumWords = 15,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  className = "",
  children,
  buttonColor = "blue",
}) {
  const [showState, setShowState] = useState(true);

  function handleShowState() {
    setShowState((show) => !show);
  }
  const collapsedWords = showState
    ? `${children.substring(0, collapsedNumWords)}...`
    : children;
  return (
    <div className={className}>
      {collapsedWords}
      <Button
        handleShowState={handleShowState}
        expandButtonText={expandButtonText}
        expanded={showState}
        collapseButtonText={collapseButtonText}
        buttonColor={buttonColor}
      />
    </div>
  );
}

function Button({
  handleShowState,
  expandButtonText,
  expanded,
  collapseButtonText,
  buttonColor,
}) {
  const style = {
    color: buttonColor,
  };
  return (
    <button onClick={handleShowState} style={style}>
      {expanded ? expandButtonText : collapseButtonText}
    </button>
  );
}
