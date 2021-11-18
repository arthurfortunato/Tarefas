import { useAuth } from '../../contexts/auth'

export function Home() {

  const { Logout } = useAuth()

  return (
    <>
      <h1>Home!</h1>
      <button onClick={Logout}>Sair</button>
    </>
  )
}