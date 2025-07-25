/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BookingUpdateManyWithoutAmenitiesInput {
  @Field(() => [BookingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookingWhereUniqueInput],
  })
  connect?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookingWhereUniqueInput],
  })
  disconnect?: Array<BookingWhereUniqueInput>;

  @Field(() => [BookingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BookingWhereUniqueInput],
  })
  set?: Array<BookingWhereUniqueInput>;
}

export { BookingUpdateManyWithoutAmenitiesInput as BookingUpdateManyWithoutAmenitiesInput };
