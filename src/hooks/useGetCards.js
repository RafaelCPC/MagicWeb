import useSWR from "swr"

export function useGetCards(isCalled) {

  
  const {data,error,mutate} = useSWR(isCalled)

  function fetchCards() {
    // mutate()
  }

  return {data, error,onFetchCards:fetchCards}
  }