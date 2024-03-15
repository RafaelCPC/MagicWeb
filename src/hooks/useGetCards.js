import useSWR from "swr"

export function useGetCards(type,options) {

  
  const {data,error,mutate,isLoading,isValidating} = useSWR(()=>type.concat(options))

  return {data, error,isLoading,isValidating}
  }