import {gql} from "@shopify/hydrogen";

export const SHOP_QUERY = gql`
    query ShopInfo {
        shop {
            name
            description
        }
    }
`;