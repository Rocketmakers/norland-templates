/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  returnUrl: string,
  firstName: string
}

export const sampleData: IModel[] = [
  {
    returnUrl: "https://www.rocketmakers.com",
    firstName: "firstName"
  },
  {
    returnUrl: "https://www.rocketmakers.com",
    firstName: "firstName"
  },
]
