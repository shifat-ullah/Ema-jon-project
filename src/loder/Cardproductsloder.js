// 
// const Cardproductsloder = async()=>{
//     const loadedproduct = await fetch(`products.json`)
//     const products = await loadedproduct.json()

import { getShoppingCart } from "../../utilities/fakedb"

//     const storedcard = getShoppingCart();
//     const savedproduct =[];

//     for(const id in storedcard){
//         const addproduct = products.find(product => product.id === id)

//         if(addproduct){
//             const quantity = storedcard[id];
//             addproduct.quantity = quantity;
//             savedproduct.push(addproduct);
//         }
//     }
//     return savedproduct;
//     }

   


// export default Cardproductsloder;

const Cardproductsloder =async()=>{
    const loadedproduct = await fetch(`products.json`)
    const products = await loadedproduct.json()
    const storedcard = getShoppingCart ();
    const savedproduct =[];
    for (const id in storedcard){
        const addproduct = products.find(product => product.id === id);
        console.log(addproduct)
        if(addproduct){
            const quantity = storedcard[id];
            addproduct.quantity =quantity;
            savedproduct.push(addproduct)
        }
    }

    return savedproduct;
}

export default Cardproductsloder;


