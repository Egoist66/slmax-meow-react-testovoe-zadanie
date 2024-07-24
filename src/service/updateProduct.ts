import { connect, DB } from "@/utils/db";


export const updateProduct = async ({id, brand_name, name, price, description, image_url}: {id: number, brand_name: string, name: string, price: number, description: string, image_url: string}) => {
  try {
    const res = (await connect).query(
      `UPDATE products SET brand_name = ?, name = ?, price = ?, description = ?, image_url = ? WHERE product_id = ${id}`,
      [brand_name, name, price, description, image_url]
    );
    await (await DB.connect()).end();

    return await res;

  } catch (error: any) {

    console.clear();
    console.log(error.message);

    return [];
  }
};
