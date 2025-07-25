import { ServicePackage as TServicePackage } from "../api/servicePackage/ServicePackage";

export const SERVICEPACKAGE_TITLE_FIELD = "name";

export const ServicePackageTitle = (record: TServicePackage): string => {
  return record.name?.toString() || String(record.id);
};
