import type { NextApiRequest, NextApiResponse } from "next";
import invariant from "ts-invariant";

import { OSCollectionMetadata } from "metadata/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OSCollectionMetadata>
) {
  const { collection } = req.query;
  invariant(typeof collection === "string", "bad collection");

  if (req.method === "GET") {
    try {
      const mod = await import(`metadata/${collection}`);
      const data: OSCollectionMetadata = mod.collection;
      invariant(typeof data === "object", "bad collection format");
      return res.status(200).json(data);
    } catch (err) {
      console.log("error", err);
      return res.status(500);
    }
  }

  res.status(404);
}
