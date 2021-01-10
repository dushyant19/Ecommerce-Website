import React, { Component } from 'react'
import data from '../../components/ShopData'
import Preview from '../../components/Preview/Preview'


export class ShopPage extends Component {
    constructor(){
        super()
        this.state = {data:data};
    }
    render() {
        const items = this.state.data
        return (
            <div>
                {
                    items.map(item=>(
                        <div>
                        <h1>{item.title}</h1>
                        <Preview key={`item.id-${item.title}`} title={item.title} items={item.items}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage
