import {Suspense} from "react";
import {CacheLong, useRouteParams, useShopQuery} from "@shopify/hydrogen";
import {COLLECTION_QUERY} from "../../query/query";
import Layout from "../../components/Layout.server";
import ProductCard from "../../components/ProductGridItem.server";

export default function Collection() {
    const {handle} = useRouteParams();

    const data = useShopQuery({
        query: COLLECTION_QUERY,
        cache: CacheLong(),
        preload: true,
        variables: {
            handle,
        }
    });

    const {data: {collection: collection}} = data;
    const {products: {nodes}} = collection;

    return (
        <Layout>
            <Suspense>
                <div className={'catalog-page container'}>
                    <h1 className={''}>{collection.title}</h1>
                    <div className={'product-grid'}>
                        {nodes.map((product) => <ProductCard product={product}/>)}
                    </div>
                </div>
            </Suspense>
        </Layout>
    );
}