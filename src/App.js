import './App.css'

function App() {
  return (
    <div className="App">
     <div class="main_container" id="home">
	<div class="navbar">
		<div class="logo">
			<a href="#">Kumatz' Tecnologies</a>
		</div>
		<div class="navbar_items">
			<ul>
				<li><a href="#">Inicio</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#services">Servicios</a></li>
				<li><a href="#contactus">Contactos</a></li>
				<li><a href="#ourteam">Equipo</a></li>
			</ul>
		</div>
	</div>

	<div class="banner_image">
		<div class="banner_content">
			<h1>Si Quieres un Programa<br/>
				<span>No Dudes En Pedirlo</span>
			</h1>
		</div>
	</div>

	<div class="about" id="about">
		<h1 class="title">About us</h1>
		<p>Somos un grupo pequeño de desarrollo, en busca de oportunidades,</p>
			<p>dispuestos a aprender lo que sea, además de poder adaptarnos con facilidad.</p>
			<p>nuestra especialidad son aplicaciones web.</p>
		<div class="btn"><a href="#">Learn More</a></div>
	</div>

	<div class="services" id="services">
		<h1 class="title">Nuestros Servicios</h1>
		<p>Nuestros servicios son variados y de todo tipo, pero destacan:</p>

		<div class="diff_services">
			<div class="diff_service_item">
				<img src="https://i.imgur.com/wyeA7Ct.png" alt="Service_image"></img>
				<h3>Sitios Web</h3>
				<p>Creamos websites, con tecnologias como react, angular y añadiendoles Css</p>
			</div>
			<div class="diff_service_item">
				<img src="https://i.imgur.com/zOqXKNN.png" alt="Service_image"></img>
				<h3>Aplicaciones</h3>
				<p>Nos enfocamos en aplicaciones moviles, usualmente juegos, aunque tambien trabajamos con aplicaciones web</p>
			</div>
			<div class="diff_service_item">
				<img src="https://i.imgur.com/TLy9GMu.png" alt="Service_image"></img>
				<h3>PSD a HTML</h3>
				<p>Realizamos conversiones de archivos de PhotoShop a formato html</p>
			</div>
		</div>
	</div>

	<div class="ourteam" id="ourteam">
		<h1 class="title">our team</h1>
		<div class="ourteam_wrapper">
			<div class="team-1 team">
				<div class="team_member">
					<img src="https://i.imgur.com/DFZPOdT.jpg" alt="Team_Image"></img>
				</div>
				<div class="team_member">
					<img src="https://i.imgur.com/GionYfa.jpg" alt="Team_Image"></img>
				</div>
				<div class="team_member">
					<img src="https://i.imgur.com/fesdHmx.jpg" alt="Team_Image"></img>
				</div>
			</div>
			<div class="team-2 team">
				<div class="team_member">
					<img src="https://i.imgur.com/pMZJLmg.jpg" alt="Team_Image"></img>
				</div>
				<div class="team_member">
					<img src="https://i.imgur.com/dAyITbN.jpg" alt="Team_Image"></img>
				</div>
				<div class="team_member">
					<img src="https://i.imgur.com/1JxSNJ1.jpg" alt="Team_Image"></img>
				</div>
			</div>
		</div>
	</div>

	<div class="footer">
		<a href="#">@ 2022 Kumatz' Tecnologies </a>
	</div>

	<div class="arrow">
		<a href="#home"><img src="https://i.imgur.com/wre6n0O.png" alt="up_arrow"></img></a>
	</div>
</div>
    </div>
  );
}

export default App;
