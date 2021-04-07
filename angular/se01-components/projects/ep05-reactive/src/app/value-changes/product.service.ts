const PRODUCTS = [
    { cat: "Foods", name: "Potato Chips" },
    { cat: "Foods", name: "Hot Dogs" },
    { cat: "Drinks", name: "Pepsi" },
    { cat: "Drinks", name: "Cocacola" },
    { cat: "Snaks", name: "Candy" },
    { cat: "Snaks", name: "Chocolet" },
    { cat: "Foods", name: "Humberger" },
]

export class ProductService {

    search(category: string) {
        return PRODUCTS.filter(a => a.cat === category)
    }

    getCategories() {
        return [... new Set(PRODUCTS.map(a => a.cat).sort())]
    }
}