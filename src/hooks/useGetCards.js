import useSWR from "swr"

export function useGetCards(username) {

  
  const {data,error,mutate} = useSWR(username)

  function fetchGithubUser() {
    mutate()
  }

  return {data, error,onFetchingGithubUser:fetchGithubUser}
  }