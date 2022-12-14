import React from "react";
import Button from "../atoms/Button";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import notfoundimg from "../../asset/undraw_page_not_found_re_e9o6.svg";

const NotFound = () => {
  let navigate = useNavigate();
  //link
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="container" style={{marginBottom: 100}}>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="text-center">
              <img
                src={notfoundimg}
                alt="404img"
                style={{ width: 400, height: 400 }}
              />
            </div>
            <div className="text-center">
              <h5 className="fw-bold lh-lg" style={{fontSize: 16}}>
                Page not available yet.
              </h5>
              <Button
                text="Go Back"
                color={colors.yellow}
                onclick={handleClick}
              />
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default NotFound;
