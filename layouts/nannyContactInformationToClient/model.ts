/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  firstName: string
  lastName: string
  emailAddress: string
  state: string
  mobilePhoneNumber?: string
  homePhoneNumber?: string
}

export const sampleData: IModel[] = [
  {
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'norland@rocketmakers.com',
    state: 'new state'
  },
  {
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'norland@rocketmakers.com',
    state: 'new state',
    mobilePhoneNumber: '07000000000',
    homePhoneNumber: '00000000000'
  },
]
