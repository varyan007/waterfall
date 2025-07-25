import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VillaServiceBase } from "./base/villa.service.base";

@Injectable()
export class VillaService extends VillaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
