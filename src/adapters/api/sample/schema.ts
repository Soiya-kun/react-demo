import { Sample } from "@/entities/sample";

export type SampleSchema = {
  id: string;
  lastName: string;
  firstName: string;
};

export const SampleDBSchemaToEntity = (ss: SampleSchema): Sample => ({ ...ss });
