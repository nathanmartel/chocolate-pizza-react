import React, { Component } from "react";

export default class RecipeCard extends Component {
    render() {
        return (
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

            );
    }
}
