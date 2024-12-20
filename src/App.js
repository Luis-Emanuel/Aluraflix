import Menu from "./components/Menu";
import "./"
import BannerMain from "./components/BannerMain";
import dadosIniciais from "./data/dados_iniciais.json";

function App() {
  return (
    <div className="app">
      <Menu/>
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área O npx não é o npm, pois no npx ele instala o pacote temporariamente e depois de usarmos ele deleta. Stala o pacote temporariamente. Acote temporariamente e depois de"}
      />

    </div>
  );
}

export default App;
