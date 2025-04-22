import React from "react";

interface Product {
  id: number;
  name: string;
  sold: number;
  image: string;
  change: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Maneki Neko Poster",
    sold: 1249,
    image: "product-7.jpg",
    change: 15.2,
  },
  {
    id: 2,
    name: "Echoes Necklace",
    sold: 1145,
    image: "product-6.jpg",
    change: 13.9,
  },
  {
    id: 3,
    name: "Spiky Ring",
    sold: 1073,
    image: "product-5.jpg",
    change: 9.5,
  },
  {
    id: 4,
    name: "Pastel Petals Poster",
    sold: 1022,
    image: "product-7.jpg",
    change: 2.3,
  },
  {
    id: 5,
    name: "Il Limone",
    sold: 992,
    image: "product-4.jpg",
    change: -0.7,
  },
  {
    id: 6,
    name: "Ringed Earring",
    sold: 1201,
    image: "product-3.jpg",
    change: -1.1,
  },
];

const TopProducts: React.FC = () => {
  return (
    <div className="space-y-4 mt-5">
        {products.map((product) => (
            <div key={product.id} className="flex items-center gap-3">
            <img
                src={"https://ecme-react.themenate.net/img/products/" + product.image}
                alt={product.name}
                className="w-10 h-10 rounded-lg object-cover border"
            />
            <div className="flex-1">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">Sold: {product.sold}</p>
            </div>
            <span
                className={`px-2 py-1 text-xs font-bold rounded-lg ${
                product.change >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
            >
                {product.change > 0 ? `+${product.change}%` : `${product.change}%`}
            </span>
            </div>
        ))}
    </div>
  );
};

export default TopProducts;
