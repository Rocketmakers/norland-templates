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
  appointmentType: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentMethod?: string;
}

export const sampleData: IModel[] = [
  {
    clientFirstName: "clientFirstName",
    nannyFirstName: "nannyFirstName",
    nannyLastName: "nannyLastName",
    nannyMobileNumber: "nannyMobileNumber",
    jobAdminName: "jobAdminName",
    appointmentType: "appointmentType",
    appointmentDate: "appointmentDate",
    appointmentTime: "appointmentTime",
    appointmentMethod: "appointmentMethod"
  },
]
