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
    query Products {
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

export const COLLECTION_QUERY = gql`
    query CollectionDetails($handle: String!) {
        collection(handle: $handle) {
            id
            title
            description
            seo {
                title
                description
            }
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
    }
`;

export const PRODUCT_QUERY = gql`
    query Product($handle: String!) {
        product(handle: $handle) {
            title
            descriptionHtml
            media(first: 1) {
                nodes {
                    ... on MediaImage {
                        id
                        image {
                            url
                            width
                            height
                            altText
                        }
                    }
                }
            }
            variants(first: 100) {
                nodes {
                    id
                    priceV2 {
                        amount
                        currencyCode
                    }
                    compareAtPriceV2 {
                        amount
                        currencyCode
                    }
                    selectedOptions {
                        name
                        value
                    }
                }
            }
        }
    }
`;