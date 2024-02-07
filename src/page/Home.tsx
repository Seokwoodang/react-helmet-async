import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Helmet>
        <title>home</title>
        <link
          rel="icon"
          href={`${process.env.PUBLIC_URL}/faviconEx.jpg`}
          data-react-helmet="true"
        />
      </Helmet>
      <div>
        {" "}
        <div>안녕하세요?</div>
        <button onClick={() => navigate(`hello`)}>페이지 이동 버튼</button>
      </div>
    </>
  );
};

export default Home;
