import React from 'react';
import tentsHero from '../static/tents-hero.jpg'; 
import sleepingBagsHero from '../static/sleeping-bags-hero.jpg';
import backpacksHero from '../static/backpacks-hero.jpg';
import mensApparelHero from '../static/mens-apparel-hero.jpg';
import womensApparelHero from '../static/womens-apparel-hero.jpg';

const HeroImage = (props) => {

    let imgSrc = props.collection === 'tents' ? tentsHero : 
                 props.collection === 'sleeping-bags' ? sleepingBagsHero :
                 props.collection === 'backpacks' ? backpacksHero :
                 props.collection === 'mens-apparel' ? mensApparelHero :
                 props.collection === 'womens-apparel' ? womensApparelHero : null;

    return <img id="collection-hero" src={imgSrc} alt={props.collection}/>;
};

export default HeroImage;