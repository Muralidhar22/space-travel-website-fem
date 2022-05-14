import fetchData from "./fetchData.js"
export default async function handleData(event, field){
    const data = await fetchData()
    const index = event.dataset.index
    return data[field][index]
}
