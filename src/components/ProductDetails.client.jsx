import {
    ProductOptionsProvider,
    useProductOptions,
    Image,
    ProductPrice,
    AddToCartButton
} from "@shopify/hydrogen";

export default function ProductDetails({product}) {
    return (
        <ProductOptionsProvider data={product}>
            <Image data={product.media.nodes[0].image} className={'product-page-image'}/>
            <ProductForm product={product}/>
        </ProductOptionsProvider>
    );
}

function ProductForm({product}) {

    const {
        options,
        selectedVariant,
        selectedOptions,
        setSelectedOption
    } = useProductOptions();

    const isOutOfStock = !selectedVariant?.availableForSale || false;

    return (
        <div>
            <h1>{product.title}</h1>
            <ProductPrice
                data={product}
                className={'product-page-price'}
                withoutTrailingZeros
                variantId={selectedVariant.id}
            />

            <div className={'product-options'}>
                {options.map(({name, values}) => {
                    if (values.length === 1) {
                        return null;
                    }
                    return (
                        <div key={name} className={'product-option-group'}>
                            <legend className={'product-option-name'}>
                                {name}
                            </legend>
                            {values.map((value) => {
                                const id = `option-${name}-${value}`
                                const checked = selectedOptions[name] === value;
                                return (
                                    <div key={id} className={'product-option-value'}>
                                        <input
                                            type="radio"
                                            id={id}
                                            checked={checked}
                                            name={name}
                                            value={value}
                                            onChange={() => setSelectedOption(name, value)}
                                        />
                                        <label htmlFor={id}>{value}</label>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <AddToCartButton className={'add-to-cart'} disabled={isOutOfStock}>
                {isOutOfStock ? 'Out of stock' : 'Add to cart'}
            </AddToCartButton>
            <div className={'product-description'} dangerouslySetInnerHTML={{ __html: product.descriptionHtml}}></div>
        </div>
    );
}