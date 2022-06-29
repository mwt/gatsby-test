import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col, Container, Card } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image"
import Separator from "../images/separator.svg";

export default function ComponentAbout(props) {
    const data = useStaticQuery(graphql`
    query {
        dataJson(title: {eq: "tutors"}) {
            content {
              name
              bio
              image {
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                    )
                }
              }
              title
              social {
                email
                github
                linkedin
              }
            }
        }
    }`)
    return (
        <section class="section" id="about">
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 4}}>
                        <div class="section-heading">
                            <h2>Expert <em>Tutors</em></h2>
                            <Separator />
                            <p>All of our tutors are highly motivated and accomplished academics with strong quantitative
                                backgrounds, currently pursuing PhD degrees from top institutions. </p>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} sm={2} lg={3} className="g-4">
                    {data.dataJson.content.map((tutor, index) => {
                        return (
                        <Col>
                            <Card className="h-100">
                                <div class="image-thumb">
                                    <GatsbyImage image={ tutor.image.childImageSharp.gatsbyImageData } alt={ tutor.name } loading="lazy" />
                                </div>
                                <Card.Body>
                                    <span>{ tutor.title }</span>
                                    <Card.Title>{ tutor.name }</Card.Title>
                                    <Card.Text>{ tutor.bio }</Card.Text>
                                </Card.Body>
                                <hr class="mb-0" />
                                <ul class="social-icons m-3">
                                        <li><a href={`https://www.linkedin.com/in/${tutor.social.linkedin}`}
                                                title={ tutor.social.linkedin } target="_blank" rel="noreferrer"><svg>
                                                    <use
                                                        xlinkHref="/assets/icons/minima-social-icons.svg#linkedin">
                                                    </use>
                                                </svg></a></li>
                                        <li><a href={`https://twitter.com/${tutor.social.twitter}`}
                                                title={ tutor.social.twitter } target="_blank" rel="noreferrer"><svg>
                                                    <use
                                                        xlinkHref="/assets/icons/minima-social-icons.svg#twitter">
                                                    </use>
                                                </svg></a></li>
                                        <li><a href={`https://github.com/${tutor.social.github}`}
                                                title={ tutor.social.github } target="_blank" rel="noreferrer"><svg>
                                                    <use
                                                        xlinkHref="/assets/icons/minima-social-icons.svg#github">
                                                    </use>
                                                </svg></a></li>
                                        <li><a href={`mailto:${tutor.social.email}`}
                                                title={ tutor.social.email }><svg>
                                                    <use
                                                        xlinkHref="/assets/icons/minima-social-icons.svg#email">
                                                    </use>
                                                </svg></a></li>
                                </ul>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
)
}