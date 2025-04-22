import CustomerModel from "./Customer.model";

class OrderModel {
    constructor(
        public id: string,
        public date: Date,
        public customer: CustomerModel,
        public payment: string,
        public status: boolean,
        public total: number
    ) {
        this.id = id;
        this.date = date;
        this.customer = customer;
        this.payment = payment;
        this.status = status;
        this.total = total;
    }

    static fakedata: OrderModel[] = [
        {
            "id": "95954",
            "date": new Date("03-22-2025 15:00:20"),
            "customer": CustomerModel.fakedata[0],
            "payment": "Visa",
            "status": true,
            "total": 168.00
        },
        {
            "id": "95423",
            "date": new Date("03/07/2022"),
            "customer": CustomerModel.fakedata[0],
            "payment": "MasterCard",
            "status": true,
            "total": 523.00
        },
        {
            "id": "92903",
            "date": new Date("07/18/2022"),
            "customer": CustomerModel.fakedata[1],
            "payment": "Visa",
            "status": true,
            "total": 81.00
        },
        {
            "id": "92627",
            "date": new Date("09/07/2022"),
            "customer": CustomerModel.fakedata[1],
            "payment": "MasterCard",
            "status": true,
            "total": 279.00
        },
        {
            "id": "92509",
            "date": new Date("06/26/2022"),
            "customer": CustomerModel.fakedata[1],
            "payment": "Visa",
            "status": false,
            "total": 831.00
        },
        {
            "id": "91631",
            "date": new Date("06/18/2022"),
            "customer": CustomerModel.fakedata[2],
            "payment": "MasterCard",
            "status": true,
            "total": 142.00
        },
        {
            "id": "90963",
            "date": new Date("06/11/2022"),
            "customer": CustomerModel.fakedata[2],
            "payment": "Visa",
            "status": true,
            "total": 232.00
        },
        {
            "id": "89332",
            "date": new Date("02/06/2022"),
            "customer": CustomerModel.fakedata[2],
            "payment": "MasterCard",
            "status": false,
            "total": 597.00
        },
        {
            "id": "89107",
            "date": new Date("04/17/2022"),
            "customer": CustomerModel.fakedata[6],
            "payment": "Visa",
            "status": false,
            "total": 72.00
        },
        {
            "id": "89021",
            "date": new Date("04/13/2022"),
            "customer": CustomerModel.fakedata[3],
            "payment": "MasterCard",
            "status": true,
            "total": 110.00
        },
        {
            "id": "88091",
            "date": new Date("04/04/2022"),
            "customer": CustomerModel.fakedata[4],
            "payment": "Visa",
            "status": true,
            "total": 345.00
        }
    ]
}

export default OrderModel;

