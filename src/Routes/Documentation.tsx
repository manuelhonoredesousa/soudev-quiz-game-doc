import { InputHTMLAttributes } from "react";
import { Button } from "../Components/Button";
import { Details } from "../Components/Details";
import { Radio } from "../Components/Form/Radio";
import { Heading } from "../Components/Heading";
import { TextSpace } from "../Components/TextSpace";

const API_INFORMATIONS = {
  url: "https://quiz-game.cyclic.app",
  avaliableLanguages: [
    {
      language: "Arabic",
      code: "ar",
    },
    {
      language: "English",
      code: "en",
    },
    {
      language: "French",
      code: "fr",
    },
    {
      language: "Hindi",
      code: "hi",
    },
    {
      language: "Japanese",
      code: "ja",
    },
    {
      language: "Korean",
      code: "ko",
    },
    {
      language: "Mandarin",
      code: "zh",
    },
    {
      language: "Portuguese",
      code: "pt",
    },
    {
      language: "Russian",
      code: "ru",
    },
    {
      language: "Spanish",
      code: "es",
    },
  ],
  avaliableTopics: [
    "world_geography",
    "world_history",
    "Movies_and_TV_series",
    "Music_and_famous_artists",
    "Famous_sports_and_athletes",
    "Science_and_technology",
    "Animals_and_wild_life",
    "Art_and_culture",
    "food_and_gastronomy",
    "Literature_and_famous_authors",
    "Image_quiz",
  ],
};

