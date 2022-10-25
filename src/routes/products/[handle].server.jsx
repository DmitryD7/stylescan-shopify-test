import {CacheLong, useRouteParams, useShopQuery, Seo} from "@shopify/hydrogen";
import {Suspense} from "react";
import {PRODUCT_QUERY} from "../../query/query";
import Layout from "../../components/Layout.server";
import ProductDetails from "../../components/ProductDetails.client";

export default function Products() {
    const {handle} = useRouteParams();

    const {data: {product: product}} = useShopQuery({
        query: PRODUCT_QUERY,
        cache: CacheLong(),
        preload: true,
        variables: {
            handle,
        }
    });

    return (
        <Layout>
            <Suspense>
                <Seo type={'product'} data={product}/>
            </Suspense>
            <div className={'product-page container'}>
                <ProductDetails product={product}/>
            </div>
        </Layout>
    );
};