export default defineEventHandler(async (event) => {

  // const { name } = getQuery(event)

  // const { age } = await readBody(event)

  // return {
  //     message: `hello api name parameter ${name}. You are ${age} years old.`
  // }

  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_yAggBPL8NWyas6sAwgZB9wd8WRxYqmTBJLdw250l')

  return data
})