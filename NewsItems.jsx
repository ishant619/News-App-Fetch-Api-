import React, { useState, useEffect } from 'react'
import News from './News'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'
export default function NewsItems(props) {
  var [articles,setarticles]=useState([])
  var [totalResult,settotalResult]=useState(0)
  var [page,setPage]=useState(1)
  async function getData() {
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&language=hi&page=${page}&pageSize=8&apiKey=a726c19e68b844d9859346f9f16a4bab`)
    var data = await rawdata.json()
    setarticles(data.articles)
    settotalResult(data.totalResults)
  }
  var fetchMoreData = async () => {
   setPage(page + 1)
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&language=hi&page=${page}&pageSize=8&apiKey=a726c19e68b844d9859346f9f16a4bab`)
    var data = await rawdata.json()
    setarticles(articles.concat(data.articles))
  }
  useEffect(()=>{
    getData()
  },[props.category])
  return (
    <>
      <h5 className='bg-success text-light text-center p-3 mt-1'>{props.category} Section</h5>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}>
        <div className='container-fluid'>
          <div className='row'>
            {
              articles.map((item, index) => {
                return (
                  <News
                    key={index}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    pic={item.urlToImage}
                    date={item.publishedAt}
                    author={item.author}
                    socuce={item.source}
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
