import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LanguageContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="key" source="key" />
        <TextInput label="language" source="language" />
      </SimpleForm>
    </Edit>
  );
};
