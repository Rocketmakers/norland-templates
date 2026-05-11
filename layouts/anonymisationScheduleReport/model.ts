/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  numberOfClients: number;
  scheduledTimestamp: string;
  returnUrl: string;
}

export const sampleData: IModel[] = [
  {
    numberOfClients: 5,
    scheduledTimestamp: "2026-05-06T00:00:00Z",
    returnUrl: "https://example.com/clients"
  },
]
