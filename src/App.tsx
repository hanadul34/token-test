import React, { FC, useState } from "react";
import { Palette } from "../components/themes/tokens";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const errorCss = css({
  color: "red",
  fontWeight: "bold",
});

function App(a: Pick<Palette, "primary30">) {
  const [theme, setTheme] = useState("dark");
  console.log("a.$value => ", a.primary30);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <Image0 src={""} width={300} />
      <StyledComponent0 label="Important?" />
      <StyledComponent1 label="No need to re-type this label prop." />
      <StyledComponent2 bgColor="blue" label="Some more cool text" />
      <p css={errorCss}>errorCss test</p>
    </>
  );
}

export default App;

type ImageProps = {
  src: string;
  width: number;
};

const Image0 = styled.div<ImageProps>`
  width: ${(props) => props.width};
  background: url(${(props) => props.src}) center center;
  background-size: contain;
`;

interface ComponentProps {
  className?: string;
  label: string;
}
interface StyledComponentProps {
  bgColor: string;
}

const Component: FC<ComponentProps> = ({ label, className }) => (
  <div className={className}>{label}</div>
);

const StyledComponent0 = styled(Component)`
  color: ${(props) => (props.label === "Important" ? "red" : "green")};
`;

const StyledComponent1 = styled(Component)({
  color: "red",
});

const StyledComponent2 = styled(Component)<StyledComponentProps>((props) => ({
  color: "white",
  backgroundColor: props.label ? props.bgColor : "white",
}));
