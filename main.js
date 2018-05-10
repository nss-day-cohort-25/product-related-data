/*
    Build a <select> component to list all product types
*/
const types = document.createElement("select")

Database.productTypes.forEach(type => {
    const thisOption = document.createElement("option")
    thisOption.id = type.productTypeId
    thisOption.textContent = type.name

    types.appendChild(thisOption)
})

/*
    Attach an `onchange` event listener to the select component
    to find all products that have the foreign key of the selected
    product type
*/
types.onchange = function (event) {
    // Get the id of the selected type
    const selectedProductTypeId = types[types.selectedIndex].id

    // Filter all products where foreign key matches
    const filteredProducts = Database.products.filter(
        currentProduct => currentProduct.productType === parseInt(selectedProductTypeId)
    )

    const parent = document.querySelector("#productList")

    // Empty out all children of the product list
    while (parent.firstChild) {
        parent.removeChild(
            parent.firstChild
        )
    }

    // Build a new product list
    filteredProducts.forEach(currentProduct => {
        const card = document.createElement("div")
        card.textContent = currentProduct.name

        document.querySelector("#productList").appendChild(card)
    })
}


document.querySelector("#productTypes").appendChild(types)

