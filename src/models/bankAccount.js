import  bankAccountType from './bankAccountType';
import RequestStatus from './../Eums/RequestStatus'

export default bankAccount={
    id: 0,
    number: "",
    balance: 0,
    currency: "",
    fk_CurrencyId: 0,
    creationDate:  new Date(),
    availableChequesCount: 0,
    status: RequestStatus,
    requestDate:  new Date(),
    responseDate:  new Date(),
    accountType: bankAccountType,
    user: User,
    bank: Bank,
    branch: Branch,
}
