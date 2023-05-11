import { useState } from "react";
import { Button } from "../Components/Button";
import { Details } from "../Components/Details";
import { Radio } from "../Components/Form/Radio";
import { Heading } from "../Components/Heading";
import { TextSpace } from "../Components/TextSpace";
import rooling from "./../Assets/rolling_200px.svg";
import "./Documentation.css";
import { ToastContainer, toast } from "react-toastify";

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
export type numberOrString = string | number;
type questionsOptionsTypes = [ numberOrString, numberOrString, numberOrString, numberOrString];
interface QuestionEntity {
  id: number | undefined;
  question: string;
  options: questionsOptionsTypes;
  answer: numberOrString;
}

export function Documentation() {
  const [isLoadding, setIsLoadding] = useState<boolean>(false);
  const [answerChoice, setAnswerChoice] = useState<string>();
  const [languageCode, setLanguageCode] = useState("ar");
  const [quizGame, setQuizGame] = useState<QuestionEntity>();

  function handleRadioChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedRadioOption = e.target.value;
    setAnswerChoice(selectedRadioOption);
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLanguageCode = e.target.value;
    setLanguageCode(selectedLanguageCode);
  }

  function notify({type, sms}:{type: "error" | "success" | "info", sms: string}) {
    if (type == "success") {
      toast.success(sms)
    }
    if (type == "error") {
      toast.error(sms,{autoClose:7000})
    }
    if (type == "info") {
      toast.info(sms,{autoClose:2000})
    }
  }

  function verifyAnswer() {
    
    if (quizGame?.id == undefined) {
      notify({type: "info", sms: "Primeiro clica em 'Novo Jogo'"})
      return
    }
    if (answerChoice == undefined) {
      notify({type: "info", sms: "Selecione uma opção antes"})
      return
    }
    const isCorrectAnswer = answerChoice === quizGame!.answer;

    if (isCorrectAnswer) {
      notify({type: "success", sms: "Resposta Correcta"})
    } else {
      notify({type: "error", sms: `Resposta Errada, a opção correcta era : "${quizGame?.answer}"`})
    }
    setAnswerChoice(undefined);
    closeGame();
  }

  function getNewGame() {
    closeGame()
    setIsLoadding(true);
    
    fetch(`${API_INFORMATIONS.url}/${languageCode}/random-question`)
    .then(response => response.json())
    .then(data => {
      setQuizGame(data.quiz) 
      setIsLoadding(false);      
      if (data.quiz.id == undefined) {
        notify({type:"error", sms: "Problema na requisição de dados com API."})
        closeGame()
      }
    })
    .catch(error => {
      notify({
      type:"error", 
      sms: "Problema na requisição de dados com API, verifique sua conexão ou me manda um Feedback na página inicial"
    })    
    setIsLoadding(false); 
    closeGame()
  })
  }

  function closeGame(){
    
    setQuizGame((prev:any)=>{ //TODO i don't think how to fix this part yet
      return {
        ...prev,
        id: undefined
      }
    })
    setAnswerChoice(undefined)
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
          <Details.Span
            key={key}
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

        <Details.Link link={API_INFORMATIONS.url} />
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

        <Details.Link link={`${API_INFORMATIONS.url}/pt/Science_and_technology/1`} />
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

        <Details.Link link={`${API_INFORMATIONS.url}/pt/random-topic`} />
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

        <Details.Link link={`${API_INFORMATIONS.url}/pt/random-question`} />
      </Details.Group>

      <Heading text="Demonstração - Usando rota para perguntas aleatórias" headType="h2"/>

      <Details.Text>
        Clica em 'Novo Jogo' para solicitar uma questão de forma aleatótia a
        API.
      </Details.Text>
      <Details.Text>
        Seleciona uma língua{" "}
        <select onChange={handleSelectChange} className="p-1 rounded-md">
          {API_INFORMATIONS.avaliableLanguages.map((language, index) => (
            <option value={language.code} key={index}>
              {language.language}
            </option>
          ))}
        </select>
      </Details.Text>

      <div className="bg-_secondary rounded-md p-6  break-words question-area max-w-5xl ">
        {quizGame?.id == undefined ? (
          <img hidden={!isLoadding ? true : false} className="my-9 m-auto w-14" src={rooling} alt="Loadding..."/>
        ) : (
          <div>
            {quizGame?.question.slice(0,8) == "https://" ? (<img src={quizGame?.question} alt="question"/>) : (<p className="font-bold">{quizGame?.question}</p>)}
            <div onChange={handleRadioChanges}>
              {quizGame?.options.map((option, index) => <Radio key={index} id={`Linha_${index + 1}`} group="options" text={option}/>)}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <Button onClickButton={getNewGame} text="Novo Jogo" buttonType="secondary" />
          <Button onClickButton={verifyAnswer} text="Verificar Resposta" buttonType="secondary" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
