import { useState } from "react";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin-top: 40 auto 40 auto ;
  border-color: red;
`;

const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#4A90E2");

  return (
    <div className="sweet-loading">
      <PulseLoader color={color} loading={loading} css={override} size={40} margin={10}/>
    </div>
  );
}

export default Loading