var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		brand: 'Nike',
		selectedVariant: 0,
		anchor: 'http://192.168.109.141/barberr/',
		
		onSale: false,
		
		details: ["80% Cotton", "2-% Poliester", "Mens"],
		variants: [
			{
			variantId: 2234,
			variantColor: "green",
			variantImage: './assets/vmSocks-green-onWhite.jpg',
			variantQantity: 0,
			},
			{
			variantId: 2235,
			variantColor: "blue",
			variantImage: './assets/vmSocks-blue-onWhite.jpg',
			variantQantity: 10,
			}
		],
		sizes: [
			{
			sizeId: 12,	
			lenght: "270",	
			},
			{
			sizeId: 11,	
			lenght: "280",	
			}
		],
		cart: 0,
				
	},
	methods:{
		addToCart() {
			this.cart += 1			
		},
		delToCart(){
			this.cart -= 1
		},
		updateProduct(index){
			this.selectedVariant = index
			console.log(index)
		},
		first() {
			this.onSale = true
		},
	},
	computed:{
		Mytitle(){
			return this.brand + ' ' + this.product
		},
		image(){
			return this.variants[this.selectedVariant].variantImage
		},
		InStock(){
			return this.variants[this.selectedVariant].variantQantity
		}
	}
})