class OrderModel {
    constructor(
        public id: string,
        public date: string,
        public time: string,
        public city: string,
        public customer: string,
        public transactions: string
    ) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.city = city;
        this.customer = customer;
        this.transactions = transactions;
    }

    static fakedata: OrderModel[] = [
        { id: "#88345", date: "2025-04-10", time: "12:45:30", city: "Đà Nẵng", customer: "Ella Moreno", transactions: "95.00" },
        { id: "#87234", date: "2025-03-27", time: "14:15:50", city: "Hải Phòng", customer: "Jack Wallace", transactions: "410.00" },
        { id: "#86543", date: "2025-03-19", time: "18:25:10", city: "Cần Thơ", customer: "Sophia Carter", transactions: "328.00" },
        { id: "#85721", date: "2025-03-08", time: "07:10:05", city: "Huế", customer: "Daniel Scott", transactions: "274.00" },
        { id: "#84987", date: "2025-02-26", time: "11:45:40", city: "Bắc Ninh", customer: "Isabella James", transactions: "189.00" },
        { id: "#84256", date: "2025-02-18", time: "09:20:30", city: "Thanh Hóa", customer: "Liam Rodriguez", transactions: "623.00" },
        { id: "#83478", date: "2025-02-07", time: "16:55:20", city: "Quảng Ninh", customer: "Mia Lopez", transactions: "289.00" },
        { id: "#82934", date: "2025-01-31", time: "20:10:45", city: "Đà Nẵng", customer: "Ethan Harris", transactions: "533.00" },
        { id: "#82103", date: "2025-01-19", time: "13:40:15", city: "Hà Tĩnh", customer: "Olivia Martin", transactions: "415.00" },
        { id: "#81367", date: "2025-01-08", time: "08:30:55", city: "Phú Yên", customer: "Lucas Clark", transactions: "291.00" },
        { id: "#80529", date: "2024-12-29", time: "21:05:30", city: "Hồ Chí Minh", customer: "Benjamin Perez", transactions: "775.00" },
        { id: "#79846", date: "2024-12-17", time: "06:15:20", city: "Hà Nội", customer: "Emma Hill", transactions: "249.00" },
        { id: "#78912", date: "2024-12-05", time: "14:50:40", city: "Bình Định", customer: "Aiden Young", transactions: "391.00" },
        { id: "#78043", date: "2024-11-26", time: "19:30:05", city: "Hải Dương", customer: "Charlotte Lee", transactions: "670.00" },
        { id: "#77190", date: "2024-11-13", time: "10:40:55", city: "Vũng Tàu", customer: "William Adams", transactions: "530.00" },
        { id: "#76357", date: "2024-10-30", time: "23:25:20", city: "Hà Nội", customer: "Amelia Hall", transactions: "422.00" },
        { id: "#75623", date: "2024-10-18", time: "05:15:45", city: "Hồ Chí Minh", customer: "Henry King", transactions: "159.00" },
        { id: "#74890", date: "2024-10-06", time: "15:55:10", city: "Bắc Giang", customer: "Sofia Wright", transactions: "277.00" },
        { id: "#74045", date: "2024-09-23", time: "07:20:30", city: "Lào Cai", customer: "Noah Green", transactions: "410.00" },
        { id: "#73212", date: "2024-09-10", time: "09:10:20", city: "Nam Định", customer: "Isabella Baker", transactions: "529.00" },
        { id: "#72489", date: "2024-08-27", time: "22:40:15", city: "Tây Ninh", customer: "Elijah Nelson", transactions: "688.00" },
        { id: "#71754", date: "2024-08-14", time: "12:05:40", city: "Hà Nội", customer: "Ava Carter", transactions: "350.00" },
        { id: "#70932", date: "2024-07-30", time: "17:50:55", city: "Hà Tĩnh", customer: "Liam Wright", transactions: "420.00" },
        { id: "#70103", date: "2024-07-18", time: "10:30:20", city: "Bình Thuận", customer: "Olivia Clark", transactions: "572.00" },
        { id: "#69378", date: "2024-07-05", time: "08:20:10", city: "Hải Phòng", customer: "James Turner", transactions: "196.00" },
        { id: "#68541", date: "2024-06-20", time: "20:10:50", city: "Hồ Chí Minh", customer: "Sophia Lewis", transactions: "371.00" },
        { id: "#67812", date: "2024-06-07", time: "15:40:30", city: "Huế", customer: "Lucas Walker", transactions: "482.00" },
        { id: "#67098", date: "2024-05-25", time: "07:55:20", city: "Đà Nẵng", customer: "Mia Allen", transactions: "695.00" },
        { id: "#66243", date: "2024-05-12", time: "06:30:15", city: "Bình Dương", customer: "Benjamin Harris", transactions: "320.00" }
      ]
      
}

export default OrderModel;

