import {CacheLong, Link, Seo, useShopQuery} from "@shopify/hydrogen";
import {SHOP_QUERY} from "../query/query";
import {Suspense} from "react";

export default function Layout({children}) {

    const data = useShopQuery({
        query: SHOP_QUERY,
        cache: CacheLong(),
        preload: true,
    });

    const {data: {shop}} = data;

    return (
        <>
            <Seo
                type={"defaultSeo"}
                data={{
                    title: shop.name,
                    description: shop.description,
                }}
            />
            <header>
                <div className="container header-inner ">
                    <Link to={'/'} className={'header-logo'}>
                        {shop.name}
                    </Link>
                    <ul className="header-navigation">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                    <div className="header-cart-link"></div>
                </div>
            </header>
            <main>
                <Suspense>
                    {children}
                </Suspense>
            </main>
        </>
    );
}