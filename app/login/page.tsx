import Login from '@/components/Auth/Login'

const Page = () => {
  return (
    <div>
        <Login status="some status" canResetPassword={true} />

    </div>
  )
}

export default Page