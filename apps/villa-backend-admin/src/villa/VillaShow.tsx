import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SERVICEPACKAGE_TITLE_FIELD } from "../servicePackage/ServicePackageTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VILLA_TITLE_FIELD } from "./VillaTitle";

export const VillaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="areaSqrm" source="areaSqrm" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="villaId"
          label="Bookings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <ReferenceManyField
          reference="Service"
          target="villaId"
          label="Services"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
