import { Component, EventEmitter} from "angular2/core";


class Product {
    sku:string;
    name:string;
    image_url:string;
    department:Array<string>;
    price:number;

    constructor(sku:string,
                name:string,
                image_url:string,
                department:Array<string>,
                price:number) {
        this.sku = sku;
        this.name = name;
        this.image_url = image_url;
        this.department = department;
        this.price = price;
    }
}



@Component({
    selector: 'product-image',
    inputs: ['product'],
    template: `<img class="product-image" [src]="product.image_url">`
})
class ProductImage {
    product:Product;
}



@Component({
    selector: 'product-department',
    inputs: ['product'],
    directives: [],
    template: `
        <div class="product-department">
            <span *ngFor="#name of product.department; #i=index">
            <a href="#">{{ name }}</a>
            <span *ngIf="i < (product.department.length-1)">&gt;</span>
            </span>
        </div>`
})
class ProductDepartment {
    product:Product;
}




@Component({
    selector: 'price-display',
    inputs: ['price'],
    template: `<div class="price-display">\${{ price }}</div>`
})
class PriceDisplay {
    price:number;
}




@Component({
    selector: 'product-row',
    inputs: ['product'],
    outputs: ['pick'],
    directives: [ProductImage, ProductDepartment, PriceDisplay],
    template: `
  <div class="product-row cf" (click)="clicked()">
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
class ProductRow {
    product:Product;
    pick:EventEmitter<any>;

    constructor() {
        this.pick = new EventEmitter();
    }

    clicked() {
        this.pick.next(this.product);
    }
}


@Component({
    selector: 'products-list',
    inputs: ['productList: products', 'name'],
    outputs: ['stick'],
    directives: [ProductRow],
    template: `
        <div class="products-list">
            <product-row *ngFor="#product of productList" [product]="product" (pick)='clicked(product)'></product-row>
        </div>
    `
})
class ProductsList {
    productList:Array<Product>;
    stick:EventEmitter<any>;

    constructor() {
        this.stick = new EventEmitter();
    }

    clicked(product) {
        console.log(product);
        this.stick.next(product);
    }
}



@Component({
    selector: 'inventory-app',
    directives: [ProductsList],
    template: `
        <div class="inventory-app">
            <products-list [products]="products" (stick)="productClicked($event)">
            </products-list>
        </div>
    `
})
export class InventoryApp {
    products:Array<Product>;

    constructor() {
        this.products = [];
        this.products.push(new Product(
            '104544-2', 'Nykee Running Shoes',
            'http://media.kohls.com.edgesuite.net/is/image/kohls/1811809?wid=882&hei=882&op_sharpen=1',
            ['Men', 'Shoes', 'Running Shoes'],
            109.99
        ));
        this.products.push(new Product(
            '187611-0', 'South Face Jacket',
            'https://climbinggearreviewsuk.files.wordpress.com/2013/05/the-north-face-anti-matter-jacket.jpg',
            ['Women', 'Apparel', 'Jackets & Vests'],
            238.99
        ));
        this.products.push(new Product(
            '443102-9', 'Addeds Active Hat',
            'http://i.ebayimg.com/00/s/NDI5WDUwMA==/z/bUYAAOxycmBSsRxU/$_35.JPG?set_id=2',
            ['Men', 'Accessories', 'Hats'],
            29.99
        ));
    }

    productClicked(product) {
        alert('Product clicked: ' + product.name);
    }
}
