/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  nannyFirstName: string;
  clientTitle: string;
  clientFirstName: string;
  clientLastName: string;
  clientMobileNumber: string;
  jobAdminName?: string;
  jobTitle: string;
  jobFriendlyId: string;
  appointmentType: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentMethod?: string;
}

export const sampleData: IModel[] = [
  {
    nannyFirstName: "nannyFirstName",
    clientTitle: "clientTitle",
    clientFirstName: "clientFirstName",
    clientLastName: "clientLastName",
    clientMobileNumber: "clientMobileNumber",
    jobAdminName: "jobAdminName",
    jobTitle: "jobTitle",
    jobFriendlyId: "jobFriendlyId",
    appointmentType: "appointmentType",
    appointmentDate: "31/10/2024",
    appointmentTime: "appointmentTime",
    appointmentMethod: "appointmentMethod"
  },
]
