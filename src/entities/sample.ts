export type Sample = {
  id: string;
  lastName: string;
  firstName: string;
};

export const getFullName = (sample: Sample): string =>
  sample.lastName + sample.firstName;
