import React from 'react';
import {Food} from './Food';

export class Calculator extends React.Component {

	constructor(props){
		super(props);
		this.state = {meat: "bacon",
					  amountMeat: 0,
					  entrails: "brain, pork (cooked)",					  					  
					  amountEntrails: 0,
					  fish: "abalone",
					  amountFish: 0,
					  dairy: "cream 35% fat",
					  amountDairy: 0,
					  legumes: "beans",
					  amountLegumes: 0,
					  cereals: "barley (boiled)",
					  amountCereals: 0,
					  veget: "artichokes",
					  amountVeget: 0,
					  nuts: "acorn nuts",
					  amountNuts: 0
		}

		this.onChange = this.onChange.bind(this);
	}


	onChange(e){
		const name = e.target.name;
		const value = e.target.value;
		
		if (value<0){
			return;
		}

		this.setState({[name]:value});
	}


	render(){

		const meat = this.state.meat;
		const amountMeat = this.state.amountMeat;
		var protPerMeat;

		switch (meat) {
			case "bacon": protPerMeat = 20; break;
			case "beef (roasted)": protPerMeat = 26; break;
			case "beef brisket, lean": protPerMeat = 33.3; break;
			case "beef fat": protPerMeat = 8.8; break;
			case "beef lean": protPerMeat =	20.3; break;
			case "beef mince, (cooked)": protPerMeat = 25; break;
			case "beef sausage": protPerMeat = 14.5; break;
			case "beef sirloin (roasted)": protPerMeat = 32; break;
			case "beef steak": protPerMeat = 30; break;
			case "beef tenderloin, lean": protPerMeat =	28.5; break;
			case "beef top sirloin, lean": protPerMeat = 30.6; break;
			case "beef topround, lean": protPerMeat = 36.9; break;
			case "beff t-bone": protPerMeat = 24; break;
			case "duck": protPerMeat = 23.5; break;
			case "goose": protPerMeat =	25.2; break;
			case "ham (canned)": protPerMeat = 27; break;
			case "ham (cooked, sliced)": protPerMeat = 21.8; break;
			case "chicken": protPerMeat = 20.5; break;
			case "chicken barbecue": protPerMeat = 23; break;
			case "chicken breast": protPerMeat = 23; break;
			case "chicken breast (cooked)": protPerMeat = 24.5; break;
			case "chicken breast (roasted)": protPerMeat = 23; break;
			case "chicken leg": protPerMeat = 16.3; break;
			case "chicken leg (cooked, fried)": protPerMeat = 26; break;
			case "chicken wing (cooked, fried)": protPerMeat = 19.8; break;
			case "chicken breast (fried)": protPerMeat = 23.5; break;
			case "lamb (cooked)": protPerMeat = 24.5; break;
			case "lamb cutlet (grilled)": protPerMeat = 28; break;
			case "lamb fat ": protPerMeat = 6.2; break;
			case "lamb chop (fried)": protPerMeat = 23.8; break;
			case "lamb lean": protPerMeat = 20.8; break;
			case "lamb leg (roasted)": protPerMeat = 31; break;
			case "lamb loin chops (grilled)": protPerMeat = 29; break;
			case "pork fat": protPerMeat = 6.8; break;
			case "pork fillet (grilled)": protPerMeat = 33; break;
			case "pork chop": protPerMeat = 21.9; break;
			case "pork lean": protPerMeat = 20.7; break;
			case "pork leg (roasted)": protPerMeat = 35; break;
			case "pork loin chop (grilled)": protPerMeat = 32; break;
			case "pork sausage (grilled)": protPerMeat = 19.4; break;
			case "pork top, lean": protPerMeat = 30.5; break;
			case "rabbit": protPerMeat = 20.8; break;
			case "salami": protPerMeat = 20; break;
			case "turkey": protPerMeat = 21.9; break;
			case "turkey breast": protPerMeat = 22.3; break;
			case "turkey leg (cooked)": protPerMeat = 28.5; break;
			case "veal (cooked)": protPerMeat = 25.9; break;
			case "veal escalope (fried)": protPerMeat = 33; break;
			case "veal fillet": protPerMeat = 21.1; break;
			case "venison (roasted)": protPerMeat = 36; break;
		}

		const resMeat = protPerMeat/100 * amountMeat;



		const entrails = this.state.entrails;
		const amountEntrails = this.state.amountEntrails;
		var protPerEnt;

		switch (entrails) {
			case "brain, pork (cooked)": protPerEnt = 12; break;
			case "gizzard, chicken": protPerEnt = 17.6; break;
			case "gizzard, turkey": protPerEnt = 21.7; break;
			case "heart, chicken (cooked)": protPerEnt = 26.4; break;
			case "heart, pork": protPerEnt = 17.3; break;
			case "heart, turkey": protPerEnt = 21.5; break;
			case "kidneys, beef": protPerEnt = 27.3; break;
			case "kidneys, pork": protPerEnt = 16.5; break;
			case "liver, beef": protPerEnt = 27; break;
			case "liver, beef (cooked)": protPerEnt = 29; break;
			case "liver, duck": protPerEnt = 18.6; break;
			case "liver, goose": protPerEnt = 16.4; break;
			case "liver, chicken": protPerEnt =	16.9; break;
			case "liver, chicken (pan-fried)": protPerEnt =	25.8; break;
			case "liver, pork": protPerEnt = 26; break;
			case "liver, pork (cooked)": protPerEnt = 26; break;
			case "liver, turkey": protPerEnt = 20; break;
			case "lungs, pork": protPerEnt = 14; break;
			case "tongue, beef": protPerEnt = 14.8; break;
			case "tripe, beef": protPerEnt = 12; break;
		}

		const resEnt = protPerEnt/100 * amountEntrails;



		const fish = this.state.fish;
		const amountFish = this.state.amountFish;
		var protPerFish;

		switch (fish) {
			case "abalone": protPerFish = 18.7; break;
			case "anchovy": protPerFish = 20.4; break;
			case "bluefin tuna": protPerFish = 29.9; break;
			case "bream": protPerFish = 16.7; break;
			case "carp": protPerFish = 18; break;
			case "catfish": protPerFish = 16.1; break;
			case "caviar": protPerFish = 24.6; break;
			case "clam": protPerFish = 14; break;
			case "cockle": protPerFish = 16.8; break;
			case "cod": protPerFish = 17.4; break;
			case "cod fillet (baked": protPerFish = 21; break;
			case "crab": protPerFish = 17.9; break;
			case "crayfish": protPerFish =  14.5; break;
			case "cuttlefish": protPerFish =  16.1; break;
			case "dogfish": protPerFish =  17.6; break;
			case "eel": protPerFish = 16.6; break;
			case "flounder": protPerFish = 24.2; break;
			case "haddock": protPerFish =  16.8; break;
			case "halibut": protPerFish =  17.7; break;
			case "herring": protPerFish =  16.8; break;
			case "lobster": protPerFish = 19; break;
			case "mackerel": protPerFish =  19; break;
			case "mussel": protPerFish =  14.4; break;
			case "octopus": protPerFish =  15.3; break;
			case "oyster": protPerFish =  8.4; break;
			case "perch": protPerFish =  18.1; break;
			case "pike": protPerFish =  18.4; break;
			case "plaice": protPerFish =  17.9; break;
			case "salmon": protPerFish = 18.8; break;
			case "salmon (cooked)": protPerFish = 25.6; break;
			case "scallop": protPerFish = 15.3; break;
			case "shark": protPerFish = 20.6; break;
			case "shrimp": protPerFish = 18; break;
			case "skate": protPerFish = 21.5; break;
			case "trout": protPerFish = 18.6; break;
			case "trout (cooked)": protPerFish = 26.6; break;
			case "tuna": protPerFish = 27; break;
			case "whelk": protPerFish = 11.6; break;
		}	

		const resFish = protPerFish/100 * amountFish;




		const dairy = this.state.dairy;
		const amountDairy = this.state.amountDairy;
		var protPerDairy;

		switch (dairy) {
			case "cream 35% fat": protPerDairy = 2; break;
			case "cream cheese": protPerDairy =	8; break;
			case "curd": protPerDairy =	11.8; break;
			case "egg": protPerDairy = 600; break;
			case "cheese camembert": protPerDairy =	20; break;
			case "cheese colby": protPerDairy =	23.8; break;
			case "cheese cottage": protPerDairy = 12.5; break;
			case "cheese danish blue": protPerDairy = 23; break;
			case "cheese edam": protPerDairy = 25; break;
			case "cheese feta": protPerDairy = 14.7; break;
			case "cheese gruyére": protPerDairy = 30; break;
			case "cheese cheddar": protPerDairy = 26; break;
			case "cheese monterey": protPerDairy = 24.5; break;
			case "cheese mozzarella": protPerDairy = 22.2; break;
			case "cheese parmesan": protPerDairy = 38; break;
			case "cheese ricotta": protPerDairy = 11.3; break;
			case "cheese stilton": protPerDairy = 26; break;
			case "cheese swiss": protPerDairy =	29; break;
			case "ice-cream": protPerDairy = 4; break;
			case "milk cow": protPerDairy =	3.3; break;
			case "milk goat": protPerDairy = 3.6; break;
			case "milk sheep": protPerDairy = 6; break;
			case "yogurt": protPerDairy = 10; break;
		}	

		const resDairy = protPerDairy/100 * amountDairy;

		var unit;
		if (dairy === "egg"){
			unit = "piece";
		}
		else if (dairy === "milk cow" || dairy === "milk goat" || dairy === "milk sheep") {
			unit = "ml";
		}
		else {unit = "g";}




		const legumes = this.state.legumes;
		const amountLegumes = this.state.amountLegumes;
		var protPerLegumes;

		switch (legumes) {
			case "beans": protPerLegumes = 21; break;
			case "beans (baked)": protPerLegumes = 4.8; break;
			case "beans, black (cooked)": protPerLegumes = 8.9; break;
			case "beans, fava (cooked)": protPerLegumes = 7.6; break;
			case "beans, french (cooked)": protPerLegumes = 7.1; break;
			case "beans, kidney (cooked)": protPerLegumes = 8.7; break;
			case "beans, lupin (cooked)": protPerLegumes = 15.6; break;
			case "beans, mung": protPerLegumes = 7.5; break;
			case "beans, white (cooked)": protPerLegumes = 9.7; break;
			case "beans. lima (cooked)": protPerLegumes = 7.8; break;
			case "cowpeas (cooked)": protPerLegumes = 7.7; break;
			case "green peas": protPerLegumes = 5.4; break;
			case "hummus": protPerLegumes = 7.9; break;
			case "chickpeas (boiled)": protPerLegumes = 9; break;
			case "lentils": protPerLegumes = 9; break;
			case "miso (paste)": protPerLegumes = 11.7; break;
			case "peas": protPerLegumes = 5; break;
			case "peas, split (cooked)": protPerLegumes = 8.3; break;
			case "soybeans": protPerLegumes = 36; break;
			case "soybenas (roasted)": protPerLegumes = 2.9; break;
			case "sprouted beans": protPerLegumes = 13.1; break;
			case "sprouted lentils": protPerLegumes = 13.1; break;
			case "sprouted peas": protPerLegumes = 13.1; break;
			case "sprouted soybeans": protPerLegumes = 13.1; break;
			case "sugar snap peas": protPerLegumes = 2.3; break;
			case "tempeh": protPerLegumes = 18.5; break;
			case "tofu (uncooked)": protPerLegumes = 8.1; break;
			case "winged beans (cooked)": protPerLegumes = 10.6; break;
		}	

		const resLegumes = protPerLegumes/100 * amountLegumes;




		const cereals = this.state.cereals;
		const amountCereals = this.state.amountCereals;
		var protPerCereals;

		switch (cereals) {
			case "barley (boiled)": protPerCereals = 3; break;
			case "bran wheat": protPerCereals =	14; break;
			case "bread brown": protPerCereals = 8; break;
			case "bread white": protPerCereals = 8; break;
			case "bread wholemeal": protPerCereals = 9; break;
			case "corn": protPerCereals = 9; break;
			case "cornflakes": protPerCereals =	8; break;
			case "flour, corn": protPerCereals = 4; break;
			case "flour, plain": protPerCereals = 11; break;
			case "flour, soya, full-fat": protPerCereals = 37; break;
			case "flour, soya, low-fat": protPerCereals = 45; break;
			case "flour, wholemeal": protPerCereals = 12; break;
			case "muesli": protPerCereals =	9; break;
			case "noodles": protPerCereals = 8; break;
			case "oats": protPerCereals = 16.9; break;
			case "pancake": protPerCereals = 6; break;
			case "pasta, macaroni (boiled)": protPerCereals = 4; break;
			case "rice": protPerCereals = 2.7; break;
			case "rice (boiled)": protPerCereals = 2; break;
			case "rice (fried)": protPerCereals = 6; break;
			case "rice (puffed)": protPerCereals = 6; break;
			case "spaghetti (boiled)": protPerCereals =	4; break;
			case "sweetcorn (boiled)": protPerCereals =	4; break;
			case "wheat": protPerCereals = 14; break;
		}	

		const resCereals = protPerCereals/100 * amountCereals;




		const veget = this.state.veget;
		const amountVeget = this.state.amountVeget;
		var protPerVeget;

		switch (veget) {
			case "artichokes": protPerVeget = 3.3; break;
			case "arugula (rocket)": protPerVeget =	2.6; break;
			case "asparagus (cooked)": protPerVeget = 2.2; break;
			case "bamboo shoots": protPerVeget = 2.8; break;
			case "beet greens (cooked)": protPerVeget =	2.6; break;
			case "beetroot (boiled)": protPerVeget = 2; break;
			case "broccolli (boiled)": protPerVeget = 3; break;
			case "brussels sprouts (cooked)": protPerVeget = 2.6; break;
			case "cabbage": protPerVeget = 3; break;
			case "cabbage (boiled)": protPerVeget =	1; break;
			case "carrot": protPerVeget = 0.7; break;
			case "carrot (boiled)": protPerVeget = 0.6; break;
			case "cauliflower": protPerVeget = 1.9; break;
			case "celeriac (boiled)": protPerVeget = 2; break;
			case "celery": protPerVeget = 0.9; break;
			case "collard greens": protPerVeget = 3; break;
			case "endive": protPerVeget = 2; break;
			case "garden cress": protPerVeget =	2.6; break;
			case "kale": protPerVeget =	4.3; break;
			case "leek (boiled)": protPerVeget = 2; break;
			case "mange tout (cooked)": protPerVeget = 3.5; break;
			case "mushrooms": protPerVeget = 3.1; break;
			case "mushrooms (cooked)": protPerVeget = 3.6; break;
			case "mustard greens": protPerVeget = 2.9; break;
			case "onions": protPerVeget = 0.9; break;
			case "pak-choi (cooked)": protPerVeget = 1.6; break;
			case "parsley": protPerVeget = 4; break;
			case "potato": protPerVeget = 2; break;
			case "potato (baked)": protPerVeget = 2.5; break;
			case "potato (crisps)": protPerVeget = 6; break;
			case "potato (chips)": protPerVeget = 3; break;
			case "potato (roast)": protPerVeget = 3; break;
			case "spinach (cooked)": protPerVeget =	3; break;
			case "squash (cooked)": protPerVeget = 2.5; break;
			case "succotash (cooked)": protPerVeget = 5.1; break;
			case "sweet potato (boiled)": protPerVeget = 0.9; break;
			case "watercress": protPerVeget = 2.3; break;
			case "yam (boiled)": protPerVeget =	2; break;
			case "zucchinni baby": protPerVeget = 2.7; break;
		}	

		const resVeget = protPerVeget/100 * amountVeget;




		const nuts = this.state.nuts;
		const amountNuts = this.state.amountNuts;
		var protPerNuts;

		switch (nuts) {
			case "acorn nuts": protPerNuts = 8.1; break;
			case "almond milk": protPerNuts = 1; break;
			case "almonds": protPerNuts = 22; break;
			case "cashew nuts": protPerNuts = 15.3; break;
			case "coconut (desiccated)": protPerNuts = 6; break;
			case "flaxseed": protPerNuts = 19.5; break;
			case "hazelnuts": protPerNuts =	15; break;
			case "chia seeds (boiled)": protPerNuts = 16; break;
			case "macadamia nuts": protPerNuts = 7.8; break;
			case "peanut butter": protPerNuts =	24; break;
			case "peanuts": protPerNuts = 23.7; break;
			case "peanuts (roasted, salted)": protPerNuts =	20; break;
			case "pecans": protPerNuts = 9,5; break;
			case "pistachio nuts": protPerNuts = 20; break;
			case "pumpkin seed": protPerNuts = 33; break;
			case "walnuts": protPerNuts = 15; break;
		}	

		const resNuts = protPerNuts/100 * amountNuts;


		const sum = resMeat + resEnt + resFish + resDairy + resLegumes + resCereals + resVeget + resNuts;


		return (
			<div>
				<Food img="images/meat.jpg" name="Meat" id="bigmeat">
					<select name="meat" value={meat} onChange={this.onChange} autoFocus>
						<option value="bacon">bacon</option>
						<option value="beef (roasted)">beef (roasted)</option>
						<option value="beef brisket, lean">beef brisket, lean</option>
						<option value="beef fat ">beef fat</option>
						<option value="beef lean">beef lean</option>
						<option value="beef mince, (cooked)">beef mince, (cooked)</option>
						<option value="beef sausage">beef sausage</option>
						<option value="beef sirloin (roasted)">beef sirloin (roasted)</option>
						<option value="beef steak">beef steak</option>
						<option value="beef tenderloin, lean">beef tenderloin, lean</option>
						<option value="beef top sirloin, lean">beef top sirloin, lean</option>
						<option value="beef topround, lean">beef topround, lean</option>
						<option value="beff t-bone">beff t-bone</option>
						<option value="duck">duck</option>
						<option value="goose">goose</option>
						<option value="ham (canned)">ham (canned)</option>
						<option value="ham (cooked, sliced)">ham (cooked, sliced)</option>
						<option value="chicken">chicken</option>
						<option value="chicken barbecue">chicken barbecue</option>
						<option value="chicken breast">chicken breast</option>
						<option value="chicken breast (cooked)">chicken breast (cooked)</option>
						<option value="chicken breast (fried)">chicken breast (fried)</option>
						<option value="chicken breast (roasted)">chicken breast (roasted)</option>
						<option value="chicken leg">chicken leg</option>
						<option value="chicken leg (cooked, fried)">chicken leg (cooked, fried)</option>
						<option value="chicken wing (cooked, fried)">chicken wing (cooked, fried)</option>			
						<option value="lamb (cooked)">lamb (cooked)</option>
						<option value="lamb cutlet (grilled)">lamb cutlet (grilled)</option>
						<option value="lamb fat">lamb fat </option>
						<option value="lamb chop (fried)">lamb chop (fried)</option>
						<option value="lamb lean">lamb lean</option>
						<option value="lamb leg (roasted)">lamb leg (roasted)</option>
						<option value="lamb loin chops (grilled)">lamb loin chops (grilled)</option>
						<option value="pork fat">pork fat</option>
						<option value="pork fillet (grilled)">pork fillet (grilled)</option>
						<option value="pork chop">pork chop</option>
						<option value="pork lean">pork lean</option>
						<option value="pork leg (roasted)">pork leg (roasted)</option>
						<option value="pork loin chop (grilled)">pork loin chop (grilled)</option>
						<option value="pork sausage (grilled)">pork sausage (grilled)</option>
						<option value="pork top, lean">pork top, lean</option>
						<option value="rabbit">rabbit</option>
						<option value="salami">salami</option>
						<option value="turkey">turkey</option>
						<option value="turkey breast">turkey breast</option>
						<option value="turkey leg (cooked)">turkey leg (cooked)</option>
						<option value="veal (cooked)">veal (cooked)</option>
						<option value="veal escalope (fried)">veal escalope (fried)</option>
						<option value="veal fillet">veal fillet</option>
						<option value="venison (roasted)">venison (roasted)</option>
					</select>
					<br/>
					<br/>
					<label htmlFor="amountMeat" className="amount">Amount: </label>
					<input id="amountMeat" name="amountMeat" type="number" value={amountMeat} onChange={this.onChange}/> 
					<span className="amount">{" " + "g"}</span>
					<br/>
					<br/>
					<label htmlFor="resMeat" className="proteins">Proteins: </label>
					<input id="resMeat" type="number" value={resMeat.toFixed(1)} readOnly/>
					<span className="proteins">{" " + "g"}</span>
				</Food>




				<Food img="images/entrails.jpg" name="Entrails" id="bigentrails">
					<select name="entrails" value={entrails} onChange={this.onChange}>
						<option value="brain, pork (cooked)">brain, pork (cooked)</option>
						<option value="gizzard, chicken">gizzard, chicken</option>
						<option value="gizzard, turkey">gizzard, turkey</option>
						<option value="heart, chicken (cooked)">heart, chicken (cooked)</option>
						<option value="heart, pork">heart, pork</option>
						<option value="heart, turkey">heart, turkey</option>
						<option value="kidneys, beef">kidneys, beef</option>
						<option value="kidneys, pork">kidneys, pork</option>
						<option value="liver, beef">liver, beef</option>
						<option value="liver, beef (cooked)">liver, beef (cooked)</option>
						<option value="liver, duck">liver, duck</option>
						<option value="liver, goose">liver, goose</option>
						<option value="liver, chicken">liver, chicken</option>
						<option value="liver, chicken (pan-fried)">liver, chicken (pan-fried)</option>
						<option value="liver, pork">liver, pork</option>
						<option value="liver, pork (cooked)">liver, pork (cooked)</option>
						<option value="liver, turkey">liver, turkey</option>
						<option value="lungs, pork">lungs, pork</option>
						<option value="tongue, beef">tongue, beef </option>
						<option value="tripe, beef">tripe, beef</option>
					</select>
					<br/>
					<br/>
					<label htmlFor="amountEntrails" className="amount">Amount: </label>
					<input id="amountEntrails" name="amountEntrails" type="number" value={amountEntrails} onChange={this.onChange}/> 
					<span className="amount">{" " + "g"}</span>
					<br/>
					<br/>
					<label htmlFor="resEnt" className="proteins">Proteins: </label>
					<input id="resEnt" type="number" value={resEnt.toFixed(1)} readOnly/>
					<span className="proteins">{" " + "g"}</span>
				</Food>




				<Food img="images/fish.jpg" name="Fish & seafood" id="bigfish">
					<select name="fish" value={fish} onChange={this.onChange}>			
						<option value="abalone">abalone</option>
						<option value="anchovy">anchovy</option>
						<option value="bluefin tuna">bluefin tuna</option>
						<option value="bream">bream </option>
						<option value="carp">carp </option>
						<option value="catfish">catfish </option>
						<option value="caviar">caviar</option>
						<option value="clam">clam </option>
						<option value="cockle">cockle</option>
						<option value="cod">cod </option>
						<option value="cod fillet (baked)">cod fillet (baked)</option>
						<option value="crab">crab</option>
						<option value="crayfish">crayfish</option>
						<option value="cuttlefish">cuttlefish</option>
						<option value="dogfish">dogfish </option>
						<option value="eel">eel</option>
						<option value="flounder">flounder</option>
						<option value="haddock">haddock</option>
						<option value="halibut">halibut</option>
						<option value="herring">herring</option>
						<option value="lobster">lobster</option>
						<option value="mackerel">mackerel</option>
						<option value="mussel">mussel</option>
						<option value="octopus">octopus</option>
						<option value="oyster">oyster</option>
						<option value="perch">perch</option>
						<option value="pike">pike</option>
						<option value="plaice">plaice</option>
						<option value="salmon">salmon</option>
						<option value="salmon (cooked)">salmon (cooked)</option>
						<option value="scallop">scallop</option>
						<option value="shark">shark </option>
						<option value="shrimp">shrimp </option>
						<option value="skate">skate </option>
						<option value="trout">trout </option>
						<option value="trout (cooked)">trout (cooked)</option>
						<option value="tuna">tuna </option>
						<option value="whelk">whelk </option>
					</select>
					<br/>
					<br/>
					<label htmlFor="amountFish" className="amount">Amount: </label>
					<input id="amountFish" name="amountFish" type="number" value={amountFish} onChange={this.onChange}/> 
					<span className="amount">{" " + "g"}</span>
					<br/>
					<br/>
					<label htmlFor="resFish" className="proteins">Proteins: </label>
					<input id="resFish" type="number" value={resFish.toFixed(1)} readOnly/>
					<span className="proteins">{" " + "g"}</span>
				</Food>




				<Food img="images/dairy.jpg" name="Dairy & egg" id="bigdairy">
					<select name="dairy" value={dairy} onChange={this.onChange}>
						<option value="cream 35% fat">cream 35% fat</option>
						<option value="cream cheese">cream cheese</option>
						<option value="curd">curd</option>
						<option value="egg">egg</option>
						<option value="cheese camembert">cheese camembert</option>
						<option value="cheese colby">cheese colby</option>
						<option value="cheese cottage">cheese cottage</option>
						<option value="cheese danish blue">cheese danish blue</option>
						<option value="cheese edam">cheese edam</option>
						<option value="cheese feta">cheese feta</option>
						<option value="cheese gruyére">cheese gruyére</option>
						<option value="cheese cheddar">cheese cheddar</option>
						<option value="cheese monterey">cheese monterey</option>
						<option value="cheese mozzarella">cheese mozzarella</option>
						<option value="cheese parmesan">cheese parmesan</option>
						<option value="cheese ricotta">cheese ricotta</option>
						<option value="cheese stilton">cheese stilton</option>
						<option value="cheese swiss">cheese swiss</option>
						<option value="ice-cream">ice-cream</option>
						<option value="milk cow">milk cow</option>
						<option value="milk goat">milk goat</option>
						<option value="milk sheep">milk sheep</option>
						<option value="yogurt">yogurt</option>
					</select>
					<br/>
					<br/>
					<label htmlFor="amountDairy" className="amount">Amount: </label>
					<input id="amountDairy" name="amountDairy" type="number" value={amountDairy} onChange={this.onChange}/> 
					<span className="amount">{" " + unit + " "}</span>
					<br/>
					<br/>
					<label htmlFor="resDairy" className="proteins">Proteins: </label>
					<input id="resDairy" type="number" value={resDairy.toFixed(1)} readOnly/>
					<span className="proteins">{" " + "g"}</span>
				</Food>




				<Food img="images/legumes.jpg" name="Legumes" id="biglegumes">
					<select name="legumes" value={legumes} onChange={this.onChange}>
						<option value="beans">beans</option>
						<option value="beans (baked)">beans (baked)</option>
						<option value="beans, black (cooked)">beans, black (cooked)</option>
						<option value="beans, fava (cooked)">beans, fava (cooked)</option>
						<option value="beans, french (cooked)">beans, french (cooked)</option>
						<option value="beans, kidney (cooked)">beans, kidney (cooked)</option>
						<option value="beans, lupin (cooked)">beans, lupin (cooked)</option>
						<option value="beans, mung">beans, mung</option>
						<option value="beans, white (cooked)">beans, white (cooked)</option>
						<option value="beans. lima (cooked)">beans. lima (cooked)</option>
						<option value="cowpeas (cooked)">cowpeas (cooked)</option>
						<option value="green peas"> green peas </option>
						<option value="hummus">hummus</option>
						<option value="chickpeas (boiled)">chickpeas (boiled)</option>
						<option value="lentils">lentils</option>
						<option value="miso (paste)">miso (paste)</option>
						<option value="peas">peas</option>
						<option value="peas, split (cooked)">peas, split (cooked)</option>
						<option value="soybeans">soybeans </option>
						<option value="soybenas (roasted)">soybenas (roasted)</option>
						<option value="sprouted beans">sprouted beans</option>
						<option value="sprouted lentils">sprouted lentils</option>
						<option value="sprouted peas">sprouted peas</option>
						<option value="sprouted soybeans">sprouted soybeans</option>
						<option value="sugar snap peas">sugar snap peas</option>
						<option value="tempeh">tempeh</option>
						<option value="tofu (uncooked)">tofu (uncooked)</option>
						<option value="winged beans (cooked)">winged beans (cooked)</option>
					</select>
					<br/>
					<br/>
					<label htmlFor="amountLegumes" className="amount">Amount: </label>
					<input id="amountLegumes" name="amountLegumes" type="number" value={amountLegumes} onChange={this.onChange}/> 
					<span className="amount">{" " + "g"}</span>
					<br/>
					<br/>
					<label htmlFor="resLegumes" className="proteins">Proteins: </label>
					<input id="resLegumes" type="number" value={resLegumes.toFixed(1)} readOnly/>
					<span className="proteins">{" " + "g"}</span>
				</Food>




				<Food img="images/cereals.jpg" name="Cereals" id="bigcereals">
					<select name="cereals" value={cereals} onChange={this.onChange}>				
						<option value="barley (boiled)">barley (boiled)</option>
						<option value="bran wheat">bran wheat</option>
						<option value="bread brown">bread brown</option>
						<option value="bread white">bread white</option>
						<option value="bread wholemeal">bread wholemeal</option>
						<option value="corn">corn</option>
						<option value="cornflakes">cornflakes</option>
						<option value="flour, corn">flour, corn</option>
						<option value="flour, plain">flour, plain</option>
						<option value="flour, soya, full-fat">flour, soya, full-fat</option>
						<option value="flour, soya, low-fat">flour, soya, low-fat</option>
						<option value="flour, wholemeal">flour, wholemeal</option>
						<option value="muesli">muesli</option>
						<option value="noodles">noodles</option>
						<option value="oats">oats</option>
						<option value="pancake">pancake</option>
						<option value="pasta, macaroni (boiled)">pasta, macaroni (boiled)</option>
						<option value="rice">rice</option>
						<option value="rice (boiled)">rice (boiled)</option>
						<option value="rice (fried)">rice (fried)</option>
						<option value="rice (puffed)">rice (puffed)</option>
						<option value="spaghetti (boiled)">spaghetti (boiled)</option>
						<option value="sweetcorn (boiled)">sweetcorn (boiled)</option>
						<option value="wheat">wheat</option>		
					</select>
					<br/>
					<br/>
					<label htmlFor="amountCereals" className="amount">Amount: </label>
					<input id="amountCereals" name="amountCereals" type="number" value={amountCereals} onChange={this.onChange}/> 
					<span className="amount">{" " + "g"}</span>
					<br/>
					<br/>
					<label htmlFor="resCereals" className="proteins">Proteins: </label>
					<input id="resCereals" type="number" value={resCereals.toFixed(1)} readOnly/>
					<span className="proteins">{" " + "g"}</span>
				</Food>




				<Food img="images/veget.jpg" name="Vegetables" id="bigveget">
					<select name="veget" value={veget} onChange={this.onChange}>
						<option value="artichokes">artichokes</option>
						<option value="arugula (rocket)">arugula (rocket)</option>
						<option value="asparagus (cooked)">asparagus (cooked)</option>
						<option value="bamboo shoots">bamboo shoots</option>
						<option value="beet greens (cooked)">beet greens (cooked)</option>
						<option value="beetroot (boiled)">beetroot (boiled)</option>
						<option value="broccolli (boiled)">broccolli (boiled)</option>
						<option value="brussels sprouts (cooked)">brussels sprouts (cooked)</option>
						<option value="cabbage">cabbage</option>
						<option value="cabbage (boiled)">cabbage (boiled)</option>
						<option value="carrot">carrot</option>
						<option value="carrot (boiled)">carrot (boiled)</option>
						<option value="cauliflower">cauliflower</option>
						<option value="celeriac (boiled)">celeriac (boiled)</option>
						<option value="celery">celery</option>
						<option value="collard greens">collard greens</option>
						<option value="endive"> endive </option>
						<option value="garden cress">garden cress</option>
						<option value="kale">kale</option>
						<option value="leek (boiled)">leek (boiled)</option>
						<option value="mange tout (cooked)">mange tout (cooked)</option>
						<option value="mushrooms">mushrooms</option>
						<option value="mushrooms (cooked)">mushrooms (cooked)</option>
						<option value="mustard greens">mustard greens</option>
						<option value="onions">onions</option>
						<option value="pak-choi (cooked)">pak-choi (cooked)</option>
						<option value="parsley">parsley</option>
						<option value="potato"> potato </option>
						<option value="potato (baked)">potato (baked)</option>
						<option value="potato (crisps)">potato (crisps)</option>
						<option value="potato (chips)">potato (chips)</option>
						<option value="potato (roast)">	potato (roast)</option>
						<option value="spinach (cooked)">spinach (cooked)</option>
						<option value="squash (cooked)">squash (cooked)</option>
						<option value="succotash (cooked)">succotash (cooked)</option>
						<option value="sweet potato (boiled)">sweet potato (boiled)</option>
						<option value="watercress">watercress</option>
						<option value="yam (boiled)">yam (boiled)</option>
						<option value="zucchinni baby">zucchinni baby</option>
					</select>
					<br/>
					<br/>
					<label htmlFor="amountVeget" className="amount">Amount: </label>
					<input id="amountVeget" name="amountVeget" type="number" value={amountVeget} onChange={this.onChange}/> 
					<span className="amount">{" " + "g"}</span>
					<br/>
					<br/>
					<label htmlFor="resVeget" className="proteins">Proteins: </label>
					<input id="resVeget" type="number" value={resVeget.toFixed(1)} readOnly/>
					<span className="proteins">{" " + "g"}</span>
				</Food>




				<Food img="images/nuts.jpg" name="Nuts & seeds" id="bignuts">
					<select name="nuts" value={nuts} onChange={this.onChange}>
						<option value="acorn nuts">acorn nuts</option>
						<option value="almond milk">almond milk</option>
						<option value="almonds">almonds</option>
						<option value="cashew nuts">cashew nuts</option>
						<option value="coconut (desiccated)">coconut (desiccated)</option>
						<option value="flaxseed">flaxseed</option>
						<option value="hazelnuts">hazelnuts</option>
						<option value="chia seeds (boiled)">chia seeds (boiled)</option>
						<option value="macadamia nuts">macadamia nuts</option>
						<option value="peanut butter">peanut butter</option>
						<option value="peanuts">peanuts</option>
						<option value="peanuts (roasted, salted)">peanuts (roasted, salted)</option>
						<option value="pecans">pecans</option>
						<option value="pistachio nuts">pistachio nuts</option>
						<option value="pumpkin seed">pumpkin seed</option>
						<option value="walnuts">walnuts</option>	
					</select>				
					<br/>
					<br/>
					<label htmlFor="amountNuts" className="amount">Amount:</label>
					<input id="amountNuts" name="amountNuts" type="number" value={amountNuts} onChange={this.onChange}/> 
					<span className="amount">{" " + "g"}</span>
					<br/>
					<br/>
					<label htmlFor="resNuts" className="proteins">Proteins:</label>
					<input id="resNuts" type="number" value={resNuts.toFixed(1)} readOnly/>
					<span className="proteins">{" " + "g"}</span>
				</Food>



	         
	         	<div className="cleaner"></div>
	         	
	         	
	         	<div id="total">
	         	 <label id="labtotal" htmlFor="sum">PROTEINS (TOTAL): </label>
	         	 <input id="sum" type="number" value={sum.toFixed(1)} readOnly/>
	         	 <span id="totunit">{" " + "g" + " "}</span>
	         	 <img src="images/help.png" title="Total amount of protein (meat + entrails + fish & seafood + dairy & egg + legumes + cereals + vegetables + nuts & seeds)."/>
	         	</div>
	         	
            </div>
		);
	}
}
