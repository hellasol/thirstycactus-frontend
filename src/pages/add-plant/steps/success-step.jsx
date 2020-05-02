import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

export function SuccessStep({ plant }) {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => history.push("/"), 3000);
  }, []);

  return <p>Success!</p>;
}
