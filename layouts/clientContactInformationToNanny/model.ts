/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  firstName: string
  lastName: string
  state: string
  jobFriendlyId: string
  emailAddress: string
  mobilePhoneNumber?: string
  homePhoneNumber?: string
}

export const sampleData: IModel[] = [
  {
    state: 'new state',
    jobFriendlyId: '001',
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'norland@rocketmakers.com',
  },
  {
    state: 'new state',
    jobFriendlyId: '001',
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'norland@rocketmakers.com',
    mobilePhoneNumber: '07000000000',
    homePhoneNumber: '00000000000',
  },
]
