import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const mappedData = data.allMarkdownRemark.edges.map(edge => {
    return (
      <li>
        <h2>{edge.node.frontmatter.title}</h2>
        <p>{edge.node.frontmatter.date}</p>
      </li>
    )
  })
  return (
    <Layout>
      <h1>My Blog</h1>
      <ol>{mappedData}</ol>
      <h2>This is my blog</h2>
    </Layout>
  )
}

export default Blog
