class ProductModel {
    constructor(
        public id: string,
        public img: string,
        public name: string,
        public price: number,
        public quantity: number,
        public sales: number,
        public status: boolean
    ) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.sales = sales;
        this.status = status;
    }

    static fakedata: ProductModel[] = [
        {
            "id": "098327NT",
            "img": "https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Flörven",
            "price": 252.00,
            "quantity": 46,
            "sales": 87,
            "status": true
        },
        {
            "id": "098359NT",
            "img": "https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Snövalla",
            "price": 139.00,
            "quantity": 28,
            "sales": 92,
            "status": true
        },
        {
            "id": "098383NT",
            "img": "https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Echoes Necklace",
            "price": 99.00,
            "quantity": 52,
            "sales": 45,
            "status": true
        },
        {
            "id": "098342NT",
            "img": "https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Lömnäs",
            "price": 68.00,
            "quantity": 92,
            "sales": 51,
            "status": true
        },
        {
            "id": "098314NT",
            "img": "https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Ringed Earring",
            "price": 29.00,
            "quantity": 18,
            "sales": 12,
            "status": true
        },
        {
            "id": "098392NT",
            "img":"https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Spiky Ring",
            "price": 1599.00,
            "quantity": 27,
            "sales": 73,
            "status": true
        },
        {
            "id": "098320NT",
            "img":"https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Gränvika",
            "price": 388.00,
            "quantity": 51,
            "sales": 46,
            "status": true
        },
        {
            "id": "098377NT",
            "img":"https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Il Limone",
            "price": 599.00,
            "quantity": 30,
            "sales": 12,
            "status": true
        },
        {
            "id": "098336NT",
            "img":"https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Maneki Neko Poster",
            "price": 389.00,
            "quantity": 7,
            "sales": 49,
            "status": true
        },
        {
            "id": "098355NT",
            "img":"https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Pastel Petals Poster",
            "price": 729.00,
            "quantity": 6,
            "sales": 22,
            "status": true
        },
        {
            "id": "098371NT",
            "img":"https://ecme-react.themenate.net/img/products/product-1.jpg",
            "name": "Lush Greenery Poster",
            "price": 85.00,
            "quantity": 10,
            "sales": 54,
            "status": true
        }
    ];
}

export default ProductModel;

