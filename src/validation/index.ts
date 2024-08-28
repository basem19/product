interface IProductValidation {
    title: string,
    description: string,
    imageURL: string;
    price: string;
}

export const productValidation = (product: IProductValidation) => {
    const errors: IProductValidation = {
        title: '',
        description: '',
        imageURL: '',
        price: '',
    }

    const imageURLRE = /(http(s?)|ftp):([/|.|\w|\s|-])*\./g.test(product.imageURL)
    if (!product.title.trim() || product.title.length < 10 || product.title.length > 50) {
        errors.title = "Product title must be between 10 and 80 characters!";
    }
    if (!product.description.trim() || product.description.length < 10 || product.description.length > 150) {
        errors.description = "Product description must be between 10 and 900 characters!";
    }
    if (!product.imageURL.trim() || !imageURLRE) {
        errors.imageURL = "Valid image URL is required";
    }
    if (!product.price.trim() || (isNaN(Number(product.price)))) {
        errors.price = "Valid price is required!";
    }
    // if (product.colors.length == 0) {
    //     errors.colors = "Valid Color is required!";
    // }
    // console.log(product.colors.length);
    // console.log(product.colors);
    // console.log(product.price);
    
    return errors
}



