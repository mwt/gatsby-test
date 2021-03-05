import React from "react";
import { LastWord } from "../buildtime-scripts";

export default function ComponentHeader(props) {
    return (
        <header id="top" class="masthead text-center dark-bg d-flex">
            <video autoPlay muted loop id="bg-video" poster="https://res.cloudinary.com/mariabetto/video/upload/v1612134740/production_ID_5200349_xsjpw2.jpg">
                <source src="https://res.cloudinary.com/mariabetto/video/upload/ac_none,c_scale,q_auto:good,so_2,vc_auto,w_1600/v1612134740/production_ID_5200349_xsjpw2.webm" type="video/webm" />
                <source src="https://res.cloudinary.com/mariabetto/video/upload/ac_none,c_scale,q_auto:good,so_2,vc_auto,w_1600/v1612134740/production_ID_5200349_xsjpw2.mp4" type="video/mp4" />
            </video>

            <div class="video-overlay header-text">
                <div class="caption">
                    <h6>It doesn't have to be so hard</h6>
                    <h2>
                        { LastWord("tutoring from experts") }
                    </h2>
                    <div class="scroll-to-section">
                        <a class="btn btn-primary" href="{{ '/#contact-us' | relative_url }}" role="button">Request Tutoring</a>
                    </div>
                </div>
            </div>
        </header>
    )
}