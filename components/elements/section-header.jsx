import React from "react";

export default function SectionHeader({ subTitle, mainTitle }) {
  return (
    <div className="w-full lg:w-1/2">
      <div className="section_title text-center pb-6">
        <h5 className="sub_title">{subTitle}</h5>
        <h4 className="main_title">{mainTitle}</h4>
      </div>
    </div>
  );
}
