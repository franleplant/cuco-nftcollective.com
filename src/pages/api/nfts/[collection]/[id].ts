// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface INFTAttr {
  display_type: string;
  trait_type: string;
  value: number | string;
}

interface INFTMetadata {
  description: string;
  external_url: string;
  image: string;
  name: string;
  attributes: Array<Partial<INFTAttr>>;
  background_color: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<INFTMetadata>>
) {
  res.status(200).json({
    description: "CuCo description",
    external_url: req.url,
    image: "https://www.cucollectors.com/dog.jpg",
    name: "CuCo test",
    attributes: [
      {
        trait_type: "Kind",
        value: "Test",
      },
    ],
  });
}
