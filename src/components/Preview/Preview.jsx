import React from 'react'
import Item from '../../components/CollectionItem/CollectionItem'
import './Preview.scss'

function Preview({title,items}) {
    console.log(items)
    return (
        <div className="listpreview">
                {
                    items.filter((item,idx)=>idx<4)
                        .map(item=>(
                        <Item className="preview" key={item.id} item={item}/>
                    ))
                }
            </div>
    )
}

export default Preview
