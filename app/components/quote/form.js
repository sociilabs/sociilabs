"use client"
import { useState } from "react";
import "./styles.css";

const QuoteForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [buildingWebApp, setBuildingWebApp] = useState(false);
	const [buildingMobileApp, setBuildingMobileApp] = useState(false);
	const [dedicatedTeam, setDedicatedTeam] = useState(false);
	const [additionalDetails, setAdditionalDetails] = useState("");
	const [budget, setBudget] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setSubmitting(true);
		const response = await fetch("https://hook.us1.make.com/b2afx6qibsxxz7nhdidr9cipdhq8oufm", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				buildingWebApp,
				buildingMobileApp,
				dedicatedTeam,
				additionalDetails,
				budget,
			}),
		});
		const data = response;
		console.log(data);
		if (data.status === 200) {
			setSubmitted(true);
		} else {
			alert(data.error);
		}
		setSubmitting(false);
	};

	const toggleCheckboxes = (e) => {
		if (e.target.name === 'buildingWebApp') {
			setBuildingWebApp(!buildingWebApp);
		} else if (e.target.name === 'buildingMobileApp') {
			setBuildingMobileApp(!buildingMobileApp);
		} else if (e.target.name === 'dedicatedTeam') {
			setDedicatedTeam(!dedicatedTeam);
		}
	}

	return (
		<div className="container">
			{submitted ? (
				<div className={`px-4 py-8 text-center`}>
					<p className={`text-lg text-center`}>
						Thank you for your interest. We will get back to you asap!
					</p>
				</div>
			) : (
				<form class="p-0" onSubmit={handleSubmit}>
					<div className="grid gap-4 mb-4 grid-cols-2">
						<div className="col-span-2 sm:col-span-1">
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
							<input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}
							       className="bg-transparent border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
							       required/>
						</div>
						<div className="col-span-2 sm:col-span-1">
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
							<input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}
							       className="bg-transparent border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
							       required/>
						</div>
						<div className="col-span-2">
							<label htmlFor="name"
							       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
							<input type="email" name="email" onChange={(e) => setEmail(e.target.value)}
							       className="bg-transparent border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
							       required/>
						</div>
						<div className={`col-span-2`}>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What are you looking for?</label>
							<ul className="grid w-full gap-1 md:grid-cols-3">
								<li>
									<input type="checkbox" id="react-option" value="buildingWebApp" name="buildingWebApp" onChange={toggleCheckboxes} checked={buildingWebApp} className="hidden peer" />
									<label htmlFor="react-option"
									       className="inline-flex items-center justify-between w-full py-3 px-2.5 border-2 rounded-lg cursor-pointer border-gray-700 peer-checked:border-blue-600 hover:text-gray-200 peer-checked:text-gray-200 text-gray-400 bg-transparent hover:bg-gray-700">
										<div className="block">
											<div className="w-full text-lg font-semibold">Web App</div>
											<div className="w-full text-sm">
												Custom web applications tailored to meet your business needs
											</div>
										</div>
									</label>
								</li>
								<li>
									<input type="checkbox" id="flowbite-option" value="buildingMobileApp" name="buildingMobileApp" onChange={toggleCheckboxes} checked={buildingMobileApp} className="hidden peer"/>
									<label htmlFor="flowbite-option"
									       className="inline-flex items-center justify-between w-full py-3 px-2.5 border-2 rounded-lg cursor-pointer border-gray-700 peer-checked:border-blue-600 hover:text-gray-200 peer-checked:text-gray-200 text-gray-400 bg-transparent hover:bg-gray-700">
										<div className="block">
											<div className="w-full text-lg font-semibold">Mobile App</div>
											<div className="w-full text-sm">
												Innovative mobile apps designed for a seamless user experience
											</div>
										</div>
									</label>
								</li>
								<li>
									<input type="checkbox" id="angular-option" value="dedicatedTeam" name="dedicatedTeam" onChange={toggleCheckboxes} checked={dedicatedTeam} className="hidden peer"/>
									<label htmlFor="angular-option"
									       className="inline-flex items-center justify-between w-full py-3 px-2.5 border-2 rounded-lg cursor-pointer border-gray-700 peer-checked:border-blue-600 hover:text-gray-200 peer-checked:text-gray-200 text-gray-400 bg-transparent hover:bg-gray-700">
										<div className="block">
											<div className="w-full text-lg font-semibold">Dedicated Team</div>
											<div className="w-full text-sm">
												Expert teams dedicated to driving your business forward
											</div>
										</div>
									</label>
								</li>
							</ul>
						</div>
						<div className={`col-span-2`}>
							<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What&apos;s your estimated budget?</label>
							<select id="countries" onChange={(e) => setBudget(e.target.value)}
							        className="bg-transparent border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500">
								<option selected>Choose a budget</option>
								<option value="BELOW_5K" className={`text-gray-900`}>Below $5K (USD)</option>
								<option value="5K_TO_10K" className={`text-gray-900`}>$5K to $10K (USD)</option>
								<option value="10K_TO_20K" className={`text-gray-900`}>$10K to $20K (USD)</option>
								<option value="20K_TO_30K" className={`text-gray-900`}>$20K to $30K (USD)</option>
								<option value="30K_AND_ABOVE" className={`text-gray-900`}>$30K (USD) and above</option>
							</select>
						</div>
						<div className="col-span-2">
							<label htmlFor="additionalDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Details</label>
							<textarea id="additionalDetails" rows="4" name={`additionalDetails`} value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)}
							          className="bg-transparent border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
							          placeholder="Write product description here"></textarea>
						</div>
					</div>
					<div className={`col-span-2 text-right mb-2`}>
						<button type="submit"
						        className="text-white inline-flex items-center bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
							→ Request Quote
						</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default QuoteForm;
