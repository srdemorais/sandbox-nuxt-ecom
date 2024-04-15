export default defineEventHandler(async (event) => {

  // const { name } = getQuery(event)

  // const { age } = await readBody(event)

  // return {
  //     message: `hello api name parameter ${name}. You are ${age} years old.`
  // }

  // const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=')

  // return data

  const { code } = event.context.params
  const { currencyKey } = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`
  const { data } = await $fetch(uri)

  return data
})