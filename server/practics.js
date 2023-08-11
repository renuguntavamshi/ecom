console.log('p')
const arr=[
    {a:1,category:1,subcategory:2},
    {a:1,category:1,subcategory:1},
    {a:1,category:1,subcategory:4},
    {a:1,category:1,subcategory:2},
    {a:2,category:2,subcategory:3},
    {a:2,category:2,subcategory:1},
    {a:2,category:2,subcategory:1},
    {a:2,category:2,subcategory:1},
    {a:3,category:3,subcategory:2},
    {a:3,category:3,subcategory:4},
    {a:3,category:3,subcategory:3},
    {a:3,category:3,subcategory:4}
    ]

//Now our task is find objects whose categroy is 3

let cat3array=arr.filter(item=>{
    return item.category===3
})
console.log(cat3array);

//Now our task is to find objects whose category is 3 and sub category is 4

let cat3ndsubcat4array=arr.filter(item=>{
    return item.category===3 & item.subcategory===4
})
console.log(cat3ndsubcat4array);