import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const helloPage = props => (
  <Layout>
    <h1>Hi peoples</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
  </Layout>
);

export default helloPage;

export const pageQuery = graphql`
query {
    imageOne: file(relativePath: { eq: "bike1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "bike2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "bike3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;