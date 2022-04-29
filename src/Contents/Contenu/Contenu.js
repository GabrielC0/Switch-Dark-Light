import React, {useContext} from 'react'
import './Contenu.css'
import {ThemeContext} from '../../Contexte/ThemeContext';

export default function Contenu()
{
    const{theme} = useContext(ThemeContext);

    return (
        <div className={theme ? 'contenu light' : 'contenu dark'}>
            <h1>Titre Contenu</h1>
            Il fut un temps où Gold Roger était le plus 
            grand de tous les pirates, le "Roi des Pirates" 
            était son surnom. A sa mort, son trésor d'une 
            valeur inestimable connu sous le nom de 
            "One Piece" fut caché quelque part sur 
            "Grand Line". De nombreux pirates sont partis à 
            la recherche de ce trésor mais tous sont morts 
            avant même de l'atteindre. Monkey D. Luffy rêve 
            de retrouver ce trésor légendaire et de devenir 
            le nouveau "Roi des Pirates". Après avoir mangé 
            un fruit du démon, il possède un pouvoir lui 
            permettant de réaliser son rêve. Il lui faut 
            maintenant trouver un équipage pour partir à 
            l'aventure !
        </div>
    )
}