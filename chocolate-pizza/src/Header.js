import React, { Component } from "react";

const socialLinks = [{
    id: "facebook-icon",
    src: "fb-icon.png",
    alt: "Facebook icon",
},
{
    id: "twitter-icon",
    src: "twit-icon.png",
    alt: "Twitter icon",
},
{
    id: "google-plus-icon",
    src: "gp-icon.png",
    alt: "Google Plus icon",
},
{
    id: "instagram-icon",
    src: "insta-icon.png",
    alt: "Instagram icon",
},
{
    id: "flickr-icon",
    src: "flic-icon.png",
    alt: "Flickr icon",
},
{
    id: "pinterest-icon",
    src: "pint-icon.png",
    alt: "Pinterest icon",
},
{
    id: "rss-icon",
    src: "rss-icon.png",
    alt: "RSS icon",
},
{
    id: "mail-icon",
    src: "mail-icon.png",
    alt: "Mail icon",
}]


export default class Header extends Component {

    render() {
    const LinkNodes = socialLinks.map(link => (<SocialLink link={link} />));

    return (
        <header className="flex">
            <div>
                <img className="logo" src="logo.png" alt="" />
                <img className="logo-wordmark" src="delicious-logo.png" alt="" />
            </div>
            <ul className="social">
                {socialLinks.map(socialLink => (
                <li id={socialLink.id}><img src={socialLink.src} alt={socialLink.alt} /></li>
                ))}
                {/* <LinkNodes /> */}
            </ul>
        </header>
        );
    }
}


class SocialLink extends Component {
    render() {
        return <li id={this.props.id}><img src={this.props.src} alt={this.props.alt} /></li>
    }
}