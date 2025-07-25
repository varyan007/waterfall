import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SERVICEPACKAGE_TITLE_FIELD } from "../servicePackage/ServicePackageTitle";

export const PricingRuleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
