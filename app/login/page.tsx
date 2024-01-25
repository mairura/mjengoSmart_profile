import Login from '@/components/Auth/Login'

const Page = () => {
  return (
    <div>
        <Login status="Active" canResetPassword={true} />

    </div>
  )
}

export default Page