/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  firstName: string;
  applicationCount: number;
  returnUrl: string;
}

export const sampleData: IModel[] = [
  {
    firstName: "John",
    applicationCount: 5,
    returnUrl: "https://example.com/clients"
  },
]
