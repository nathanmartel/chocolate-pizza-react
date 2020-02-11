import React, { Component } from "react";

export default class WholePizza extends Component {
    render() {
        return (
            <div className="container">
            <header className="flex">
                <div>
                    <img className="logo" src="./assets/logo.png" alt="" />
                    <img className="logo-wordmark" src="./assets/delicious-logo.png" alt="" />
                </div>
                <ul className="social">
                    <li id="facebook-icon"><img src="./assets/fb-icon.png" alt="" /></li>
                    <li id="twitter-icon"><img src="./assets/twit-icon.png" alt="" /></li>
                    <li id="google-plus-icon"><img src="./assets/gp-icon.png" alt="" /></li>
                    <li id="instagram-icon"><img src="./assets/insta-icon.png" alt="" /></li>
                    <li id="flickr-icon"><img src="./assets/flic-icon.png" alt="" /></li>
                    <li id="pinterest-icon"><img src="./assets/pint-icon.png" alt="" /></li>
                    <li id="rss-icon"><img src="./assets/rss-icon.png" alt="" /></li>
                    <li id="mail-icon"><img src="./assets/mail-icon.png" alt="" /></li>
                </ul>
            </header>

            <main> 
                <h1>Chocolate Pizza</h1>
                <h3> Posted on January 2020 / Desserts </h3>
                    <img className="pizza" src="https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/choco-pizza.png?raw=true" alt="" />
                <p>For the fig-swird: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
                </p>
                <p> ice acream: In a small over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is jusr barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                <p> Using an ice acream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before</p>
            </main>

            <div id="recipe-card">
                <div id="recipe-card-background">
                    <img src="./assets/list-bg.png" alt="" />
                </div>
                <div id="recipe-card-contents">
                    <ul>
                        <li>1 1/2 cups milk </li>
                        <li>1/2 cup cascarpone</li>
                        <li>1/2 tsp pink salt</li>
                        <li>1 lb Black Mission Figs</li>
                        <li>1/2 cup brown sugar </li>
                        <li>2-4 tbs water</li>
                        <li>1 1/2 cups heavy cream</li>
                        <li className="cross-out">4/3 granulated sugar</li>
                        <li className="cross-out">2 egg yolks</li>
                        <li>1 lemon, juiced</li>
                        <li>2 tbsp butter</li>
                        <li> 1 cup hiney roasted pecans, roughly chopped</li>
                    </ul>
                </div>
            </div>

            <div className="author-share">
                <div className="author">
                    <img src="./assets/van-pic.png" alt="" />
                    <h4>Vanessa Stevenson</h4>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
                <div className="share-recipe">
                    <button>Share Recipe</button>
                </div>
            </div>

            <footer>
                <div className="footer-rule"></div>
                <p>Delicious &copy; 2013 &bull; All Rights Reserved.</p>
                <p>Proudly published with Ghost</p>
            </footer>
            
            </div>

            );
    }
}
