import React from 'react'

const FetchData = () => {
    const [count, setCount] = React.useState(1);
    const [fetchData, setFetchData] = React.useState(null);

    console.log("rendered");
    
    React.useEffect(()=> {
        console.log("ran");
        fetch(`https://dummyjson.com/products/${count}`)
        .then(res => res.json())
        .then(data => setFetchData(data))
    }, [count])
    
  return (
    <>
    <h1>count is {count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>+</button>
    <pre>{JSON.stringify({fetchData}, null, 2)}</pre>
    </>
  )
}

export default FetchData