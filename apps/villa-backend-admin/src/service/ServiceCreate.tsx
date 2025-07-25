import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VillaTitle } from "../villa/VillaTitle";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
        <ReferenceInput source="villa.id" reference="Villa" label="Villa">
          <SelectInput optionText={VillaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
