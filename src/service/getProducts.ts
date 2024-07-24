import { connect, DB } from "@/utils/db";
import { ResultSetHeader } from "mysql2";

export type Shoe = { 
  product_id: number; 
  brand_name: string; 
  name: string;
  price: number;
  description: string;
  image_url: string;
}
export type Shoes = Array<Shoe>;


export const getProducts = async () => {
  try {
    const shoes = (await connect).query<any>("SELECT * FROM products");
    await (await DB.connect()).end();

    return await shoes;
  } catch (error: any) {

    console.clear();
    console.log(error.message);

    return [];
  }
};

export const getProduct = async (id: number) => {
  try {
    const shoes = (await DB.connect()).query(
      `SELECT * FROM products WHERE product_id = ${id}`
    );
    await (await DB.connect()).end();

    return await shoes;

  } catch (error: any) {

    console.clear();
    console.log(error.message);

    return [];
  }
};
