import React from "react";
import { useNavigate } from "react-router";

const HistorySample = () => {
    
    const navigate = useNavigate();


  return (
    <div>
      <button onClick={()=>navigate(-1)}>뒤로가기</button>
      <button onClick={()=>navigate(-2)}>2칸뒤로가기</button>
      <button onClick={()=>navigate('/')}>홈으로</button>
    </div>
  );
};

export default HistorySample;
