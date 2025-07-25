import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AmenityTitle } from "../amenity/AmenityTitle";
import { ServicePackageTitle } from "../servicePackage/ServicePackageTitle";
import { UserTitle } from "../user/UserTitle";
import { VillaTitle } from "../villa/VillaTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="amenity.id" reference="Amenity" label="Amenity">
          <SelectInput optionText={AmenityTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateFrom" source="dateFrom" />
        <DateTimeInput label="dateTo" source="dateTo" />
        <ReferenceInput
          source="servicePackage.id"
          reference="ServicePackage"
          label="ServicePackage"
        >
          <SelectInput optionText={ServicePackageTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="villa.id" reference="Villa" label="Villa">
          <SelectInput optionText={VillaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
