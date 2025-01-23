/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  clientFirstName: string;
  nannyFirstName: string;
  nannyLastName: string;
  nannyMobileNumber: string;
  jobAdminName?: string;
}

export const sampleData: IModel[] = [
  {
    clientFirstName: "clientFirstName",
    nannyFirstName: "nannyFirstName",
    nannyLastName: "nannyLastName",
    nannyMobileNumber: "nannyMobileNumber",
    jobAdminName: "jobAdminName",
  },
]
