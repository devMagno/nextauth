import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRAuth } from "../utils/withSSRAuth";
import { api } from "../services/apiClient";
import { setupAPIClient } from "../services/api";
import decode from "jwt-decode";

export default function Metrics() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").then((response) => {
      console.log(response);
    });
  }, []);

  return <h1>Metrics</h1>;
}

export const getServerSideProps = withSSRAuth(
  async (context) => {
    const apiClient = setupAPIClient(context);
    const response = await apiClient.get("/me");

    console.log(response);

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"],
  }
);
