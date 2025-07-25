import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AMENITY_TITLE_FIELD } from "../amenity/AmenityTitle";
import { SERVICEPACKAGE_TITLE_FIELD } from "../servicePackage/ServicePackageTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VILLA_TITLE_FIELD } from "../villa/VillaTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Amenity" source="amenity.id" reference="Amenity">
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
      </SimpleShowLayout>
    </Show>
  );
};
