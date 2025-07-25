import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AMENITY_TITLE_FIELD } from "./AmenityTitle";
import { SERVICEPACKAGE_TITLE_FIELD } from "../servicePackage/ServicePackageTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VILLA_TITLE_FIELD } from "../villa/VillaTitle";

export const AmenityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Villa" source="villa.id" reference="Villa">
          <TextField source={VILLA_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Booking"
          target="amenityId"
          label="Bookings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Amenity"
              source="amenity.id"
              reference="Amenity"
            >
              <TextField source={AMENITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateFrom" source="dateFrom" />
            <TextField label="dateTo" source="dateTo" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ServicePackage"
              source="servicepackage.id"
              reference="ServicePackage"
            >
              <TextField source={SERVICEPACKAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Villa" source="villa.id" reference="Villa">
              <TextField source={VILLA_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
