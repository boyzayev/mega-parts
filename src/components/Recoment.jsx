import React from 'react';
import { Link } from 'react-router-dom';

const recommendedItems = [
    {
        "id": 1,
        "image": "/images/parts/part1.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 5,
        "title": "Akom",
        "subtitle": "Brake Disc",
        "cost": 110000,
        "productImages": [
            { "image": "/images/parts/part1.png", "id": 1 },
            { "image": "/images/recommenddedparts/part1.png", "id": 2 },
            { "image": "/images/recommenddedparts/part2.png", "id": 3 },
            { "image": "/images/recommenddedparts/part3.png", "id": 4 },
            { "image": "/images/recommenddedparts/part4.png", "id": 5 },
            { "image": "/images/recommenddedparts/part1.png", "id": 6 }
        ]

    },
    {
        "id": 2,
        "image": "/images/parts/part2.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 7,
        "title": "Plug",
        "subtitle": "Brake Disc",
        "cost": 120000,
        "productImages": [
            { "image": "/images/parts/part2.png", "id": 1 },
            { "image": "/images/parts/part2.png", "id": 2 },
            { "image": "/images/parts/part2.png", "id": 3 },
            { "image": "/images/parts/part2.png", "id": 4 },
            { "image": "/images/parts/part2.png", "id": 5 },
            { "image": "/images/parts/part2.png", "id": 6 }
        ]

    },
    {
        "id": 3,
        "image": "/images/parts/part3.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 1,
        "title": "Absorbes",
        "subtitle": "Brake Disc",
        "cost": 130000,
        "productImages": [
            { "image": "/images/parts/part3.png", "id": 1 },
            { "image": "/images/parts/part3.png", "id": 2 },
            { "image": "/images/parts/part3.png", "id": 3 },
            { "image": "/images/parts/part3.png", "id": 4 },
            { "image": "/images/parts/part3.png", "id": 5 },
            { "image": "/images/parts/part3.png", "id": 6 }
        ]

    },
    {
        "id": 4,
        "image": "/images/parts/part4.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 9,
        "title": "Air fresher",
        "subtitle": "Brake Disc",
        "cost": 140000,
        "productImages": [
            { "image": "/images/parts/part4.png", "id": 1 },
            { "image": "/images/parts/part4.png", "id": 2 },
            { "image": "/images/parts/part4.png", "id": 3 },
            { "image": "/images/parts/part4.png", "id": 4 },
            { "image": "/images/parts/part4.png", "id": 5 },
            { "image": "/images/parts/part4.png", "id": 6 }
        ]

    },
    {
        "id": 5,
        "image": "/images/parts/part5.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 6,
        "title": "Fara",
        "subtitle": "Brake Disc",
        "cost": 150000,
        "productImages": [
            { "image": "/images/parts/part5.png", "id": 1 },
            { "image": "/images/parts/part5.png", "id": 2 },
            { "image": "/images/parts/part5.png", "id": 3 },
            { "image": "/images/parts/part5.png", "id": 4 },
            { "image": "/images/parts/part5.png", "id": 5 },
            { "image": "/images/parts/part5.png", "id": 6 }
        ]

    },
    {
        "id": 6,
        "image": "/images/recommenddedparts/part1.png",
        "description": "Shock Absorbes and Brake Discs and parts for automobiles main parts",
        "discount": 8,
        "title": "Shina",
        "subtitle": "Brake Disc",
        "cost": 160000,
        "productImages": [
            { "image": "/images/parts/part6.png", "id": 1 },
            { "image": "/images/parts/part6.png", "id": 2 },
            { "image": "/images/parts/part6.png", "id": 3 },
            { "image": "/images/parts/part6.png", "id": 4 },
            { "image": "/images/parts/part6.png", "id": 5 },
            { "image": "/images/parts/part6.png", "id": 6 }
        ]
    },
    {
        "id": 7,
        "image": "/images/recommenddedparts/part3.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 5,
        "subtitle": "Brake Disc",
        "title": "Moy",
        "cost": 110000,
        "productImages": [
            { "image": "/images/parts/part1.png", "id": 1 },
            { "image": "/images/recommenddedparts/part1.png", "id": 2 },
            { "image": "/images/recommenddedparts/part2.png", "id": 3 },
            { "image": "/images/recommenddedparts/part3.png", "id": 4 },
            { "image": "/images/recommenddedparts/part4.png", "id": 5 },
            { "image": "/images/recommenddedparts/part1.png", "id": 6 }
        ]

    },
    {
        "id": 8,
        "image": "/images/parts/part2.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 7,
        "title": "Kalpak",
        "subtitle": "Brake Disc",
        "cost": 120000,
        "productImages": [
            { "image": "/images/parts/part2.png", "id": 1 },
            { "image": "/images/parts/part2.png", "id": 2 },
            { "image": "/images/parts/part2.png", "id": 3 },
            { "image": "/images/parts/part2.png", "id": 4 },
            { "image": "/images/parts/part2.png", "id": 5 },
            { "image": "/images/parts/part2.png", "id": 6 }
        ]

    },
    {
        "id": 9,
        "image": "/images/parts/part3.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 1,
        "title": "Kuzov",
        "subtitle": "Brake Disc",
        "cost": 130000,
        "productImages": [
            { "image": "/images/parts/part3.png", "id": 1 },
            { "image": "/images/parts/part3.png", "id": 2 },
            { "image": "/images/parts/part3.png", "id": 3 },
            { "image": "/images/parts/part3.png", "id": 4 },
            { "image": "/images/parts/part3.png", "id": 5 },
            { "image": "/images/parts/part3.png", "id": 6 }
        ]

    },
    {
        "id": 10,
        "image": "/images/parts/part4.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 9,
        "title": "Tanirovka",
        "subtitle": "Brake Disc",
        "cost": 140000,
        "productImages": [
            { "image": "/images/parts/part4.png", "id": 1 },
            { "image": "/images/parts/part4.png", "id": 2 },
            { "image": "/images/parts/part4.png", "id": 3 },
            { "image": "/images/parts/part4.png", "id": 4 },
            { "image": "/images/parts/part4.png", "id": 5 },
            { "image": "/images/parts/part4.png", "id": 6 }
        ]

    },
    {
        "id": 11,
        "image": "/images/recommenddedparts/part3.png",
        "description": "Shock Absorbes and Brake Discs and parts",
        "discount": 6,
        "title": "Akumlator",
        "subtitle": "Brake Disc",
        "cost": 150000,
        "productImages": [
            { "image": "/images/parts/part5.png", "id": 1 },
            { "image": "/images/parts/part5.png", "id": 2 },
            { "image": "/images/parts/part5.png", "id": 3 },
            { "image": "/images/parts/part5.png", "id": 4 },
            { "image": "/images/parts/part5.png", "id": 5 },
            { "image": "/images/parts/part5.png", "id": 6 }
        ]

    },
    {
        "id": 12,
        "image": "/images/parts/part6.png",
        "description": "Shock Absorbes and Brake Discs and parts for automobiles main parts",
        "discount": 8,
        "title": "Zapchast",
        "subtitle": "Brake Disc",
        "cost": 160000,
        "productImages": [
            { "image": "/images/parts/part6.png", "id": 1 },
            { "image": "/images/parts/part6.png", "id": 2 },
            { "image": "/images/parts/part6.png", "id": 3 },
            { "image": "/images/parts/part6.png", "id": 4 },
            { "image": "/images/parts/part6.png", "id": 5 },
            { "image": "/images/parts/part6.png", "id": 6 }
        ]
    }
];

export default function Recoment() {
    return (
        <div>
            <div className="mt-4">
                <h1 className='text-2xl'>Recommended Items</h1>
                <div className="mt-3 p-3">
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        {recommendedItems.map(item => (
                            <div
                                key={item.id}
                                style={{ border: "1px solid #ccc", width: "230px", height: "230px" }}
                                className="flex flex-col rounded justify-center items-center bg-white overflow-hidden"
                            >
                                <Link to={`/product/${item.id}`} className="flex flex-col rounded justify-center items-center bg-white overflow-hidden">

                                    <div className="vv">
                                        <img className="w-full h-full" src={item.image} alt={item.title} />
                                    </div>
                                    <div className="">
                                        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                                        <p style={{ width: "200px" }} className="text-gray-700 mb-4">{item.description}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
