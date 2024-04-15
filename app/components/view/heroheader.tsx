"use client";

import {
  HeaderCursorPointer,
  HeroHeaderWrapper,
  Cursor,
  CircleTitle,
  CircleTitleText,
  WheelLineSvg,
  WheelWheel,
  WheelWrapper,
} from "@/app/lib/styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export const HeaderHero = () => {
  useGSAP(() => {
    gsap.set(".circle", {
      backgroundColor: "rgb(135, 158, 237)",
      clipPath: "circle(0)",
    });

    gsap.to(".circle", {
      clipPath: "circle(100%)",
      duration: 1.5,
      delay: 0.1,
    });
  });

  return (
    <>
      <HeroHeaderWrapper>
        <HeaderCursorPointer>
          <Cursor>
            <CircleTitle>
              <CircleTitleText>Digital</CircleTitleText>
              <CircleTitleText>Strategy</CircleTitleText>
            </CircleTitle>
          </Cursor>
        </HeaderCursorPointer>
        <WheelWrapper>
          <WheelLineSvg />
          <WheelWheel />
        </WheelWrapper>
      </HeroHeaderWrapper>
    </>
  );
};
