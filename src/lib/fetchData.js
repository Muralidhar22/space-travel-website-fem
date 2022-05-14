// fetch data
export default async function fetchData(){
    const response = fetch("./data.json")
    return (await response).json()
}