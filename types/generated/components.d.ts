import type { Schema, Struct } from '@strapi/strapi';

export interface OrderedProductsOrderedProducts extends Struct.ComponentSchema {
  collectionName: 'components_ordered_products_ordered_products';
  info: {
    displayName: 'OrderedProducts';
  };
  attributes: {
    color: Schema.Attribute.String;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer;
    size: Schema.Attribute.String;
    totalPrice: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ordered-products.ordered-products': OrderedProductsOrderedProducts;
    }
  }
}
