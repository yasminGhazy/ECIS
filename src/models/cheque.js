import bankAccount from './bankAccount';
import RequestStatus from './../Eums/RequestStatus'


export default cheque = {
    id: 0,
    serial0: "",
    amount: 0,
    micr: "",
    creationDate: new Date(),
    dueDate: new Date(),
    sendDate: new Date(),
    replyDate: new Date(),
    status: RequestStatus,
    fk_SenderId: "",
    sender: {}, //user
    fk_ReceiverId: "",
    receiver: {},
    fk_SenderAccountId: 0,
    senderAccount: {}, // bankAccount
    fk_ReceiverAccountId: 0,
    receiverAccount: {},
}
