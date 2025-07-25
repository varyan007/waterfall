import { VillaWhereInput } from "./VillaWhereInput";
import { VillaOrderByInput } from "./VillaOrderByInput";

export type VillaFindManyArgs = {
  where?: VillaWhereInput;
  orderBy?: Array<VillaOrderByInput>;
  skip?: number;
  take?: number;
};
