import React from 'react'

const CollectionSummary = (props) => {

    let message = props.collection === 'tents' ? `The right shelter is crucial to a successful adventure. 
                                                  When the rain and wind starts, rely on Rainier Designs tents to keep you safe and dry. 
                                                  We optimize every square inch of space to give you as much room as possible. 
                                                  We utilize durable materials for our functional designs, all while minimizing weight to make our tents versatile, fast and light.` :
                  props.collection === 'sleeping-bags' ? `From warm summer nights sleeping under the stars to blizzards that would make a Yeti shiver, 
                                                          our full line of sleeping bags deliver comfort, warmth and performance no matter the conditions. 
                                                          Smart details, innovative designs, and state-of-the-art materials… we put it all into our sleeping bags 
                                                          so that you can get back where you belong - outside.` : 
                  props.collection === 'backpacks' ? `The right backpack will mean the difference between an invigorating, 
                                                      comfortable trip and a one filled with misery. Sierra Designs backpacks are designed to be versatile, 
                                                      user-friendly, and ergonomic. We've thought of everything, and these packs are packed with features, 
                                                      all so you can get out there and stay comfortable.` : 
                  props.collection === 'mens-apparel' ? `From warm summer days to hell-on-Earth conditions, 
                                                         our highly innovative and highly versatile outdoor men's apparel will keep you comfortable and ready for anything. 
                                                         Made with state-of-the-art, high performance materials with smart designs that perform no matter what you throw at them, 
                                                         our apparel keeps you active, comfortable, and looking good.` :
                  props.collection === 'womens-apparel' ? `We put everything into our highly innovative and highly versatile outdoor womens apparel, 
                                                           so you can put everything into your next adventure. Made with the latest, 
                                                           high performance materials with intelligent designs that perform in all conditions, 
                                                           our apparel is designed to keep active bodies in motion and looking good.` : null;
    
    return <p>{message}</p>;
};

export default CollectionSummary;