import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
 &::after{
     content:"";
     clear:both ;
     dipslay:table;
     
 }
`;

const Colum =   styled.div`
    width:100%;
    text-align:justify;
    padding:1em 2em 0em 6em;

    @media only  screen and (min-width: 768px){
        width:${props => props.span ? props.span / 12 *100 : "8.33"}
    }   
`;

function Conseil (props){

    return (
        <div >
            <h1>Conseil</h1>
            <Row>
                <Colum span="3">
Pour commencer, nous allons construire exactement la même grille, comme je l'ai vu dans la dernière section:
Il aura douze colonnes possibles
Une colonne peut s'étendre sur la largeur de 1 à 12 colonnes.
Si la largeur totale est inférieure à 768 pixels, toutes les colonnes s'empileront verticalement.
Concrètement, il s’agit d’un tableau présentant un état de synthèse. Etablir un bilan est nécessaire pour tout entrepreneur.

L’actif du bilan
L'actif du bilan représente les moyens de production de l’entreprise, c’est-à-dire tout ce qu’elle possède à un moment donné.

L’actif, parfois désigné aussi sous le terme « emplois », comprend :

les immobilisations (incorporelles, corporelles et financières)
les stocks (matières premières, en-cours, marchandises)
les créances (créances clients, capitaux souscrits, valeurs mobilières de placement, disponibilités, charges constatées d’avance)
Le passif du bilan
Le passif du bilan représente les moyens de financement de l’entreprise, c’est-à-dire tout ce qu’elle doit, tout ce qui lui a permis de financer ses actifs.

Aussi parfois désigné sous le terme « ressources » le passif comprend :

Les capitaux propres,
Les réserves et le résultat,
Les emprunts,
Les provisions,
Les dettes (découverts, produits constatés d’avance).
L’équilibre du bilan
Important : Le bilan doit toujours être équilibré. Le total de l’actif du bilan doit obligatoirement être égal au total du passif du bilan.

Le bilan comptable est fondé sur le principe d’équilibre financier. C’est-à-dire que chaque élément de l’actif du bilan correspond à un élément du passif.

Autrement dit, chaque « emploi » inscrit à l’actif correspond à une « ressource » inscrite au passif.

Résultat, pertes et bénéfices dans le bilan
Actif – passif = résultat (bénéfices ou pertes)

Le résultat de l’activité de l’entreprise est un gain ou bénefice si l'actif est supérieur au passif. Il est alors reporté comme bénéfice au passif du bilan, afin que les totaux actif et passif soient égaux.

Le résultat est une perte si le passif est supérieur à l'actif. Il est alors reporté comme perte à l’actif, afin que les totaux actif et passif soient égaux.

Différence entre bilan et compte de résultat
Il s’agit de deux documents obligatoires essentiels mais à vocation différente.

Points communs :


</Colum>

            </Row>
        </div>
    )
}

export default Conseil;