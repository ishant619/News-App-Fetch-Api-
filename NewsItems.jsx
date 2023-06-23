import React, { Component } from 'react'
import News from './News'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

export default class NewsItems extends Component{
  constructor(){
    super()
    this.state={
      articles:[],
      totalResult:0,
      page:1,
}
}
  async getData(){
    var rawdata=await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=hi&page=${this.state.page}$pageSize=8&apiKey=45dc56a563994c6db1518ee5f1ddbf6e`)
    var data=await rawdata.json()
    this.setState({articles:data.articles})
      this.setState({totalResult:data.totalResults})

    }
     fetchMoreData=async()=>{
      this.setState({page:this.page+1})
      var rawdata=await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=hi&page=${this.state.page}$pageSize=8apiKey=45dc56a563994c6db1518ee5f1ddbf6e`)
    var data=await rawdata.json()
      this.setState({articles:this.state.articles.concat(data.articles)})
   }
componentDidMount(){
  this.getData()
}

componentDidUpdate(old) {
  if(old.category!==this.props.category)
  {
    this.setState({page:1})
    this.getData()
}
}
  render(){
   return (
    <>
    <h5 className ='text-center p-2 mt-1'> {this.props.category} section</h5>
    
    <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResult}
          loader={<Spinner/>}
        >
  <div className='container-fluid'>
    <div className='row'>
    {
        this.state.articles.map((item,index)=>{
          return(
            <News
              key={index}
              title={item.title}
              description={item.description}
              url={item.url}
              pic={item.urlToImage}
              date={item.publishedAt}
              author={item.author}
              souce={item.source} 

              />
          )
       })
      }
      </div>
      </div>
      </InfiniteScroll>
     
    </>

  )
  }
}

