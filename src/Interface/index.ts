import { productInputName as productInputNames } from "../type";

export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    imageURL: string;
    price: string;
    colors: string[];
    category: {
        name: string,
        imageURL: string
    }
}

export interface IFormInput {
    id: string;
    name: productInputNames
    label: string;
    type: string;
}


export interface ICategory {
    id: string,
    name: string,
    imageURL: string,
}

