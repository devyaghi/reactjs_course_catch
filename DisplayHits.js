import React from "react";
import axios_o from 'axios'

export default class DisplayHits extends React.Component{

    // axios

    constructor() {
        super();
        this.state={hits:[],error_occure:false}
    }


    render() {

        if (this.state.error_occure) return (<div>Error in fetching data</div>)
        else
        return (this.state.hits.map(hit=>
        <div >{hit.author} {hit.title}</div>
        ))


    }


    componentDidMount() {



            axios_o.get("https://hn.algolia.com/api/v1/search")
            .then(response=>{
                console.log(response);
                this.setState({hits:response.data.hits})
            }).catch(error=>
               this.setState({error_occure:true})
            );


    }

}