import React, { Component } from "react";

export class PizzaImage extends Component {

    render() {

    const pizzaImage = {
        className: "pizza",
        src: "https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/choco-pizza.png?raw=true",
        alt: "Pizza photo"
    }
    
    return <img className={pizzaImage.className} src={pizzaImage.src} alt={pizzaImage.alt} />
    return <img className={this.className} src={this.src} alt={this.alt} />

    }
}

export class Recipe extends Component {

    render() {

        return (
            <main> 
                <h1>Chocolate Pizza</h1>
                <h3> Posted on January 2020 / Desserts </h3>
                <PizzaImage />
                <p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
                </p>
                <p> Ice cream: In a small over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                <p> Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours.</p>
            </main>

            );
    }
}

export class RecipeCard extends Component {
    render() {
        return (
            <div id="recipe-card">
                <div id="recipe-card-background">
                    <img src="list-bg.png" alt="" />
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

            );
    }
}

// create a variable containing the array of objects (url and alt)
// const linksArray = this.props.links
// //make a new array with .map that returns <img> tags for each object in array
// const linksElements = linksArray.map(object => {
//     return <img alt={object.alt_text} src={object.url}/>
// });

// <div id = "navigation"> {linksElements}
//  </div>
