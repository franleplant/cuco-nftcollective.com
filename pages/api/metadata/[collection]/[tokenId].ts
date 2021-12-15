import { ERC721Metadata } from "metadata/CUCO1";
import type { NextApiRequest, NextApiResponse } from "next";
import invariant from "ts-invariant";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { collection, tokenId } = req.query;
  invariant(typeof collection === "string", "bad collection")
  invariant(typeof tokenId === "string","bad tokenId" )

  if (req.method === "GET") {
    try {
      const mod = await import(`metadata/${collection}`);
      const data: Array<ERC721Metadata> = mod.data;
      invariant(typeof data === "object", "bad collection format")
      return res.status(200).json(data[Number(tokenId)]);
    } catch (err) {
      console.log("error", err);
      return res.status(500);
    }
  }

  res.status(404);
}
