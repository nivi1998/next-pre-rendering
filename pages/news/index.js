
const NewsArticalList = ({articles}) => {
  return (
    <>
     <h1>News Artical List(using Server side rendering) </h1>
{
  articles.map((article) =>{
  return(
    <div key={article.id}>
      <h1>{article.id}
      {article.title} |
      {article.category}
      </h1>
      </div>
  )
 } )}
  </>
   
  )
}

export default NewsArticalList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()
  console.log('pre-rendering NewsArticleList')

  return{
    props:{
        articles : data,
    },
  }
}