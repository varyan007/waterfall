import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SERVICEPACKAGE_TITLE_FIELD } from "./ServicePackageTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VILLA_TITLE_FIELD } from "../villa/VillaTitle";

export const ServicePackageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="services" source="services" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="servicePackageId"
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
          reference="PricingRule"
          target="servicePackageId"
          label="PricingRules"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dayOfWeek" source="dayOfWeek" />
            <TextField label="ID" source="id" />
            <TextField label="priceModifier" source="priceModifier" />
            <TextField label="ruleName" source="ruleName" />
            <TextField label="season" source="season" />
            <ReferenceField
              label="ServicePackage"
              source="servicepackage.id"
              reference="ServicePackage"
            >
              <TextField source={SERVICEPACKAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="specialEvent" source="specialEvent" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
