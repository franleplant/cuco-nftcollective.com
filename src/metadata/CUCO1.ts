// TODO add enjin metadata style
export interface ERC721Attr {
  display_type?: string;
  trait_type?: string;
  value: string;
}
/** docs https://docs.opensea.io/docs/metadata-standards */
export interface ERC721Metadata {
  /** Identifies the asset to which this NFT represents */
  name: string;
  /** Describes the asset to which this NFT represents */
  description: string;
  external_url?: string;
  /**
   * A URI pointing to a resource with mime type image
   * representing the asset to which this NFT represents.
   * Consider making any images at a width between 320 and 1080
   * pixels and aspect ratio between 1.91:1 and 4:5 inclusive.
   *
   **/
  background_color?: string;
  animation_url?: string;
  youtube_url?: string;
  image: string;
  attributes?: Array<ERC721Attr>;
}

export const data: Array<ERC721Metadata> = [
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
  {
    name: "Fake Name",
    description: "Fake description",
    image:
      "https://www.cuco-nftcollective.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.05783fbd.jpg&w=640&q=75",
  },
];
