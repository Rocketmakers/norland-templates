/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  nannyFirstName: string;
  jobFriendlyId: string;
  jobTitle: string;
  clientFirstName: string;
  clientLastName: string;
  clientEmailAddress: string;
  clientMobileNumber: string;
  clientAddress: string;
  jobAdminName?: string;
}

export const sampleData: IModel[] = [
  {
    nannyFirstName: "nannyFirstName",
    jobFriendlyId: "jobFriendlyId",
    jobTitle: "jobTitle",
    clientFirstName: "clientFirstName",
    clientLastName: "clientLastName",
    clientEmailAddress: "clientEmailAddress",
    clientMobileNumber: "clientMobileNumber",
    clientAddress: "clientAddress",
    jobAdminName: "jobAdminName"
  },
]
