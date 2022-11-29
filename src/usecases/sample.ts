import { SampleCreate } from "@/entities/dto/sample";
import { Sample } from "@/entities/sample";
import { SampleAPI } from "@/usecases/interfaces/sample";

export const listSamples = async (deps: {
  api: SampleAPI;
}): Promise<Sample[]> => deps.api.list();

export const getSample = async (
  id: string,
  deps: { api: SampleAPI },
): Promise<Sample> => deps.api.findById(id);

export const createSample = async (
  sampleCreate: SampleCreate,
  deps: { api: SampleAPI },
): Promise<Sample> => {
  const s: Sample = {
    id: Math.random().toString(32).substring(2),
    lastName: "fuga",
    firstName: "hoge",
  };
  try {
    return await deps.api.create(s);
  } catch {
    throw new Error("failed to get Sample");
  }
};
