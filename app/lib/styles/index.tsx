"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

export const Header = styled.header`
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: max(14px, 3%);
  color: var(--primary);
  transition: color 0.5s var(--transition-interface-delay) ease @media only
    screen and (min-width: 1024px) {
    height: 150px;
    padding: 0 6%;
  }
`;

export const HeaderMenu = styled.div`
  position: relative;
  z-index: 0;
  display: grid;
  width: 60px;
  height: 60px;
  cursor: pointer;
  place-items: center;
  &::before {
    z-index: -1;
    background-color: var(--page-header-button-background, #fff);
    transform: scale(1);
    position: absolute;
    border-radius: 9999px;
    content: "";
    inset: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.63, 0.02, 0.05, 1);
  }
  &::after {
    background-color: var(--page-header-button-background, currentColor);
    transform: scale(0);
    position: absolute;
    border-radius: 9999px;
    content: "";
    inset: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.63, 0.02, 0.05, 1);
  }
`;

export const MenuSvg = () => {
  return (
    <svg viewBox="0 0 60 60">
      <path
        fill="none"
        stroke="#c02322"
        stroke-linecap="round"
        stroke-width="2"
        d="M15 35h30"
      ></path>
      <path
        fill="none"
        stroke="#c02322"
        stroke-linecap="round"
        stroke-width="2"
        d="M15 25h30"
      ></path>
    </svg>
  );
};


const HeaderEye = keyframes`
  0% {
      transform: scaleY(1);
    }

    10% {
      transform: scaleY(1);
    }

    12% {
      transform: scaleY(0);
    }

    14% {
      transform: scaleY(1);
    }

    18% {
      transform: scaleY(1);
    }

    20% {
      transform: scaleY(0);
    }

    22% {
      transform: scaleY(1);
    }
`;

export const HeaderLogo = styled.a`
  position: relative;
  --logo-width: clamp(115px, 20vw, 185px);
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  cursor: pointer;
  display: grid;
  overflow: hidden;
  width: clamp(115px, 20vw, 185px);
  height: 100%;
  place-items: center;
  transform: translateX(-50%) translateY(-50%);
  @media (hover: hover) and (pointer: fine) {
    &:before {
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      box-shadow: 0 0 0 50px var(--primary);
      content: "";
      transform: translateX(-50%) translateY(-50%) scale(0);
      transition-duration: 0.5s;
      transition-property: transform, box-shadow;
      transition-timing-function: cubic-bezier(0.63, 0.02, 0.05, 1);
    }

    & g {
      transition-duration: 0.5s;
      transition-property: transform, box-shadow;
      transition-timing-function: cubic-bezier(0.63, 0.02, 0.05, 1);
    }
    & svg * {
      transform-box: fill-box;
      transform-origin: center center;
    }
  }
  &:hover::before {
    box-shadow: 0 0 0 2px var(--primary);
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
  &:hover g:first-child {
    transform: translateX(-105%);
  }
  &:hover g:last-child {
    transform: translateX(-300%) translateY(4%) scale(1.6);
  }
  &:hover g:last-child > :first-child {
    animation: ${HeaderEye} 6s ease infinite;
  }
`;


