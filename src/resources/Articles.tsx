import {
  List,
  Datagrid,
  TextField,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const ArticleList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="title" />
      </Datagrid>
    </List>
  );
};

export const ArticleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

export const ArticleCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);
