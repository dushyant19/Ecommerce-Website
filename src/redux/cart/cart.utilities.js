export const AddToCart = (items,itemToAdd)=>{
    const exists = items.find(item=>item.id===itemToAdd.id)
    if(exists){
        // just need to increase the count
        const newitems = items.map(item=>item.id===itemToAdd.id?{...item,count:item.count+1}:item)
        return newitems
    }
    //add new item to the list
    return [...items,{...itemToAdd,count:1}]
}

export const DecreaseCount = (items,itemToRemove)=>{
    if(itemToRemove.count<=0){
        return;
    }
    const newItems = items.map(item=>item.id===itemToRemove.id?{...item,count:item.count-1}:item)
    const newitems = newItems.filter(item=>item.count>0)
    return newitems
}