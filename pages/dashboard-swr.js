import useSWR from 'swr'
const fetcher = async () => {
    const response = await  fetch ('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}


const DashboardSWR = () => {
  const { data, error } =  useSWR ('dashboard', fetcher) 
  if(error) return 'An error has occured'
  if(!data) return 'Loading...'

  return (
    <>
     <h1>dashboard</h1>
     <h2>post:- {data.posts}</h2>
     <h2>likes:- {data.likes}</h2>
     <h2>followers:- {data.followers}</h2>
     <h2>following:- {data.following}</h2>
    </>
   
  )
  
  
}

export default DashboardSWR