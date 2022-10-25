import {gql} from "@shopify/hydrogen";

export const SHOP_QUERY = gql`
    query ShopInfo {
        shop {
            name
            description
        }
    }
`;

export const CATALOG_QUERY = gql`
    query products {
        products(first: 9){
            nodes {
                title
                handle
                featuredImage {
                    url
                    altText
                    height
                    width
                }
                variants(first: 1) {
                    nodes {
                        priceV2 {
                            amount
                            currencyCode
                        }
                        compareAtPriceV2 {
                            amount
                            currencyCode
                        }
                    }
                }
            }
        }
    }
`;