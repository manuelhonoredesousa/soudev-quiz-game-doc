import { Button } from "./Components/Button";
import { Link } from "./Components/Link";
import { TextSpace } from "./Components/TextSpace";
import sun_img from "./../public/sun-iso-color.png";

import "./App.css";
import { Heading } from "./Components/Heading";

function App() {
  // const [apiInformation, setApiInformation] = useState({url: "https://api.soudev.com"});
  return (
    <>
      <div className="flex items-center">
        <div>
          <Heading text="SouDEV - Quiz Game" />
          <TextSpace
            text="Bem-vindo à documentação da API do nosso jogo de Quiz! Aqui você
            encontrará todas as informações necessárias para começar a criar
            aplicativos incríveis usando nossa API."
          />

          <TextSpace
            text="Nossa API de Quiz Game é uma plataforma poderosa e flexível que permite
        criar e gerenciar jogos de perguntas e respostas em diferentes línguas e
        com imagens, tornando a experiência do usuário mais rica e envolvente.
        Com suporte a mais de sete idiomas, você pode oferecer uma experiência
        multilíngue para seus usuários e alcançar uma audiência global."
          />

          <TextSpace
            text="Com a nossa API, você pode criar diferentes tipos de jogos, incluindo
        jogos de imagens. Você pode usar nossa extensa biblioteca de imagens ou
        adicionar suas próprias imagens personalizadas. Além disso, nossa API
        permite que você personalize os jogos de acordo com suas necessidades,
        incluindo o número de perguntas, a dificuldade, o tempo de resposta,
        entre outros."
          />

          <TextSpace
            text="Para começar a usar nossa API, basta criar uma conta e obter suas
        credenciais de API. Em seguida, você pode fazer solicitações à API para
        criar jogos, adicionar perguntas e imagens, e gerenciar usuários e
        pontuações."
          />

          <TextSpace
            text="Nossa documentação é completa e fácil de seguir, com exemplos de código
        e uma lista de todos os endpoints disponíveis. Se você tiver dúvidas ou
        precisar de suporte, nossa equipe de suporte estará sempre disponível
        para ajudar."
          />

          <TextSpace
            text="Então, comece agora a usar nossa API de Quiz Game e crie jogos incríveis
        que seus usuários vão adorar!"
          />

          <div className="flex flex-col gap-1 mt-4">
            <label className="text-_primary-100 font-bold" htmlFor="name">Name:</label>
            <input className="bg-transparent border border-_primary-100 rounded p-2" placeholder="Your Name" type="text" name="name" required/>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <label className="text-_primary-100 font-bold" htmlFor="email">E-mail:</label>
            <input className="bg-transparent border border-_primary-100 rounded p-2" placeholder="Your E-mail" type="email" name="email" />
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <label className="text-_primary-100 font-bold" htmlFor="message">Message:</label>
            <textarea className="bg-transparent border border-_primary-100 rounded p-2" placeholder="Your Suggestion, Criticism or Contribution" name="message" required></textarea>
          </div>
          <div className="flex flex-row justify-end gap-1 mt-4">
            <Button text="SEND MESSAGE" type="primary"/>
            <Button text="CLOSE" type="error"/>
          </div>

          <div className="flex items-center gap-2">
            <Button text="Get Started" type="primary" />
            <Link text="Feedback" />
          </div>
        </div>
        <div className="flex items-center">
          <img src={sun_img} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
