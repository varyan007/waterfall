import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ServicePackageTitle } from "../servicePackage/ServicePackageTitle";

export const PricingRuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dayOfWeek" source="dayOfWeek" />
        <NumberInput label="priceModifier" source="priceModifier" />
        <TextInput label="ruleName" source="ruleName" />
        <TextInput label="season" source="season" />
        <ReferenceInput
          source="servicePackage.id"
          reference="ServicePackage"
          label="ServicePackage"
        >
          <SelectInput optionText={ServicePackageTitle} />
        </ReferenceInput>
        <TextInput label="specialEvent" source="specialEvent" />
      </SimpleForm>
    </Create>
  );
};
