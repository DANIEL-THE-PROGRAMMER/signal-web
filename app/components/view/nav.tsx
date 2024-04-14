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

export const Nav = () => {
  return (
    <>
      <Header>
        <HeaderMenu>
          <MenuSvg />
        </HeaderMenu>
        <HeaderLogo>
          <SaySocialSvg />
        </HeaderLogo>
        <HeaderAction>
          <div>
            <div>
              <HeaderButton>
                <ButtonLabel>
                  <TextChildren>
                    Say Hello
                  </TextChildren>
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
