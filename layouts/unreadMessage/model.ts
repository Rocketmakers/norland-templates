/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  returnUrl: string,
  name: string
}

export const sampleData: IModel[] = [
  {
    returnUrl: "https://www.rocketmakers.com",
    name: "name"
  },
  {
    returnUrl: "https://www.rocketmakers.com",
    name: "name"
  },
]