export const SaySocialSvg = () => {
  return (
    <svg viewBox="9 16 165 40">
      <g>
        <path d="M23.028 28.803a22.856 22.856 0 0 0-3.908-.832l-.329-.045c-3.273-.466-4.637-1.336-4.637-2.925 0-1.646 1.938-2.807 4.74-2.807.3 0 .6.014.894.042a10.559 10.559 0 0 1 5.22 1.98l1.557-3.6a14.038 14.038 0 0 0-3.555-1.622c-.094-.033-.188-.061-.282-.089a14.705 14.705 0 0 0-3.957-.547c-.174 0-.348 0-.517.009-5.037.169-8.479 2.864-8.479 6.7a5.48 5.48 0 0 0 2.05 4.609 7.712 7.712 0 0 0 1.764 1.025 18.455 18.455 0 0 0 5.022 1.2c3.546.419 5.126 1.322 5.126 3.033 0 1.806-1.9 2.934-4.9 2.934a11.758 11.758 0 0 1-7.289-2.45l-1.651 3.819a15.972 15.972 0 0 0 8.94 2.662c5.61 0 9.349-2.808 9.349-7.031-.004-2.99-1.626-4.937-5.158-6.065Z"></path>
        <path d="M43.094 27.387a7.231 7.231 0 0 0-5.514-2.258c-4.579 0-7.74 3.419-7.74 8.32s3.161 8.32 7.74 8.32a7.19 7.19 0 0 0 5.514-2.29l.29 1.935h3.709v-15.93h-3.709ZM38.45 38.029a4.584 4.584 0 1 1 4.386-4.579 4.3 4.3 0 0 1-4.385 4.579Z"></path>
        <path d="m57.737 36.577-4.03-11.094h-4.613l6.255 15.742-3.442 7.976h4.613l10.247-23.716h-4.646Z"></path>
        <path d="M82.024 28.802a22.905 22.905 0 0 0-3.908-.832l-.329-.042c-3.273-.466-4.637-1.336-4.637-2.925 0-1.646 1.938-2.807 4.74-2.807.3 0 .6.014.893.042a10.562 10.562 0 0 1 5.22 1.98l1.557-3.6a14.045 14.045 0 0 0-3.555-1.622c-.094-.033-.188-.061-.282-.089a14.713 14.713 0 0 0-3.955-.55c-.174 0-.348 0-.517.009-5.037.169-8.479 2.864-8.479 6.7a5.48 5.48 0 0 0 2.05 4.609 7.743 7.743 0 0 0 1.764 1.025 18.478 18.478 0 0 0 5.022 1.2c3.546.418 5.126 1.321 5.126 3.033 0 1.806-1.9 2.935-4.9 2.935a11.757 11.757 0 0 1-7.289-2.45l-1.651 3.818a15.969 15.969 0 0 0 8.94 2.662c5.61 0 9.349-2.807 9.349-7.031-.005-2.99-1.627-4.939-5.159-6.065Z"></path>
        <path d="M97.45 25.13c-5.257 0-8.611 3.451-8.611 8.32s3.354 8.32 8.611 8.32 8.61-3.451 8.61-8.32-3.354-8.32-8.61-8.32Zm0 12.9a4.585 4.585 0 1 1 4.353-4.579 4.313 4.313 0 0 1-4.353 4.579Z"></path>
        <path d="M116.46 38.03a4.58 4.58 0 0 1 0-9.159 4.927 4.927 0 0 1 3.482 1.419l2.483-2.676a8.577 8.577 0 0 0-6.127-2.484c-5.128 0-8.578 3.354-8.578 8.32 0 5.063 3.386 8.32 8.643 8.32a8.646 8.646 0 0 0 6.289-2.58l-2.515-2.709a5.045 5.045 0 0 1-3.677 1.549Z"></path>
        <path d="M126.812 18.358a2.488 2.488 0 1 0 2.644 2.515 2.492 2.492 0 0 0-2.644-2.515Z"></path>
        <path d="M124.651 25.485h4.289v15.931h-4.289z"></path>
        <path d="M144.666 27.388a7.231 7.231 0 0 0-5.514-2.258c-4.579 0-7.74 3.419-7.74 8.32s3.161 8.32 7.74 8.32a7.19 7.19 0 0 0 5.514-2.29l.29 1.935h3.709v-15.93h-3.709Zm-4.644 10.642a4.584 4.584 0 1 1 4.386-4.579 4.3 4.3 0 0 1-4.386 4.579Z"></path>
      </g>
      <g>
        <path d="M162.931 30.091a2.486 2.486 0 1 0-2.612-2.452 2.452 2.452 0 0 0 2.612 2.452Z"></path>
        <path d="m162.827 44.307-1.451-2.967a4.429 4.429 0 0 1-2.193.548c-1.645 0-2.515-1.065-2.515-2.967V18.357h-8v3.553h3.682v17.108c0 4.16 2.483 6.514 6.03 6.514a8.962 8.962 0 0 0 4.447-1.225Z"></path>
        <path d="M166.545 41.414v.376a7.784 7.784 0 0 1-.9 3.485 7.593 7.593 0 0 1-2.393 2.657 7.416 7.416 0 0 1-3.325 1.237 8.093 8.093 0 0 1-.894.056h-1.114l-1.251-.024v4.03l1.251-.024 1.147-.014a13.282 13.282 0 0 0 1.364-.108 11.346 11.346 0 0 0 8.554-6.067 11.546 11.546 0 0 0 1.242-5.225v-.379Z"></path>
      </g>
    </svg>
  );
};

