import { Response, Request } from "express";
import { pool as client } from "../config/database";
import Constants from "../config/constants";

export default {
  /**
   * Returns products in the specified query, if exists
   */
  getProduct: async (req: Request, res: Response) => {
    try {
      let order = "";
      let { search, sort } = req.query;
      if (!search) search = "";
      if (!sort) sort = "1";
      switch (sort) {
        case "1":
          order = Constants.SortOrder.ASC;
          break;
        case "2":
          order = Constants.SortOrder.DEC;
          break;
      }
      await client.query("BEGIN");
      const query = `SELECT * from products as p WHERE LOWER(p.description) 
            LIKE LOWER('%${search}%') or LOWER(p.title) LIKE LOWER('%${search}%') ORDER BY p.price ${order}`;
      const getproducts = await client.query(query);
      await client.query("COMMIT");
      return res.json({ products: getproducts.rows });
    } catch (err) {
      await client.query("ROLLBACK");
      res.status(400).json({ err: err });
    }
  },
};
