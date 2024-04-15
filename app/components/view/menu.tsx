"use client ";

import {
  MenuWrapper,
  MenuContent,
  MenuLeft,
  MenuRight,
  MenuText,
  MenuBranch,
  MenuCity,
  MenuAdress,
  ContactButton,
  ButtonL,
  ButtonH,
} from "@/app/lib/styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

export const Menu = ({
  open,
  x,
  y,
}: {
  open: boolean;
  x: string | number | undefined;
  y: string | number | undefined;
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(ref?.current, {
      clipPath: `circle(0px at ${x}px ${y}px)`,
    });
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [x, y]);

  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (open && !isOpen) {
      gsap.to(ref?.current, {
        clipPath: `circle(${windowWidth}px at calc(${x}px + 50%) calc(${y}px + 50%))`,
        duration: 0.8,
        delay: 0.1,
        onComplete: () => {
          setIsOpen(true);
        },
      });

      
    }
    if (isOpen) {
      gsap.to(ref?.current, {
        clipPath: `circle(0px at calc(${x}px + 2.3%) calc(${y}px + 2.3%))`,
        duration: 0.8,
        delay: 0.1,
        onComplete: () => {
          setIsOpen(false);
        },
      });
    }
  }, [open]);

  return (
    <>
      <MenuWrapper ref={ref}>
        <MenuContent>
          <MenuLeft>
            <MenuText>Services</MenuText>
            <MenuText>Projects</MenuText>
            <MenuText>Agency</MenuText>
            <MenuText>Threads</MenuText>
            <MenuText>Say Hello</MenuText>
          </MenuLeft>
          <MenuRight>
            <MenuBranch>
              <MenuCity>Lugano</MenuCity>
              <hr />
              <MenuAdress>
                <div></div>
                <ContactButton></ContactButton>
              </MenuAdress>
            </MenuBranch>
          </MenuRight>
        </MenuContent>
      </MenuWrapper>
    </>
  );
};
