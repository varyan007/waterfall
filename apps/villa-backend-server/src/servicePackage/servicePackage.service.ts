import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServicePackageServiceBase } from "./base/servicePackage.service.base";

@Injectable()
export class ServicePackageService extends ServicePackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
