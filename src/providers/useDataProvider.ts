import { useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import { DataProvider } from "react-admin";
import pgDataProvider from "ra-postgraphile";

export const useDataProvider = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );
  const client = useApolloClient();

  useEffect(() => {
    (async () => {
      const dataProvider = await pgDataProvider(client);
      setDataProvider(() => dataProvider);
    })();
  }, []);

  return dataProvider;
};
