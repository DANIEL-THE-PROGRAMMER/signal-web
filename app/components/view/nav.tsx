"use client";

import {
  Header,
  HeaderMenu,
  HeaderAction,
  HeaderButton,
  HeaderLogo,
  ButtonBubble,
  ButtonHover,
  ButtonLabel,
  MenuSvg,
  SaySocialSvg,
  TextChildren,
} from "@/app/lib/styles";
import Image from "next/image";
import { Menu } from "./menu";
import { useEffect, useRef, useState } from "react";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const [clickedAt, setClickedAt] = useState<{
    x: number | string | undefined;
    y: number | string | undefined;
  }>({
    x: 0,
    y: 0,
  });
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {


    const pos = ref.current?.getBoundingClientRect();

    console.log(pos)

    setClickedAt({ x: pos?.left, y: pos?.top });
  }, []);

  return (
    <>
      <Menu open={open} x={clickedAt.x} y={clickedAt.y} />
      <Header>
        <span ref={ref} onClick={() => setOpen(!open)}>
          <HeaderMenu>
            <MenuSvg />
          </HeaderMenu>
        </span>
        <HeaderLogo>
          <SaySocialSvg />
        </HeaderLogo>
        <HeaderAction>
          <div>
            <div>
              <HeaderButton>
                <ButtonLabel>
                  <TextChildren>Say Hello</TextChildren>
                </ButtonLabel>
                <ButtonBubble>
                  <Image
                    src="/assets/hand-2.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </ButtonBubble>
                <ButtonHover>
                  <TextChildren>Say Hello</TextChildren>
                </ButtonHover>
              </HeaderButton>
            </div>
          </div>
        </HeaderAction>
      </Header>
    </>
  );
};
