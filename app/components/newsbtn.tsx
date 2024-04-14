import { NewsBtn, NewsCircle } from "../lib/styles";
import Image from "next/image";

export const NewsButton = () => {
  return (
    <>
      <NewsBtn>
        <Image
          src="/assets/hand.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
        <span>Threads</span>
        <NewsCircle></NewsCircle>
      </NewsBtn>
    </>
  );
};
