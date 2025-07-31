import React, { useEffect, useRef, useState } from "react";
import {} from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activateNewUserApi } from "../../services/authAPI";
const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const [response, setResponse] = useState({});
  const shouldFetchRef = useRef(true);
  const navigate = useNavigate();

  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");
  console.log(sessionId, t);

  useEffect(() => {
    // setResponse()
    // console.log(shouldFetchRef.current);
    if (sessionId && t && shouldFetchRef.current) {
      (async () => {
        const result = await activateNewUserApi({ sessionId, t });
        setResponse(result);
        setIsPending(false);
      })();
      shouldFetchRef.current = false;
    }
    if (response.status === "success") {
      setTimeout(() => {
        response.status === "success" && navigate("/login");
      }, 3000);
    }
  }, [sessionId, t, response.status, navigate]);
  console.log(response);
  return (
    <div className="py-5 p-5">
      {isPending && (
        <div className="m-auto" style={{ width: "450px" }}>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="info" />
          </div>
          <div>
            Please do not go back or refresh the browser. Please wait.....!
          </div>
        </div>
      )}

      {response?.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};

export default VerifyUser;
