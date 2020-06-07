import React from 'react'
import {Accordion, Card,Button,Alert} from 'react-bootstrap'
import microsoft from '../image/microsoft.jpg'
import microsoft2 from '../image/microsoft2.jpg'
import microsoft3 from '../image/microsoft3.jpg'
import Calu1 from '../image/Calu1.jpeg'
import Calu2 from '../image/Calu2.jpeg'
import Analyse1 from '../image/Analyse1.jpeg'
import Coseil1 from '../image/Coseil1.jpeg'
import Coseil2 from '../image/Coseil2.jpeg'
import Coseil3 from '../image/Coseil3.jpeg'


const Service = () => {

    return (
        <div className="container">
            
            <Alert variant="success">
            <Alert.Heading>Prennez le temps de consulter nos diferents offres </Alert.Heading>
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                       Formation
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <img src={microsoft} width="270px%" height="170px" alt="logo-nav-toggler"></img>
                            <img src={microsoft2} width="270px" height="170px" alt="logo-nav-toggler"></img>
                            <img src={microsoft3} width="270px" height="170px" alt="logo-nav-toggler"></img>
                        </Card.Body>
                    </Accordion.Collapse>

                    <Alert variant="dark"  >
        <Alert.Heading><h2>Microsoft Office</h2></Alert.Heading>
        <p>
Microsoft Office est actuellement la suite bureautique la plus connue dans le monde.
Elle s'installe sur ordinateur et fournit une suite de logiciels comme : Word, Excel, PowerPoint, OneNote, Outlook, Access et/ou Publisher selon les suites choisies.
aujourd'hui , il devient indispensable de maîtriser ces logiciels que ce soient dans la vie privée ou professionnelle, pour cela on vous présente une formation complète pour la télécharger gratuitement.
        </p>
        <h5>Microsoft Office Word</h5>
        <p>
Microsoft Office Word est un logiciel de traitement de texte. Il est considéré comme le programme central de Microsoft Office. Il domine le marché du logiciel de traitement de texte.
        </p>
        <h5>Microsoft Office Excel</h5>
        <p>
Microsoft Office Excel est un tableur qui, comme presque tous les tableurs, sait également faire des graphiques, d’où son nom de tableur-grapheur. Comme Microsoft Word, il domine le marché.
        </p>
        <h5>Microsoft Office Outlook</h5>
        <p>
Microsoft Office Outlook, à ne pas confondre avec Microsoft Outlook Express est un Gestionnaire d’informations personnelles (également connu sous le nom de PIM, acronyme anglais de Personal Information Manager) et un . Désigné comme remplaçant de Windows Mail, il fait son arrivée dans la version d’Office 97. Il inclut un calendrier, un client de courriel, un gestionnaire de tâches et un carnet d’adresses.        </p>
      </Alert>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                       Comptabilité
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <img src={Calu1} width="270px%" height="170px" alt="logo-nav-toggler"></img>
                            <img src={Calu2} width="270px%" height="170px" alt="logo-nav-toggler"></img>
                            <img src={Analyse1} width="270px%" height="170px" alt="logo-nav-toggler"></img>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Alert variant="secondary"  >
                <Alert.Heading><h2>Formation Logiciel sage saari</h2></Alert.Heading>
        <p>
        La formation logiciel sage saari est un incontournable des services 
        paie ou compatbilité. Cette fiche formation logiciel sage vous présente une partie de la gamme de logiciels sage et les différentes aspects de la formation logiciel sage
        </p>
        <p>
        La comptabilité n’est pas l’activité préférée des entrepreneurs, souligne Alain Bosetti, président du groupe En Personne, organisateur du salon SME. Mais la comptabilité peut leur donner le goût de piloter leur TPE et non pas de subir les chiffes        
        </p>
        
        <p>
        Les logiciels de comptabilité facilitent la saisie des données. Au-delà de l’arrêté annuel, le suivi des chiffres en temps réel permet de suivre au plus près l’activité. Si l’entrepreneur n’a pas à se transformer en comptable ou en expert-comptable, il a tout intérêt à se pencher sur ses comptes au fil de l’eau. Comment la comptabilité vous aide à vendre, acheter et facturer en toute simplicité        </p>
        
       
      </Alert>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="primary" eventKey="2">
                       Conseil
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <img src={Coseil1}  width="270px%" height="170px" alt="logo-nav-toggler"></img>
                            <img src={Coseil2}  width="270px%" height="170px" alt="logo-nav-toggler"></img>
                            <img src={Coseil3}  width="270px%" height="170px" alt="logo-nav-toggler"></img>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Alert variant="light"  >
            <Alert.Heading><h2>Conseil</h2></Alert.Heading>
        <p>
        Nous vous conseillons .......................
        </p>
      </Alert> 
            </Accordion>
                <hr />
                <p className="mb-0">
                    Notre savoir et notre experience mise en oeuvre pour vous satisfaire!!!
                </p>
            </Alert>
             
        </div>

    )
}

export default Service;