import React from "react";
import Separator from "../images/separator.svg";
import { Row, Col, Container } from "react-bootstrap";
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
            <Container>
                <Row>
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
                </Row>
                <Row className="subjects">
                    { data.allFile.edges.map( edge => 
                        <Col md={6} className="item">
                            <Row>
                                <Col xs={5} md={6} lg={4} xxl={3} className="icon">
                                    <img class="mx-auto" src={ edge.node.childMarkdownRemark.frontmatter.icon.publicURL } alt={ edge.node.childMarkdownRemark.frontmatter.title }></img>
                                    <a href={ edge.node.childMarkdownRemark.fields.slug } class="text-button">Discover More</a>
                                </Col>
                                <Col class="col">
                                    <h3 class="name">{ edge.node.childMarkdownRemark.frontmatter.title }</h3>
                                    { edge.node.childMarkdownRemark.excerpt }
                                </Col>
                            </Row>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    )
}