export function Documentation() {
  function handleRadioChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    console.log(value);
    
  }

  function selectCurrentOption(data: string) {
    console.log(data);
    }

  return (
    <>
      <Heading text="Documentação - Quiz Game" />
      <hr />
      <TextSpace text="Com esta API, você pode criar diferentes tipos de jogos, incluindo jogos de imagens. Para começar a usar, basta seguir as 'instruções de uso' abaixo, e em seguida você pode fazer solicitações à API para criar jogos" />
      <TextSpace text="Nossa documentação é completa e fácil de seguir, com exemplos e uma lista de todos os endpoints disponíveis. Se você tiver dúvidas ou precisar de suporte, basta clicar em 'Feedback' na página inicial que eu estarei sempre disponível para ajudar." />
      <TextSpace text="Tendo em conta que a hospedagem da API é gratuíta, a mesma possuí uma limitação de 10.000 solicitações por mês." />
      <Heading text="Instruções de Uso" headType="h2" />

      <Details.Text>
        Actualmente a API tem suporta a{" "}
        {API_INFORMATIONS.avaliableLanguages.length}, línguas, as quais são:{" "}
        {API_INFORMATIONS.avaliableLanguages.map((language, key) => (
          <Details.Span key={key}
            text={`${language.language}(${language.code}), `}
            textColor="Primary 100"
          />
        ))}
        e para cada língua escolhida possui{" "}
        {API_INFORMATIONS.avaliableTopics.length} tópicos diferentes, que são:{" "}
        {API_INFORMATIONS.avaliableTopics.map((topic, key) => (
          <Details.Span key={key} text={`${topic}, `} textColor="Primary 100" />
        ))}
        contudo a API possui 4 endpoints que são:
      </Details.Text>
      

      <Details.Group title="Rota para informações">
        <Details.Text>
          A rota simplismente serve para retornar informações sobre como fazer
          solicitações a API, caso o usuário não quer abrir o site de a
          documentação.
        </Details.Text>

        <Details.Link link="https://quiz-game.cyclic.app" />
      </Details.Group>

      <Details.Group title="Rota para jogo (modo normal)">
        <Details.Text>
          Esta é a rota principal para personalizar suas requisições a API, você
          precisa informar qual língua quer usar, tópico e a página que deseja
          acessar. Para cada pedido a uma pagina é mostrado quantas páginas o
          topico escolhido tem. As páginas são compostas de 10 questões.
        </Details.Text>

        <Details.Text>
          OBS: A ordem das opções de respostas de cada pergunta é alterada em
          cada solicitação na API, fazendo com que se a mesma pergunta for
          mostrada duas ou mais vezes, a ordem das opções é alterada.
        </Details.Text>

        <Details.Text>
          <Details.Span text="Sintaxe: " textColor="Primary 500" />
          {API_INFORMATIONS.url}
          /<Details.Span text="codico_de_lingua" textColor="Primary 100" />
          /<Details.Span text="topico" textColor="Primary 100" />
          /<Details.Span text="numero_da_pagina" textColor="Primary 100" />
        </Details.Text>

        <Details.Text>
          <Details.Span text="codico_de_lingua: " textColor="Primary 500" />
          <Details.Span text="en, pt, ko, " textColor="Primary 100" />
          todos os códigos das línguas estão disponíveis acima na 'lista das
          línguas disponíveis'.
        </Details.Text>

        <Details.Text>
          <Details.Span text="topico: " textColor="Primary 500" />
          <Details.Span
            text="world_geography, world_history, "
            textColor="Primary 100"
          />
          todos os tópicos estão disponíveis acima na 'lista dos tópicos'.
        </Details.Text>

        <Details.Text>
          <Details.Span text="numero_da_pagina: " textColor="Primary 500" />
          <Details.Span text="1, 2, 3..., " textColor="Primary 100" />
          para cada solicitação a um tópico são mostrado números de páginas
          disponíveis.
        </Details.Text>

        <Details.Link link="https://quiz-game.cyclic.app/pt/Science_and_technology/1" />
      </Details.Group>

      <Details.Group title="Rota para obter tópicos de perguntas de modo aleatórias">
        <Details.Text>
          Usando esta rota, você precisa informar com qual língua você deseja
          trabalhar, e em seguida fazer a solicitação. Será dada como resposta
          um tópico aleatória com uma coleção de todas as perguntas que o tópico
          possui.
        </Details.Text>

        <Details.Text>
          OBS: A ordem das opções de respostas de cada pergunta é alterada em
          cada solicitação na API, fazendo com que se a mesma pergunta for
          mostrada duas ou mais vezes, a ordem das opções é alterada.
        </Details.Text>

        <Details.Text>
          <Details.Span text="Sintaxe: " textColor="Primary 500" />
          {API_INFORMATIONS.url}
          /<Details.Span text="codico_de_lingua" textColor="Primary 100" />
          /random-topic
        </Details.Text>

        <Details.Text>
          <Details.Span text="codico_de_lingua: " textColor="Primary 500" />
          <Details.Span text="en, pt, ko, " textColor="Primary 100" />
          todos os códigos das línguas estão disponíveis acima na 'lista das
          línguas disponíveis'.
        </Details.Text>

        <Details.Link link="https://quiz-game.cyclic.app/pt/random-topic" />
      </Details.Group>

      <Details.Group title="Rota para obter perguntas aleatórias">
        <Details.Text>
          Com esta rota você não precisa informar qual tópico quer usar, ou em
          que página quer procurar a pergunta, a API se responsabiliza em
          escolher um topico e uma pergunta de forma aleatória, deixando tudo
          mais desaficador e não te deixa ficar em perguntas com assustus
          relacionados, você só precisa informar a língua que pretende usar.
        </Details.Text>

        <Details.Text>
          OBS: A ordem das opções de respostas de cada pergunta é alterada em
          cada solicitação na API, fazendo com que se a mesma pergunta for
          mostrada duas ou mais vezes, a ordem das opções é alterada.
        </Details.Text>

        <Details.Text>
          <Details.Span text="Sintaxe: " textColor="Primary 500" />
          {API_INFORMATIONS.url}
          /<Details.Span text="codico_de_lingua" textColor="Primary 100" />
          /random-question
        </Details.Text>

        <Details.Text>
          <Details.Span text="codico_de_lingua: " textColor="Primary 500" />
          <Details.Span text="en, pt, ko, " textColor="Primary 100" />
          todos os códigos das línguas estão disponíveis acima na 'lista das
          línguas disponíveis'.
        </Details.Text>

        <Details.Link link="https://quiz-game.cyclic.app/pt/random-question" />
      </Details.Group>

      <Heading
        text="Demonstração - Usando rota para perguntas aleatórias"
        headType="h2"
      />

      <Button text="Solicitar Pergunta" buttonType="primary" />
      <Button text="Confirmar" buttonType="primary" />
      <TextSpace text="Você pode ir alem e fazer toca de perguntas de forma automática após esconlher uma pergunta, solicitar" />
      <div className="bg-slate-400 flex flex-col">
        <div>
          <TextSpace text="* Questão ?" />
        </div>
        <div onChange={handleRadioChanges}>
          <Radio handleRadioClick={()=> selectCurrentOption("-Manuel")} id="option_1" group="options" text="Manuel" />
          <Radio handleRadioClick={()=> selectCurrentOption("-Bunga")} id="option_2" group="options" text="Bunga" />
          <Radio handleRadioClick={()=> selectCurrentOption("-Honore")} id="option_3" group="options" text="Honore" />
          <Radio handleRadioClick={()=> selectCurrentOption("-Sousa")} id="option_4" group="options" text="Sousa" />
        </div>
      </div>
    </>
  );
}
