import client from "lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};

export const getAllCategory = async () => {
    const categories = await client.fetch(
        `*[_type=="category"]`
    );
    return categories;
};

export const getProductByCategory = async (category_id) => {
    const products = await client.fetch(
        `*[_type=="product" && references("${category_id}")]`
    );
    return products;
};
