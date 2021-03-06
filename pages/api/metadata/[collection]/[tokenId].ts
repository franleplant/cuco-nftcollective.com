import type { NextApiRequest, NextApiResponse } from "next";
import invariant from "ts-invariant";

import { ERC721Metadata } from "metadata/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ERC721Metadata>
) {
  const { collection, tokenId } = req.query;
  invariant(typeof collection === "string", "bad collection");
  invariant(typeof tokenId === "string", "bad tokenId");

  if (req.method === "GET") {
    try {
      const mod = await import(`metadata/${collection}`);
      const tokens: Array<ERC721Metadata> = mod.tokens;
      invariant(typeof tokens === "object", "bad collection format");
      return res.status(200).json(tokens[Number(tokenId)]);
    } catch (err) {
      console.log("error", err);
      return res.status(500);
    }
  }

  res.status(404);
}
