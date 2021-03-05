import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
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
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="section-heading">
                            <h2>Expert <em>Tutors</em></h2>
                            <Separator />
                            <p>All of our tutors are highly motivated and accomplished academics with strong quantitative
                                backgrounds, currently pursuing PhD degrees from top institutions. </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {data.dataJson.content.map((tutor, index) => {
                        return (
                            <div class="col-lg-4">
                            <div class="tutor-item">
                                <div class="image-thumb">
                                    <Img fluid={ tutor.image.childImageSharp.fluid } alt={ tutor.name } loading="lazy" />
                                </div>
                                <div class="down-content">
                                    <span>{ tutor.title }</span>
                                    <h4>{ tutor.name }</h4>
                                    <p>{ tutor.bio }</p>
                                    <ul class="social-icons">
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
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
)
}