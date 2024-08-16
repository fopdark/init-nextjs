import { getAbout } from "@/services/introduce";
import React from "react";

async function Introduce(props: any) {
  const data = await getAbout({});
  const htmlContent = { __html: data?.content || <p>Empty</p> };
  return (
    <>
      {data && (
        <div
          className="p-5 ck-content text-black"
          dangerouslySetInnerHTML={htmlContent}
        ></div>
      )}
    </>
  );
}

export default Introduce;
