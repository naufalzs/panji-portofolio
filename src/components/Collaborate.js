import React from "react";
import Image from "next/image";

import data from "@/config";

export default function Collaborate() {
  const { collaborators } = data;

  const collaboratorSection = collaborators.map((collaborator) => (
    <div key={collaborator.fullname} className={`flex gap-x-2 text-lg font-jakarta`}>
      {collaborator.fullname} as a {collaborator.role}
      <div className={`flex gap-x-1`}>
        {collaborator.linkedin && (
          <a href={collaborator.linkedin} target="_blank" rel="noreferrer">
            <Image
              src={"/assets/images/linkedin-icon.svg"}
              width={27}
              height={27}
            />
          </a>
        )}
        {collaborator.medium && (
          <a href={collaborator.medium} target="_blank" rel="noreferrer">
            <Image
              src={"/assets/images/medium-icon.svg"}
              width={27}
              height={27}
            />
          </a>
        )}
        {collaborator.gdrive && (
          <a href={collaborator.gdrive} target="_blank" rel="noreferrer">
            <Image
              src={"/assets/images/gdrive-icon.svg"}
              width={27}
              height={27}
            />
          </a>
        )}
      </div>
    </div>
  ));

  return (
    <div className={`py-[54px]`}>
      <div className={`max-w-[1120px] mx-auto `}>
        <div className={`flex gap-x-3`}>
          <Image src={"/assets/images/flower.svg"} width={40} height={40} />
          <div className={`font-lora font-semibold text-[48px]`}>
            Who’s Collaborate
          </div>
          <Image src={"/assets/images/flower.svg"} width={40} height={40} />
        </div>
        <div className={`mt-7 mb-[54px]`}>
          <Image
            src={"/assets/images/img-collaborate.jpg"}
            width={1122}
            height={675}
          />
        </div>
      </div>
      <div className="relative h-[80px]">
        <Image src={"/assets/images/divider-collaborate.jpg"} layout="fill" />
      </div>
      <div className={`max-w-[1120px] mx-auto pt-[54px]`}>
        <div
          className={`mb-6 flex items-center gap-x-1 font-lora text-medium text-lg`}
        >
          Made with
          <Image src={"/assets/images/green-love.svg"} width={23} height={23} />
          from us
        </div>
        <div className={`mb-3 flex flex-col gap-y-3`}>
          {collaboratorSection}
        </div>
      </div>
    </div>
  );
}
