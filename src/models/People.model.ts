class PeopleModel {
    constructor(
        public id: string,
        public firstname: string,
        public lastname: string,
        public position: string,
        public email: string,
        public phone: string,
        public creationDate: string,
        public img: string,
        public companyName: string,
        public website: string,
        public activate: boolean
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.position = position;
        this.email = email;
        this.phone = phone;
        this.creationDate = creationDate;
        this.img = img;
        this.companyName = companyName;
        this.website = website;
        this.activate = activate;
    }

    static initial() {
        return {
          id: "",
          firstname: "",
          lastname: "",
          position: "",
          email: "",
          phone: "",
          creationDate: "",
          img: "",
          companyName: false,
          website: "",
          activate: false
        };
    }

    static fromJson(json: any) {
		return new PeopleModel(
			json?.id,
			json?.firstName,
			json?.lastName,
			json?.position,
			json?.email,
			json?.phone,
			json?.creationDate,
			json?.img,
			json?.companyName,
			json?.website,
            json?.activate
		);
	}

    static fakedata: any = Array.from({ length: 60 }, (_, i) => ({
        id: (i + 1).toString().padStart(3, '0'),
        firstname: ["John", "Jane", "Michael", "Emily", "Chris", "Emma", "Daniel", "Sophia", "David", "Olivia"][i % 10],
        lastname: ["Doe", "Smith", "Johnson", "Brown", "Williams", "Jones", "Davis", "Miller", "Wilson", "Anderson"][i % 10],
        position: ["Software Engineer", "Project Manager", "Designer", "Data Analyst", "DevOps Engineer", "HR Specialist", "Accountant", "Marketing Manager", "Sales Executive", "Consultant"][i % 10],
        email: `user${i + 1}@example.com`,
        phone: `123-456-${(i + 1).toString().padStart(4, '0')}`,
        creationDate: `2024-03-${(i % 28 + 1).toString().padStart(2, '0')}`,
        img: `https://example.com/avatar${(i % 10) + 1}.jpg`,
        companyName: ["Tech Corp", "Innovate Ltd", "Creative Solutions", "Data Systems", "CloudNet", "AI Hub", "Finance Group", "Retail Ventures", "Healthcare Inc", "EdTech Solutions"][i % 10],
        website: `https://company${(i % 10) + 1}.com`,
        activate: false
    }));
}

export default PeopleModel;
