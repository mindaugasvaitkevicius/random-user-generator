$.ajax({
	url: 'https://randomuser.me/api/',
	dataType: 'json',
	success: function (person) {
		console.log(person);
		info(person);
	}
});

function info(person) {
	
	let img = document.querySelector("img");
	img.setAttribute("src", person.results[0].picture.large);
	
	let name = document.querySelector("h2");
	name.textContent = person.results[0].name.first + " " + person.results[0].name.last;
	
	let username = document.querySelector("span");
	username.textContent = "Username: " + person.results[0].login.username;
	
	let adress = document.getElementById("adress");
	adress.textContent = "Adress: " + person.results[0].location.street.number + " " + person.results[0].location.street.name + ", " +
		person.results[0].location.city + ", " + person.results[0].location.state + ", " + person.results[0].location.country;
	
	let phone = document.getElementById("phone");
	phone.textContent = "Phone: " + person.results[0].phone;
	
	let email = document.getElementById("email");
	email.textContent = "E-mail: " + person.results[0].email;
	
}