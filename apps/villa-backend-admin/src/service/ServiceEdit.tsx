import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VillaTitle } from "../villa/VillaTitle";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
        <ReferenceInput source="villa.id" reference="Villa" label="Villa">
          <SelectInput optionText={VillaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
