import React from "react"
import styled from "styled-components"

import pdfIcon from "../images/pdf_icon.png"

import LayoutDefault from "../layouts/default"

let counter = 1

const ExampleArea = ({ children }) => (<div className="uk-grid-small uk-child-width-auto">{ children }</div>)
const ExampleItem = ({ children }) => (<div><span>Voorbeeld {counter++}:</span>{ children }</div>)

const AholdPage = () => (
  <LayoutDefault>
    <StyledSection className="uk-section">
        <div className="uk-container uk-container-xsmall	">
            <article className="uk-article">
                <h1 className="uk-article-title"><a className="uk-link-reset" href="/#">Ahold</a></h1>

                <p className="uk-article-meta">Geschreven door Robin ten Berge op 31 Oktober 2021</p>

                <div className="uk-grid-small uk-child-width-auto">
                    <div>
                        <span>Download:</span> <a className="uk-button uk-button-text" href="/downloads/RobinTenBerge_Resume_Ahold_2021.pdf" target="_blank"><img src={pdfIcon} alt="pdf" /> RobinTenBerge_Resume_Ahold_2021.pdf</a>
                    </div>
                </div>

                <p className="uk-text-lead">Het lijkt mij erg interessant en leuk om in het team van Tristan en Marcel bij te dragen aan "Plannen voor morgen".</p>

                <p>Zie hierboven de link naar mijn CV.</p>
                <p>Afgelopen donderdag sprak ik met Tristan en Marcel over de ambitie van Ahold omtrent "Plannen voor morgen". Tristan had mij benaderd omdat hij weet dat ik een Senior freelance developer ben die ervaren is met React. We hebben een aantal jaar geleden samengewerkt bij ABN AMRO.</p>
                
                <p>Op het moment dat ik met Tristen en Marcel sprak over de huidige infrastructuur en de plannen voor de gewenste situatie kreeg ik de behoefte om initiele architectuur diagrammen te maken. Dit zou erg handig zijn als communicatiemiddel en ook als denkmiddel om de juiste oplossingen te ontwerpen. Zie hier een voorbeeld van wat ik eerder heb gemaakt:</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="/images/drawio_aws_architecture_diagram.png" target="_blank">AWS architecture diagram. (draw.io)</a> </ExampleItem>
                </ExampleArea>

                <p>Ook vroeg ik of wireframes / designs aanwezig zijn van hoe de frontend er ongeveer uit moet komen te zien. Het lijkt mij slim om een prototype te maken en die voor te leggen aan de eindgebruikers. Zo krijg je heel snel waardevolle feedback. Omdat dit project voor "interne stakeholders" is verwacht ik niet extreem hoge eisen aan het design. Maar het moet denk ik wel een vriendelijk werkbare UI zijn. Het prototype dient ook als requirements die ik als frontend developer nodig heb. Zie hier een voorbeeld van wat ik eerder heb gemaakt:</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="https://www.figma.com/proto/ElnJUQa7MhB0OCM23onGrN/MealByUs-v1?node-id=1%3A2" target="_blank">Moestuinen en avondeten met buren. (figma)</a> </ExampleItem>
                </ExampleArea>

                <p>Ik zou willen voorstellen aandacht te besteden aan het uitwerken van een architectuur-diagram en UI-ontwerpen. Tegelijkertijd kan op basis van de huidige inzichten al wel een MVP van de frontend opgeleverd worden. Ik zal een nieuwe React app neerzetten (of meerdere?) en via Azure DevOps pipelines testen, bouwen en deployen naar Azure (Blob Storage?). Hieronder een aantal voorbeelden van mijn ervaringen met React.</p>

                <h2>React</h2>

                <p className="uk-text-lead">startup handboek</p>
                <p>Uit inspiratie kreeg ik behoefte om een handboek te maken voor als ik een startup zou beginnen. Het handboek bevat o.a. concrete stappen voor een developer om het technische fundament neer te zetten. De techstack bestaat uit: React Native met Expo voor de app. React met Gatsby voor de website. React en Redux voor een webapp. En een GraphQL endpoint in de cloud voor data opslag. Voor deze work-in-progress versie van het handboek heb ik alle stappen in markdown formaat beschreven.</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="https://github.com/rbergenl/_Alpha#developer" target="_blank">Zie vooral de stukken "Developer". (github)</a> </ExampleItem>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="https://github.com/rbergenl/_Alpha/tree/master/developer/issues" target="_blank">De folder "issues" bevat behapbare User Stories. (github)</a> </ExampleItem>
                </ExampleArea>

                <p className="uk-text-lead">meals app</p>
                <p>Om bovenstaande startup handboek te kunnen maken heb ik aan een dummy project gewerkt.</p>

                <p>Er is een begin gemaakt aan een React Native app, welke een lijst met maaltijden laat zien en een detail view. Er wordt o.a. gebruik gemaakt van Functional Components, Custom Hooks, React Navigation, Redux en Apollo. De debug versie van de app wordt gebouwd in een pipeline met behulp van Turtle CLI. In de pipeline wordt ook gebruik gemaakt van Eslint, Prettier en Jest. Zie "package.json" voor alle scripts. Let op: het project is nog wel een work-in-progress.</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="https://gitlab.com/aardonyx/app" target="_blank">Een React Native app met Expo. (gitlab)</a> </ExampleItem>
                </ExampleArea>

                <p>Het project heeft ook een herbruikbare CI/CD pipeline met een eigen Docker container. De pipeline publiseerd o.a. een test coverage report, maakt releases en deployed naar een test of productie omgeving.</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="https://gitlab.com/aardonyx/cicd" target="_blank">Zie het YML bestand en de Dockerfile. (gitlab)</a> </ExampleItem>
                </ExampleArea>

                <p>De backend is volledig in AWS opgezet. In de folder "constructs" staan building blocks voor Auth, Api, Analytics, Hosting, Storage en Serverless Functions. Zie ook de folder "mocks" waarop de gehele backend als mock lokaal is te draaien.</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="https://gitlab.com/aardonyx/base-team" target="_blank">Zie vooral de folder "constructs" en "mocks". (gitlab)</a> </ExampleItem>
                </ExampleArea>

                <p className="uk-text-lead">rtbprojects.com</p>
                <p>Mijn website heb ik gemaakt met Gatsby, een React framework. De benodigde data met teksten en links naar de afbeeldingen worden geladen middels GraphQL. De opmaak is gedaan met UIKit. En custom styling met Styled-components. Een doel voor mij met deze website was een volledig optimale Lighthouse score te krijgen. Dat is gelukt :) En als bonus wordt de website gratis gehost, als een Github Pages project (in de Master branch).</p>                
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="https://github.com/rbergenl/rbergenl.github.io/tree/develop" target="_blank">Zie de "develop" branch voor de sourcecode. (github)</a> </ExampleItem>
                </ExampleArea>

                <p className="uk-text-lead">react assessments</p>
                <p>In 2019 had ik gesolliciteerd bij een werkgever om als React developer aan de slag te gaan. Om aangenomen te worden moest ik een React assessment uitvoeren. Daar kwam ik doorheen met een 100% successcore. Uiteindelijk kreeg ik de baan aangeboden.</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="https://github.com/rbergenl/react-assessment" target="_blank">Zie hier de code van het assessment. (github)</a> </ExampleItem>
                </ExampleArea>

                <p>In 2019 heb ik alle React cursussen op Pluralsight gevolgd. Vervolgens het examen gedaan. Mijn score zat op dat moment bij de top 2%.</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="/images/linkedin_post_26-04-2019.jpg" target="_blank">Zie hier de score in een screenshot. (jpg)</a> </ExampleItem>
                </ExampleArea>
                
                <p>Zojuist heb ik een React assessment op LinkedIn voltooid. Mijn score zit binnen de top 30% en daarmee heb ik een badge behaald.</p>
                <ExampleArea>
                    <ExampleItem> <a className="uk-button uk-button-text" rel="noreferrer" href="/images/linkedin_badge_30-10-2021.png" target="_blank">Zie hier de badge in een screenhost. (png)</a> </ExampleItem>
                </ExampleArea>

                <h2>Tot slot</h2>

                <p>Ik heb hierboven een aantal voorbeeld projecten van mij gedeeld. Mochten er vragen zijn, of behoefte aan nog meer voorbeelden of een referentie, dan ben ik altijd te bereiken op <a href="tel:+31643906838">+31643906838</a> of <a href="mailto:robin@rtbprojects.com">robin@rtbprojects.com</a>.</p>

            </article>
        </div>
    </StyledSection>
  </LayoutDefault>
)

const StyledSection = styled.section`
    img[alt="pdf"] {
        height: 25px;
    }
    a {
        color: #00c81e;
    }
    .uk-grid-small span {
        font-weight: bold;
    }
`

export default AholdPage