export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const HeaderButton = styled.a`
  color: var(--primary);
  box-shadow: inset 0 0 0 2px currentcolor;
  position: relative;
  z-index: 0;
  display: inline-flex;
  justify-content: center;
  border-radius: 9999px;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
  font-family: var(--font-family-sans-serif-2-bold);
  line-height: 1.5;
  text-decoration: none;
`;

export const ButtonLabel = styled.span`
  height: 60px;
  padding: 0 28px;
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  margin-top: 0.2em;
`;

export const TextChildren = (props: any) => {
  return props.children.split("").map((text: string, index: number) => {
    return <span key={index}>{text}</span>;
  });
};

export const ButtonBubble = styled.span`
  position: absolute;
  display: grid;
  border-radius: inherit;
  background: var(--page-header-button-background, #fff);
  inset: 0;
  place-items: center;
  transform: scale(0);
  transition: transform 0.3s ease 0.05s;
  color: var(--primary);

  & > img {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    width: auto;
    height: 80px;
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    transition: all 0.4s ease;
  }
`;

export const ButtonHover = styled.span`
  position: absolute;
  z-index: 2;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  inset: 0;
  margin-top: 0.2em;
`;

export const HeroHeaderWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  color: #fff;
  inset: 0;
`;

export const HeaderCursorPointer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Link className="cursorpointer" href={``}>
      {children}
    </Link>
  );
};

export const Cursor = ({ children }: { children: React.ReactNode }) => {
  return <span className="circle">{children}</span>;
};

export const CircleTitle = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CircleTitleText = styled.div`
  font-size: clamp(56px, 12vw, 202px);
  line-height: 1.1;
`;

export const NewsBtn = styled.div`
  --width: 140px;
  position: fixed;
  z-index: var(--z-index-news);
  bottom: 0;
  left: 0;
  display: flex;
  width: var(--width);
  height: var(--width);
  align-items: flex-end;
  padding: 24px 40px;
  color: var(--white-text);
  cursor: pointer;
  font-weight: 700;
  transition: color 0.5s var(--transition-interface-delay) ease;
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 1.5;
  }

  & > img {
    position: absolute;
    top: -46px;
    left: 16px;
    width: calc(var(--width) * 0.45);
    height: auto;
    transform: rotate(45deg);
    transform-origin: center bottom;
    transition: transform 0.3s ease;
  }
`;

export const NewsCircle = styled.span`
  position: absolute;
  z-index: -1;
  bottom: calc(var(--width) * -1);
  left: calc(var(--width) * -1);
  width: calc(var(--width) * 2);
  height: calc(var(--width) * 2);
  border-radius: 50%;
  background: #fff;
  transition-duration: 0.3s;
  transition-property: transform, background;
  transition-timing-function: ease;
`;

export const WheelWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  width: 1000px;
  transform: translateX(-50%) translateY(calc(100% - 100px)) translateZ(0px);
`;

export const WheelLineSvg = () => {
  return (
    <svg
      className="wheel_line__DE_BW"
      width="190"
      height="100"
      stroke="var(--primary)"
    >
      <path
        d="M 10 50 Q 95 30 180 50"
        stroke-width="4"
        stroke-linecap="round"
        fill="transparent"
      ></path>
    </svg>
  );
};

