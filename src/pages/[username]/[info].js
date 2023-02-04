import { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info, uid } = router.query
  const [name, setName] = useState('?')

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name)
  //     })
  // }, [])

  useEffect(() => {
    if (uid !== null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name)
        })
    }
  }, [uid])
  return (
    <>
      <h1 className="title">
        Username : {username} / Info : {info}
      </h1>
      <h1 className="title">Name : {name}</h1>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
