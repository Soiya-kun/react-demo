import { useInMemorySampleAPI } from "@/adapters/api/sample/mock";
import { SampleCreate } from "@/entities/dto/sample";
import { listSamples, getSample, createSample } from "@/usecases/sample";

export const useListSamples = () => {
  const deps = {
    api: useInMemorySampleAPI(),
  };
  return () => listSamples(deps);
};

export const useGetSample = () => {
  const deps = {
    api: useInMemorySampleAPI(),
  };

  return (id: string) => getSample(id, deps);
};

export const useCreateSample = () => {
  const deps = {
    api: useInMemorySampleAPI(),
  };

  return (sc: SampleCreate) => createSample(sc, deps);
};
