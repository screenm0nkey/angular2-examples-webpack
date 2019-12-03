import { Component, EventEmitter } from "@angular/core";

class Product {
  sku: string;
  name: string;
  image_url: string;
  department: Array<string>;
  price: number;

  constructor(
    sku: string,
    name: string,
    image_url: string,
    department: Array<string>,
    price: number
  ) {
    this.sku = sku;
    this.name = name;
    this.image_url = image_url;
    this.department = department;
    this.price = price;
  }
}

/**
 * ProductImage
 */
@Component({
  selector: "product-image",
  inputs: ["product"],
  template: `
    <img class="product-image" [src]="product.image_url" />
  `
})
export class ProductImage {
  product: Product;
}

/**
 * ProductDepartment
 */
@Component({
  selector: "product-department",
  inputs: ["product"],
  template: `
    <div class="product-department">
      <span *ngFor="let name of product.department; let i = index">
        {{ name }}
      </span>
    </div>
  `
})
export class ProductDepartment {
  product: Product;
}

/**
 * PriceDisplay
 */
@Component({
  selector: "price-display",
  inputs: ["price"],
  template: `
    <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplay {
  price: number;
}

/**
 * ProductRow
 */
@Component({
  selector: "product-row",
  inputs: ["product"],
  outputs: ["pick"],
  template: `
    <div class="product-row cf" (click)="clicked($event)">
      <product-image [product]="product"></product-image>
      <div class="product-info">
        <div class="product-sku">SKU #{{ product.sku }}</div>
        <div class="product-name">{{ product.name }}</div>
        <product-department [product]="product"></product-department>
      </div>
      <price-display [price]="product.price"></price-display>
    </div>
  `
})
export class ProductRow {
  product: Product;
  pick: EventEmitter<any> = new EventEmitter(); // (pick)='clicked(product)
  clicked(evt: MouseEvent) {
    evt.preventDefault();
    this.pick.next(this.product);
  }
}

/**
 * ProductsList
 */
@Component({
  selector: "products-list",
  inputs: ["productList: products", "name"],
  outputs: ["stick"], // stick is the name of the event the parent listens for
  template: `
    <div class="products-list" style="display: table">
      <product-row
        *ngFor="let product of productList"
        [product]="product"
        (pick)="clicked(product)"
      >
      </product-row>
    </div>
  `
})
export class ProductsList {
  productList: Array<Product>;
  stick: EventEmitter<any> = new EventEmitter();

  clicked(product: Product) {
    console.log(product);
    this.stick.next(product);
  }
}

/**
 * InventoryApp
 */
@Component({
  selector: "inventory-app",
  template: `
    <p class="file">misc-examples/components/input-binding/inputs.ts</p>
    <h4>Using different Inputs and Events</h4>
    <div class="inventory-app">
      <products-list [products]="products" (stick)="productClicked($event)">
      </products-list>
      <p></p>
    </div>
  `
})
export class InventoryApp {
  products: Array<Product>;

  constructor() {
    this.products = [];
    this.products.push(
      new Product(
        "104544-2",
        "Nykee Running Shoes",
        "http://media.kohls.com.edgesuite.net/is/image/kohls/1811809?wid=882&hei=882&op_sharpen=1",
        ["Men", "Shoes", "Running Shoes"],
        109.99
      )
    );
    this.products.push(
      new Product(
        "187611-0",
        "South Face Jacket",
        "https://climbinggearreviewsuk.files.wordpress.com/2013/05/the-north-face-anti-matter-jacket.jpg",
        ["Women", "Apparel", "Jackets & Vests"],
        238.99
      )
    );
    this.products.push(
      new Product(
        "443102-9",
        "Addeds Active Hat",
        "http://i.ebayimg.com/00/s/NDI5WDUwMA==/z/bUYAAOxycmBSsRxU/$_35.JPG?set_id=2",
        ["Men", "Accessories", "Hats"],
        29.99
      )
    );
  }

  productClicked(product) {
    alert("Product clicked: " + product.name);
  }
}
