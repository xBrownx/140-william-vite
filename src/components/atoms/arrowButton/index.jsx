import {Wrapper, StyledButton} from "./styles";
import React from "react";

function ArrowButton(props) {
  return (
      <Wrapper>
        <StyledButton onClick={props.onClick} {...props}>
          <img src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/down-arrow.svg"} alt="Arrow" />
        </StyledButton>
      </Wrapper>
  );
}

export default React.memo(ArrowButton);
