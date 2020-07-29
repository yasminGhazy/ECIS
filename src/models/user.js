import RequestStatus from './../Eums/RequestStatus'

export default User ={
    id: "",
    nationalId: "",
    email: "",
    username: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: "",
    lastLogin:new Date(),
    userStatus: RequestStatus,
    requestDate: new Date(),
    responseDate: new Date(),
    accounts: BankAccount[]
}