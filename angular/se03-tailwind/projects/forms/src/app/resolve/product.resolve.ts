import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";


export const DATA = [
    { id: 1, category: 'Foods', name: 'Potato Chips', price: 1000 },
    { id: 2, category: 'Foods', name: 'Pucci Cakes', price: 800 },
    { id: 3, category: 'Drinks', name: 'Pepsi', price: 500 },
    { id: 4, category: 'Drinks', name: 'Coke', price: 600 },
    { id: 5, category: 'Drinks', name: 'Nest Cafe', price: 800 },
]

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<any>{

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.paramMap.get('id')

        if (id) {
            return DATA.find(a => a.id === Number(id))
        }

        return null
    }

}