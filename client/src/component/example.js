import React from "react";
import styled from "styled-components";
import { Title, Button, Wrapper, TomatoButton } from "./util.js";

function StyledComponentExample() {
  const onclickEvent = (e) => {
    e.preventDefault();
    alert("normal clicked");
  };

  return (
    <div className="StyledComponentExample">
      <Wrapper>
        <Title>test</Title>
        <Button onClick={onclickEvent}>Normal</Button>
        <Button primary yellow>
          Primary
        </Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </Wrapper>
    </div>
  );
}

export default StyledComponentExample;
