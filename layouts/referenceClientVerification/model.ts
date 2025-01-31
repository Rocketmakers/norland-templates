/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  clientName: string
  nannyFirstName: string
  nannyLastName: string
  returnUrl: string
}

export const sampleData: IModel[] = [
  {
    clientName: 'clientName',
    nannyFirstName: 'nannyFirstName',
    nannyLastName: 'nannyLastName',
    returnUrl: "https://www.rocketmakers.com"
  },
]
