import * as React from "react"
import Layout from "../components/layout"
import '../style.css'
import { GiRoundStar } from "@react-icons/all-files/gi/GiRoundStar";
import Star from "../components/star";
import ScrollButton from "../components/ScrollButton";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div className="index-text-container">
          <h1>Neil Gehrels Swift Observatory</h1>
          <Star/>
          <p className="index-blurb">
          Welcome to the Neil Gehrels Swift Observatory mission Education and Public Outreach (E/PO) page. Here you will find cool science, mathematics, and technology learning experiences. Our goal is to use the observations and scientific discoveries of the Swift mission to improve the understanding and utilization of science and mathematics concepts for grades 7-12. For the lastest news about the Gehrels Swift mission head to <a href="/">swift.gsfc.nasa.gov</a>
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
