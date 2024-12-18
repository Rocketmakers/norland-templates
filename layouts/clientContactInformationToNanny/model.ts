/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  firstName: string
  lastName: string
  status: string
  jobFriendlyId: string
  emailAddress: string
  mobilePhoneNumber?: string
  homePhoneNumber?: string
}

export const sampleData: IModel[] = [
  {
    status: 'new status',
    jobFriendlyId: '001',
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'norland@rocketmakers.com',
  },
  {
    status: 'new status',
    jobFriendlyId: '001',
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'norland@rocketmakers.com',
    mobilePhoneNumber: '07000000000',
    homePhoneNumber: '00000000000',
  },
]
