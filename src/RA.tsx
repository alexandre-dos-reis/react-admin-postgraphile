import { ArticleCreate, ArticleEdit, ArticleList } from "./resources/Articles";
import { useDataProvider } from "./providers/useDataProvider";
import { Admin, Resource } from "react-admin";

export const RA = () => {
    const dataProvider = useDataProvider();
  
    return (
      dataProvider && (
        <Admin dataProvider={dataProvider}>
          <Resource
            name="article"
            list={ArticleList}
            edit={ArticleEdit}
            create={ArticleCreate}
          />
        </Admin>
      )
    );
  };