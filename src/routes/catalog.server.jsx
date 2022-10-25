import Layout from "../components/Layout.server";
import {Suspense} from "react";
import {CacheLong, useShopQuery} from "@shopify/hydrogen";
import {CATALOG_QUERY} from "../query/query";
import ProductCard from "../components/ProductGridItem.server";

export default function Catalog() {
    const data = useShopQuery({
        query: CATALOG_QUERY,
        cache: CacheLong(),
        preload: true,
    });

    const {data: {products: {nodes}}} = data;

    return (
        <Layout>
            <Suspense>
                <div className={'catalog-page container'}>
                    <div className={'product-grid'}>
                        {nodes.map((product) => <ProductCard product={product}/>)}
                    </div>
                </div>
            </Suspense>
        </Layout>
    );
}