import React from "react";
import Separator from "../images/separator.svg";
import { useStaticQuery, graphql } from "gatsby";

export default function ComponentSubjects(props) {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "subjects"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            icon {
                                publicURL
                            }
                            title
                        }
                        fields {
                            slug
                        }
                    excerpt
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
                    { data.allFile.edges.map( edge => 
                        <div class="col-md-6 item">
                            <div class="row">
                                <div class="col-5 col-md-6 col-lg-4 col-xxl-3 icon">
                                    <img src={ edge.node.childMarkdownRemark.frontmatter.icon.publicURL } alt={ edge.node.childMarkdownRemark.frontmatter.title }></img>
                                    <a href={ edge.node.childMarkdownRemark.fields.slug } class="text-button">Discover More</a>
                                </div>
                                <div class="col">
                                    <h3 class="name">{ edge.node.childMarkdownRemark.frontmatter.title }</h3>
                                    { edge.node.childMarkdownRemark.excerpt }
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