import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Hello = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Helmet>
        <title>Hello</title>
        <link
          rel="icon"
          href={`${process.env.PUBLIC_URL}/faviconTwo.png`}
          data-react-helmet="true"
        />
      </Helmet>
      <div>
        파비콘이 바뀌었는지 확인하라!!
        <button onClick={() => navigate(`/`)}>홈으로 돌아가라</button>
      </div>
    </>
  );
};

export default Hello;
