import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { PricingRuleTitle } from "../pricingRule/PricingRuleTitle";

export const ServicePackageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="bookings" reference="Booking">
          <SelectArrayInput
            optionText={BookingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="pricingRules" reference="PricingRule">
          <SelectArrayInput
            optionText={PricingRuleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
