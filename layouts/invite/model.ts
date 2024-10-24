/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  returnUrl: string
  firstName: string
}

export const sampleData: IModel[] = [
  {
    firstName: "Jim",
    returnUrl: "https://www.rocketmakers.com"
  },
  {
    firstName: "Jane",
    returnUrl: "https://www.rocketmakers.com"
  },
]
