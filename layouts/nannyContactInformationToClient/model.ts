/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  firstName: string
  lastName: string
  emailAddress: string
  status: string
  mobilePhoneNumber?: string
  homePhoneNumber?: string
}

export const sampleData: IModel[] = [
  {
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'norland@rocketmakers.com',
    status: 'new status'
  },
  {
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'norland@rocketmakers.com',
    status: 'new status',
    mobilePhoneNumber: '07000000000',
    homePhoneNumber: '00000000000'
  },
]
