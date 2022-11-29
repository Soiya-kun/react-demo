import { Sample } from "@/entities/sample";
import { SampleAPI } from "@/usecases/interfaces/sample";

const data: Sample[] = [
  { id: "1234", lastName: "mock", firstName: "mock" },
  { id: "1234", lastName: "mock", firstName: "mock" },
];

export function useInMemorySampleAPI(): SampleAPI {
  return {
    async list(): Promise<Sample[]> {
      return data;
    },
    async findById(id: string): Promise<Sample> {
      const res = data.find((s) => s.id === id);
      if (res == null) {
        throw new Error("not found");
      }
      return res;
    },
    async create(s: Sample): Promise<Sample> {
      data.push(s);
      return s;
    },
  };
}