export const WheelWheel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const scrollAmount = event.deltaY;

    let targetIndex;
    if (scrollAmount > 0) {
      targetIndex = (currentIndex + 1) % 12;
    } else {
      targetIndex = (currentIndex - 1 + 12) % 12;
    }

    const nextElementDegree = (targetIndex * (360 / 12)) & 360;

    const currentElementDegree = (currentIndex * (360 / 12)) & 360;

    if (scrollAmount > 0) {
      if (
        nextElementDegree > currentElementDegree &&
        nextElementDegree <= (currentElementDegree + 180) % 360
      ) {
        setCurrentIndex(targetIndex);
      }
    } else {
      if (
        nextElementDegree < currentElementDegree &&
        nextElementDegree >= (currentElementDegree - 180 + 360) % 360
      ) {
        setCurrentIndex(targetIndex);
      }
    }

    console.log("currentIndex", currentIndex);
  };

  useEffect(() => {
    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="wheel_wheel__fnjNS"
    >
      <defs>
        <path
          d="
              M 0, 250
              a 250,250 0 1,1 500,0
              a 250,250 0 1,1 -500,0
            "
          id="textcircle"
        ></path>
      </defs>
      <text
        dy="10"
        textLength="1570.7963267948965"
        className="wheel_title__81w3s text-sans-serif-2-bold"
      >
        <textPath xlinkHref="#textcircle">
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="1">
            Digital Strategy
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan
            className="wheel_pointer__QC4tN"
            data-key="true"
            opacity="0.30000000000000004"
          >
            Content Marketing
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="0.3">
            Brand Positioning
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="0.3">
            Social Media Marketing
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="0.3">
            Seo &amp; UX
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="0.3">
            Google Ads
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="1">
            Digital Strategy
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan
            className="wheel_pointer__QC4tN"
            data-key="true"
            opacity="0.30000000000000004"
          >
            Content Marketing
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="0.3">
            Brand Positioning
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="0.3">
            Social Media Marketing
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="0.3">
            Seo &amp; UX
          </tspan>
          <tspan>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </tspan>
          <tspan className="wheel_pointer__QC4tN" data-key="true" opacity="0.3">
            Google Ads
          </tspan>
        </textPath>
      </text>
    </svg>
  );
};



export const MenuWrapper = styled.div`
  position: fixed;
  z-index: var(--z-index-menu);
  display: grid;
  overflow: auto;
  padding: 130px calc(max(14px, 3%) + 22px) calc(max(14px, 3%) + 22px);
  background: var(--secondary);
  color: #fff;
  gap: 100px;
  inset: 0;
`;

export const MenuContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 80px;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 0;
  }
`;


export const MenuLeft = styled.div`
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.8dvh;
`;


export const MenuRight = styled.div`
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
  justify-content: flex-end;
  gap: min(60px, 6dvh);
  @media only screen and (min-width: 1024px) {
    padding: 0 3%;
  }
`;

export const MenuText = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: clamp(42px, 12vw, 104px);
  background: linear-gradient(
    to bottom,
    currentcolor,
    currentcolor 50%,
    var(--primary) 50%
  );
  -webkit-background-clip: text;
  background-clip: text;
  background-position: 0 0;
  background-size: 100% 200%;
  color: currentcolor;
  gap: clamp(20px, 10%, 80px);
  line-height: 1.1;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.3s ease;
  &::before {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: currentcolor;
    content: "";
    transition: all 0.2s ease;
  }
`;


export const MenuLink = (props:any) => {
    return(
        <MenuText>{ props.children }</MenuText>
    )
}


export const MenuBranch = styled.div`
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
  justify-content: flex-end;
  gap: min(60px, 6dvh);
  @media only screen and (min-width: 1024px) {
    padding: 0 3%;
  }
`;

export const MenuCity = styled.div`
  color: var(--primary);
  padding: 0 20px;
  @media only screen and (min-width: 1024px)  {
    font-size: 34px;
  }
`;

export const MenuAdress = styled.div`
  color: var(--primary);
  padding: 0 20px;
  @media only screen and (min-width: 1024px) {
    font-size: 34px;
  }
`;

export const ContactButton = styled.a`
  color: var(--primary);
  box-shadow: inset 0 0 0 2px currentcolor;
  position: relative;
  z-index: 0;
  display: inline-flex;
  justify-content: center;
  border-radius: 9999px;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
  font-size: 14px;
  line-height: 1.5;
  text-decoration:none;
  @media only screen and (min-width: 1024px) .text-6 {
    font-size: 16px;
  }
`;

export const ButtonL = styled.span`
  height: 40px;
  padding: 0 22px;
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  margin-top: 0.2em;
`;

export const ButtonH = styled.span`
  color: #fff;
  position: absolute;
  z-index: 2;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  inset: 0;
`;


export const MenuSocial = styled.span`
  flex-wrap: wrap;
  align-items: baseline;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  & span {
    color: var(--primary);
    transition: all 0.2s ease;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1.6;
  }

  & a {
    color: var(--primary);
    transition: all 0.2s ease;
    text-decoration:none;
  }
`;



