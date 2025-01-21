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
  clientAddressLine1: string;
  clientAddressLine2?: string;
  clientCity: string;
  clientCounty?: string;
  clientCountry: string;
  clientPostCode: string;
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
    clientAddressLine1: "clientAddressLine1",
    clientAddressLine2: "clientAddressLine2",
    clientCity: "clientCity",
    clientCounty: "clientCity",
    clientCountry: "clientCountry",
    clientPostCode: "clientPostCode",
    jobAdminName: "jobAdminName"
  },
]
