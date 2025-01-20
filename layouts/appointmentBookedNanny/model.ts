/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  nannyFirstName: string;
  clientFirstName: string;
  clientLastName: string;
  clientMobileNumber: string;
  jobAdminName: string;
  jobTitle: string;
  jobFriendlyId: string;
  appointmentType: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentMethod: string;
}

export const sampleData: IModel[] = [
  {
    nannyFirstName: "nannyFirstName",
    clientFirstName: "clientFirstName",
    clientLastName: "clientLastName",
    clientMobileNumber: "clientMobileNumber",
    jobAdminName: "jobAdminName",
    jobTitle: "jobTitle",
    jobFriendlyId: "jobFriendlyId",
    appointmentType: "appointmentType",
    appointmentDate: "appointmentDate",
    appointmentTime: "appointmentTime",
    appointmentMethod: "appointmentMethod"
  },
]
