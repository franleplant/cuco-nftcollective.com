import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    description: "CuCo description",
    external_url: "https://www.cucollectors.com",
    image: "https://www.cucollectors.com/dog.jpg",
    name: "CuCo test 3",
    //"seller_fee_basis_points": 100, # Indicates a 1% seller fee.
    //"fee_recipient": "0xA97F337c39cccE66adfeCB2BF99C1DdC54C2D721" # Where seller fees will be paid to.
  });
}
