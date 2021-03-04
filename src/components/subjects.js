import React from "react";
import Separator from "../images/separator.svg";
import { useStaticQuery, graphql } from "gatsby"

export default function ComponentSubjects(props) {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              icon
              title
            }
          }
        }
      }
    }`)
    return (
        <section class="section" id="subjects">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="section-heading">
                            <h2><em>Subjects</em> we tutor</h2>
                            <Separator />
                            <p>Need Math, Statistics or Economics assistance? Our tutors can help. From high school to advanced
                                degree programs, we will give you the power to succeed in your learning goals. Meet with our
                                tutors
                                weekly to turn a class, MOOC, or self study into a personalized tutorial.</p>
                        </div>
                    </div>
                </div>
                <div class="row subjects">
                    { data.allMarkdownRemark.edges.map( edge => 
                        <div class="col-md-6 item">
                            <div class="row">
                                <div class="col-5 col-md-6 col-lg-4 col-xxl-3 icon">
                                    <img src={ edge.node.frontmatter.icon } alt={ edge.node.frontmatter.title }></img>
                                    <a href="{ subject.url }" class="text-button">Discover More</a>
                                </div>
                                <div class="col">
                                    <h3 class="name">{ edge.node.frontmatter.title }</h3>
                                    { edge.node.excerpt }
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}