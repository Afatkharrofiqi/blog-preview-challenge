import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Preview Card",
};

export default function Home() {
  return (
    <div
      role="home"
      className="min-h-svh bg-[#F4D04E] text-black grid grid-cols-4 xl:grid-cols-12 gap-6 px-6 place-items-center"
    >
      <div className="xl:col-start-5 col-span-4 bg-white rounded-[1.25rem] border-[1px] border-gray-950 w-[20.4375rem] xl:w-96 flex flex-col p-6 gap-6 shadow-[10px_10px_0px_0px_#000]">
        <img
          src="images/illustration-article.svg"
          alt="ilustration"
          className="rounded-[0.625rem]"
        />
        <div className="flex flex-col gap-3 items-start">
          <p className="px-3 py-1 gap-2 justify-center items-center bg-[#F4D043] text-gray-950 font-extrabold text-[0.875rem] leading-[150%]">
            Learning
          </p>
          <p className="text-gray-950 text-[0.875rem] leading-[150%] font-medium">
            Published 21 Dec 2023
          </p>
          <p className="text-gray-950 font-extrabold text-2xl leading-[150%] hover:text-[#F4D043] cursor-pointer">
            HTML & CSS foundations
          </p>
          <p className="font-medium text-base leading-[150%] text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <img src="images/image-avatar.webp" alt="avatar" className="size-8" />
          <p className="font-extrabold leading-[0.875rem] tracking-normal text-[0.875rem]">
            Greg Hooper
          </p>
        </div>
      </div>
    </div>
  );
}
