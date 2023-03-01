// import logo from './logo.svg';
import './styles/App.scss';

function App() {
  return (
    <>
    {/* <!-- SECTION 1 - HEADER --> */}
    <header className="header">
  
      {/* <!-- SECTION 1.1 - TOPBAR --> */}
      <section className="header-topbar">
  
        {/* <!-- HEADER - Logo --> */}
        <div>
          <a href="#index" className="header-logo-link">
            <img src="images/logo/Booki.png" alt="Logo Booki"/>
          </a>
        </div>
  
        {/* <!-- HEADER - Menu --> */}
        <nav className="nav">
          <ul>
            <li className="nav-item" id="nav-active">
              <a className="nav-link" href="#index">Hébergements</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#index">Activités</a>
            </li>
          </ul>
        </nav>
  
      </section>
  
  
      {/* <!-- SECTION - Search --> */}
      <section className="search">
  
        <div className="search-container">
  
          {/* <!-- SEARCH - Description --> */}
          <div className="search-description">
            <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
            <h2>En plein centre ville ou en pleine nature</h2>
          </div>
  
          {/* <!-- SEARCH - Searchbar --> */}
          <div className="search-bar">
            <form className="search-form">
              <i className="fas fa-map-marker-alt"></i>
              <input type="text" name="search" placeholder="Ville, PAYS" className="search-txt"/>
              <button type="submit" name="search-btn" className="search-btn">Rechercher</button>
              <i className="fas fa-search"></i>
            </form>
          </div>
  
          {/* <!-- SEARCH - Filtres --> */}
          <div className="toggle-box">
  
            {/* <!-- Filtres - Titre --> */}
            <p>Filtres</p>
  
            {/* <!-- Filtres - Container des buttons --> */}
            <div className="toggle-buttons">
  
              {/* <!-- Filtres - Button 1 --> */}
              <div className="toggle" id="toggle-1">
                <input className="filter-toggle" type="checkbox" id="filter-toggle-1"/>
                <label className="toggle-label" for="filter-toggle-1">
                  <span className="toggle-round" id="toggle-round-1"></span>
                  <span className="toggle-txt">Économique</span>
                </label>
              </div>
  
              {/* <!-- Filtres - Button 2 --> */}
              <div className="toggle" id="toggle-2">
                <input className="filter-toggle" type="checkbox" id="filter-toggle-2"/>
                <label className="toggle-label" for="filter-toggle-2">
                  <span className="toggle-round" id="toggle-round-2"></span>
                  <span className="toggle-txt">Familial</span>
                </label>
              </div>
  
              {/* <!-- Filtres - Button 3 --> */}
              <div className="toggle" id="toggle-3">
                <input className="filter-toggle" type="checkbox" id="filter-toggle-3"/>
                <label className="toggle-label" for="filter-toggle-3">
                  <span className="toggle-round" id="toggle-round-3"></span>
                  <span className="toggle-txt">Romantique</span>
                </label>
              </div>
  
              {/* <!-- Filtres - Button 4 --> */}
              <div className="toggle" id="toggle-4">
                <input className="filter-toggle" type="checkbox" id="filter-toggle-4"/>
                <label className="toggle-label" for="filter-toggle-4">
                  <span className="toggle-round" id="toggle-round-4"></span>
                  <span className="toggle-txt">Animaux autorisés</span>
                </label>
              </div>
  
            </div>
  
          </div>
  
  
          {/* <!-- SEARCH - Info --> */}
          <div className="search-info">
            <i className="fas fa-info"></i>
            <p>Plus de 500 logements sont disponibles dans cette ville</p>
          </div>
  
        </div>
  
      </section>
  
    </header>

      {/* <!-- SECTION 2 - MAIN --> */}
  <main className="main">

    {/* <!-- SECTION 2.1 - Container Homes et Popular --> */}
    <div className="container-hp">

      {/* <!-- HOMES - Grande Card --> */}
      <div className="card-hp card-homes">

        {/* <!-- HOMES - Titre --> */}
        <div className="card-title">
          <h1 className="main-h1">Hébergements à Marseille</h1>
        </div>

        {/* <!-- HOMES - Container des petites cards --> */}
        <div className="hp-cards-wrapper homes-cards-wrapper">

          {/* <!-- HOMES - CARD 1 --> */}
          <div className="main-cards homes-cards">
            <a className="main-links" href="#pop-cards">

              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture">
                <source media="(max-width: 700px)" srcset="images/homes/1/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/1/tablet.jpg 2x"/>
                <img className="main-img" src="images/homes/1/desktop.jpg"
                  alt="Chambre à l'Auberge La Cannebière"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content">
                <div>
                  <p className="main-cards-title homes-titles">Auberge La Cannebière</p>
                  <p className="main-prices">Nuit à partir de <strong>25€</strong></p>
                </div>

                {/* <!-- CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star star-grey"></i>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- HOMES - CARD 2 --> */}
          <div className="main-cards homes-cards">
            <a className="main-links" href="#pop-cards">


              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture">
                <source media="(max-width: 700px)" srcset="images/homes/2/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/2/tablet.jpg 2x"/>
                <img className="main-img" src="images/homes/2/desktop.jpg" alt="Chambre à l'Hôtel du port"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content">
                <div>
                  <p className="main-cards-title homes-titles">Hôtel du port</p>
                  <p className="main-prices">Nuit à partir de <strong>52€</strong></p>
                </div>

                {/* <!--CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- HOMES - CARD 3 --> */}
          <div className="main-cards homes-cards">
            <a className="main-links" href="#pop-cards">

              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture">
                <source media="(max-width: 700px)" srcset="images/homes/3/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/3/tablet.jpg 2x"/>
                <img className="main-img" src="images/homes/3/desktop.jpg" alt="Chambre à l'Hôtel Les mouettes"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content">
                <div>
                  <p className="main-cards-title homes-titles">Hôtel Les mouettes</p>
                  <p className="main-prices">Nuit à partir de <strong>76€</strong></p>
                </div>
                {/* <!--CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star star-grey"></i>
                </div>
              </div>

            </a>
          </div>

          {/* <!-- HOMES - CARD 4 --> */}
          <div className="main-cards homes-cards">
            <a className="main-links" href="#pop-cards">

              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture">
                <source media="(max-width: 700px)" srcset="images/homes/4/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/4/tablet.jpg 2x"/>
                <img className="main-img" src="images/homes/4/desktop.jpg" alt="Chambre à l'Hôtel de la mer"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content">
                <div>
                  <p className="main-cards-title homes-titles">Hôtel de la mer</p>
                  <p className="main-prices">Nuit à partir de <strong>46€</strong></p>
                </div>

                {/* <!--CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star star-grey"></i>
                  <i className="fas fa-star star-grey"></i>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- HOMES - CARD 5 --> */}
          <div className="main-cards homes-cards">
            <a className="main-links" href="#pop-cards">

              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture">
                <source media="(max-width: 700px)" srcset="images/homes/5/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/5/tablet.jpg 2x"/>
                <img className="main-img" src="images/homes/5/desktop.jpg" alt="Chambre à l'Auberge Le Panier"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content">
                <div>
                  <p className="main-cards-title homes-titles">Auberge Le Panier</p>
                  <p className="main-prices">Nuit à partir de <strong>23€</strong></p>
                </div>
                {/* <!--CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star star-grey"></i>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- HOMES - CARD 6 --> */}
          <div className="main-cards homes-cards">
            <a className="main-links" href="#pop-cards">

              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture">
                <source media="(max-width: 700px)" srcset="images/homes/6/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/6/tablet.jpg 2x"/>
                <img className="main-img" src="images/homes/6/desktop.jpg" alt="Chambre à l'Hôtel chez Amina"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content">
                <div>
                  <p className="main-cards-title homes-titles">Hôtel chez Amina</p>
                  <p className="main-prices">Nuit à partir de <strong>96€</strong></p>
                </div>
                {/* <!--CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* <!--HOMES AFFICHER PLUS --> */}
        <div className="homes-more">
          <a className="homes-more-link" href="#pop-cards">Afficher plus</a>
        </div>

      </div>



      {/* <!-- POPULAR --> */}

      {/* <!-- POPULAR - Grande Card --> */}
      <div className="card-hp card-pop">


        {/* <!-- POPULAR - Titre --> */}
        <div className="card-title card-pop-title">
          <h1 className="main-h1">Les plus populaires</h1>
          <i className="fas fa-chart-line" aria-hidden="true"></i>
        </div>

        {/* <!-- POPULAR - Container des petites cards --> */}
        <div className="hp-cards-wrapper pop-cards-wrapper">


          {/* <!-- POPULAR - CARD 1 --> */}
          <div className="main-cards pop-cards">
            <a className="main-links pop-links" href="#pop-cards">

              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture pop-picture">
                <source media="(max-width: 700px)" srcset="images/homes/7/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/7/tablet.jpg 2x"/>
                <img className="main-img pop-img" src="images/homes/7/desktop.jpg"
                  alt="Chambre à l'Hôtel Le soleil du matin"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content pop-content">
                <div>
                  <p className="main-cards-title pop-titles">Hôtel Le soleil du matin</p>
                  <p className="main-prices">Nuit à partir de <strong>128€</strong></p>
                </div>

                {/* <!--CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- POPULAR - CARD 2 --> */}
          <div className="main-cards pop-cards">
            <a className="main-links pop-links" href="#pop-cards">

              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture pop-picture">
                <source media="(max-width: 700px)" srcset="images/homes/8/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/8/tablet.jpg 2x"/>
                <img className="main-img pop-img" src="images/homes/8/desktop.jpg"
                  alt="Chambre d'hôte au Coeur de l'eau"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content pop-content">
                <div>
                  <p className="main-cards-title pop-titles">Au coeur de l'eau Chambres d'hôtes</p>
                  <p className="main-prices">Nuit à partir de <strong>71€</strong></p>
                </div>

                {/* <!--CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star star-grey"></i>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- POPULAR - CARD 3 --> */}
          <div className="main-cards pop-cards">
            <a className="main-links pop-links" href="#pop-links">

              {/* <!-- CARD IMAGE --> */}
              <picture className="main-picture pop-picture">
                <source media="(max-width: 700px)" srcset="images/homes/9/mobile.jpg 1x"/>
                <source media="(max-width: 950px)" srcset="images/homes/9/tablet.jpg 2x"/>
                <img className="main-img pop-img" src="images/homes/9/desktop.jpg"
                  alt="Chambre à l'Hôtel Tout bleu et Blanc"/>
              </picture>

              {/* <!-- CARD DESCRIPTION --> */}
              <div className="main-cards-content pop-content">
                <div>
                  <p className="main-cards-title pop-titles">Hôtel Tout bleu et Blanc</p>
                  <p className="main-prices">Nuit à partir de <strong>68€</strong></p>
                </div>

                {/* <!--CARD STARS --> */}
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star star-grey"></i>
                </div>
              </div>
            </a>
          </div>

        </div> 

      </div> 

    </div>





    {/* <!-- SECTION 2.2 - Container Activities --> */}
    <div className="container-acti">

      {/* <!-- ACTIVITIES - Grande Card --> */}
      <div className="card-acti">

        {/* <!-- ACTIVITIES - Titre --> */}
        <div className="card-title">
          <h1 className="main-h1">Activités à Marseille</h1>
        </div>

        {/* <!-- ACTIVITIES - Container des petites cards --> */}
        <div className="acti-cards-wrapper">

          {/* <!-- ACTIVITIES - CARD 1 --> */}
          <div className="main-cards acti-cards acti-cards-l" id="acti-cards-1">
            <a className="main-links acti-links" href="#acti-cards-1">
              <div className="acti-content-container">
                {/* <!-- CARD IMAGE --> */}
                <picture className="main-picture acti-picture acti-picture-l">
                  <source media="(max-width: 700px)" srcset="images/activites/1/mobile.jpg 1x"/>
                  <source media="(max-width: 950px)" srcset="images/activites/1/tablet.jpg 2x"/>
                  <img className="main-img" src="images/activites/1/desktop.jpg" alt="Vieux Port"/>
                </picture>

                {/* <!-- CARD DESCRIPTION --> */}
                <div className="main-cards-content acti-content">
                  <p className="main-cards-title acti-titles">Vieux Port</p>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- ACTIVITIES - CARD 2 --> */}
          <div className="main-cards acti-cards acti-cards-m" id="acti-cards-2">
            <a className="main-links acti-links" href="#acti-cards-2">
              <div className="acti-content-container">
                {/* <!-- CARD IMAGE --> */}
                <picture className="main-picture acti-picture acti-picture-m">
                  <source media="(max-width: 700px)" srcset="images/activites/2/mobile.jpg 1x"/>
                  <source media="(max-width: 950px)" srcset="images/activites/2/tablet.jpg 2x"/>
                  <img className="main-img" src="images/activites/2/desktop.jpg" alt="Fort de Pomègues"/>
                </picture>

                {/* <!-- CARD DESCRIPTION --> */}
                <div className="main-cards-content acti-content">
                  <p className="main-cards-title acti-titles">Fort de Pomègues</p>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- ACTIVITIES - CARD 3 --> */}
          <div className="main-cards acti-cards acti-cards-s" id="acti-cards-3">
            <a className="main-links acti-links" href="#acti-cards-3">
              <div className="acti-content-container">
                {/* <!-- CARD IMAGE --> */}
                <picture className="main-picture acti-picture acti-picture-s">
                  <source media="(max-width: 700px)" srcset="images/activites/3/mobile.jpg 1x"/>
                  <source media="(max-width: 950px)" srcset="images/activites/3/tablet.jpg 2x"/>
                  <img className="main-img" src="images/activites/3/desktop.jpg" alt="Îles du Frioul"/>
                </picture>

                {/* <!-- CARD DESCRIPTION --> */}
                <div className="main-cards-content acti-content">
                  <p className="main-cards-title acti-titles">Îles du Frioul</p>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- ACTIVITIES - CARD 4 --> */}
          <div className="main-cards acti-cards acti-cards-l" id="acti-cards-4">
            <a className="main-links acti-links" href="#acti-cards-4">
              <div className="acti-content-container">
                {/* <!-- CARD IMAGE --> */}
                <picture className="main-picture acti-picture acti-picture-l">
                  <source media="(max-width: 700px)" srcset="images/activites/4/mobile.jpg 1x"/>
                  <source media="(max-width: 950px)" srcset="images/activites/4/tablet.jpg 2x"/>
                  <img className="main-img" src="images/activites/4/desktop.jpg" alt="Parc National des Calanques"/>
                </picture>

                {/* <!-- CARD DESCRIPTION --> */}
                <div className="main-cards-content acti-content">
                  <p className="main-cards-title acti-titles">Parc National des Calanques</p>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- ACTIVITIES - CARD 5 --> */}
          <div className="main-cards acti-cards acti-cards-s" id="acti-cards-5">
            <a className="main-links acti-links" href="#acti-cards-5">
              <div className="acti-content-container">
                {/* <!-- CARD IMAGE --> */}
                <picture className="main-picture acti-picture acti-picture-s">
                  <source media="(max-width: 700px)" srcset="images/activites/5/mobile.jpg 1x"/>
                  <source media="(max-width: 950px)" srcset="images/activites/5/tablet.jpg 2x"/>
                  <img className="main-img" src="images/activites/5/desktop.jpg" alt="Notre-Dame-de-la-Garde"/>
                </picture>

                {/* <!-- CARD DESCRIPTION --> */}
                <div className="main-cards-content acti-content">
                  <p className="main-cards-title acti-titles">Notre-Dame-de-la-Garde</p>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- ACTIVITIES - CARD 6 --> */}
          <div className="main-cards acti-cards acti-cards-m" id="acti-cards-6">
            <a className="main-links acti-links" href="#acti-cards-6">
              <div className="acti-content-container">
                {/* <!-- CARD IMAGE --> */}
                <picture className="main-picture acti-picture acti-picture-m">
                  <source media="(max-width: 700px)" srcset="images/activites/6/mobile.jpg 1x"/>
                  <source media="(max-width: 950px)" srcset="images/activites/6/tablet.jpg 2x"/>
                  <img className="main-img" src="images/activites/6/desktop.jpg" alt="Parc Longchamp"/>
                </picture>

                {/* <!-- CARD DESCRIPTION --> */}
                <div className="main-cards-content acti-content">
                  <p className="main-cards-title acti-titles">Parc Longchamp</p>
                </div>
              </div>
            </a>
          </div>

        </div> 

      </div> 

    </div>

  </main>

    {/* <!--SECTION 3 - FOOTER --> */}
  <footer className="footer">

    {/* <!-- FOOTER - Container des sections --> */}
    <div className="footer-container">

      {/* <!-- FOOTER - Section 1 --> */}
      <div className="footer-section">

        {/* <!-- FOOTER - Titres --> */}
        <p className="footer-title">A propos</p>
        <ul>
          <li><a className="footer-links" href="#footer-links">Fonctionnement du site</a></li>
          <li><a className="footer-links" href="#footer-links">Conditions générales de vente</a></li>
          <li><a className="footer-links" href="#footer-links">Données et confidentialité</a></li>
        </ul>

      </div>

      {/* <!-- FOOTER - Section 2 --> */}
      <div className="footer-section">

        {/* <!-- FOOTER - Titres --> */}
        <p className="footer-title">Nos hébergements</p>
        <ul>
          <li><a className="footer-links" href="#footer-links">Charte qualité</a></li>
          <li><a className="footer-links" href="#footer-links">Soumettre votre hôtel</a></li>
        </ul>

      </div>

      {/* <!-- FOOTER - Section 3 --> */}
      <div className="footer-section">

        {/* <!-- FOOTER - Titres --> */}
        <p className="footer-title">Assistance</p>
        <ul>
          <li><a className="footer-links" href="#footer-links">Centre d'aide</a></li>
          <li><a className="footer-links" href="#footer-links">Nous contacter</a></li>
        </ul>

      </div>

    </div>

  </footer>
  </>
  );
}

export default App;
