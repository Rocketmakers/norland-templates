/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  scheduledTimestamp: string;
}

export const sampleData: IModel[] = [
  {
    scheduledTimestamp: "2026-05-06T00:00:00Z",
  },
]
