import Head from "next/head"
import { Layout } from "@/components/layout"
import Dropzone from "@/components/dropzone/dropzone"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>S3 storage</title>
        <meta
          name="description"
          content="S3 temporal file storage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">

        <Dropzone></Dropzone>

      </section> 

    </Layout>
  )
  
}