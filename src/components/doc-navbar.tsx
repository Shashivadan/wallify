import React from "react";
import { Github, Twitter } from "lucide-react";
import { Banner } from "fumadocs-ui/components/banner";
import Image from "next/image";

const DocNavBar = () => {
  return (
    <Banner
      variant="rainbow"
      className="bg-transparent backdrop-blur-sm flex justify-between"
    >
      <div className="">
        <div className="flex items-center space-x-2">
          <Image
            src={"/icon.png"}
            alt="Wallify Logo"
            width={30}
            height={30}
            className="h-5 w-5"
          />
          <span className="text-lg font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
            Wallify
          </span>
        </div>
      </div>
      <div className=" flex gap-2">
        <a target="_blank" href="https://github.com/shashivadan/wallify">
          <Image
            src={"/github.svg"}
            alt="Wallify Logo"
            width={30}
            height={30}
            className="h-7 w-7"
          />
        </a>
        <a target="_blank" href="https://twitter.com/shashivadan99">
          <Image
            src={"/x.svg"}
            alt="Wallify Logo"
            width={30}
            height={30}
            className="h-7 w-7"
          />
        </a>
      </div>
    </Banner>
  );
};

export default DocNavBar;
