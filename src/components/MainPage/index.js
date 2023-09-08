import React, { Component } from 'react';

import chamomile from "../../../src/assets/chamomile.jpg"
import lavenders from "../../../src/assets/lavenders.jpg"
import lemon from "../../../src/assets/lemon.jpg"
import mint from "../../../src/assets/mint.jpg"
import morckOrange from "../../../src/assets/morck-orange.jpg"
import thyme from "../../../src/assets/thyme.jpg"

import Categories from './categories';

import './styles.scss';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                chamomile,
                lavenders,
                lemon,
                mint,
                morckOrange,
                thyme,

            ],
            index: 0
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.index === this.state.images.length - 1) {
                this.setState({
                    index: 0
                });
            } else {
                this.setState({
                    index: this.state.index + 1
                });
            }
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <>
                <div className='pouet'>
                    <div className='main'>
                        <div className='main-carrousel'>
                            <img src={this.state.images[this.state.index]} className="main-carrousel-pics" alt="essential oil pics" />
                        </div>
                        <div className='main-description'>
                            <p className='main-description-text'>Les huiles essentielles sont des produits miraculeux qui offrent une variété de bienfaits curatifs et aromatiques. Ces extraits concentrés de plantes, obtenus par distillation à la vapeur, sont connus depuis des siècles et sont reconnus pour leurs propriétés thérapeutiques, leurs parfums et leurs bienfaits pour la santé. Elles peuvent être diluées et appliquées sur la peau pour traiter divers problèmes de santé, tels que les maux de tête, le stress, l'anxiété et les douleurs musculaires. On peut également les utiliser comme désodorisants, nettoyants, antimicrobiens et pour améliorer l'humeur. Les huiles essentielles peuvent être mélangées avec des huiles végétales pour créer des huiles de massage, des inhalations et des bains relaxants, ou ajoutées à des produits de soin personnel et à des produits ménagers. Grâce à leur douceur, leur sécurité et leurs nombreuses applications, les huiles essentielles sont un moyen incroyable de profiter de tous les bienfaits de la nature.</p>
                        </div>
                    </div>
                    <div className='main-links'>
                        <Categories />
                    </div>
                </div>
            </>
        );
    }
}

export default MainPage;