import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import SocialButtons from '../components/SocialButtons';
import Footer from '../components/Footer';


const TermsPage = ({ data }) => {
  const edge = data.allMarkdownRemark.edges.find(({ node }) => (
    node.frontmatter.title === 'Terms and policies'
  ));
  const page = edge.node;

  return (
    <div className="">
      <div className="overlay"></div>
      <div className="container">
        <div className="row col-12">
          <div className="logo">
            <Link to="/">
              <img src="/img/logo-roar.svg" className="logo-image" />
            </Link>
            <span className="logo-text">Roar</span>
          </div>
        </div>
        <div className="row col-12">
          <div className="py-5 py-md-0">
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
      <SocialButtons />
    </div>
  );
};


TermsPage.propTypes = {
  data: PropTypes.object,
};


export default TermsPage;


// eslint-disable-next-line no-undef
export const query = graphql`
  query TermPageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`;
