import React from "react";
import Confetti from "react-confetti";
import CSSTransition from "react-transition-group/CSSTransition";

const confetti = React.memo(props => {
  return (
    <CSSTransition
      in={props.buy}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames="animationOpacity"
    >
      <div className="confetti">
        <Confetti
          width={props.width}
          height={props.height}
          numberOfPieces={500}
        />
      </div>
    </CSSTransition>
  );
});

export default confetti;
