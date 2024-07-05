"use client"
import { useState } from "react";
import "./styles.css";

const QuoteForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [typeOfProject, setTypeOfProject] = useState("");
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
				typeOfProject,
				additionalDetails,
				budget,
			}),
		});
		const data = await response.json();
		if (data.status === "ok") {
			setSubmitted(true);
		} else {
			alert(data.error);
		}
		setSubmitting(false);
	};

	return (
		<div className="container">
			{submitted ? (
				<h1>Thank you!</h1>
			) : (
				<form class="p-0">
					<div className="grid gap-4 mb-4 grid-cols-2">
						<div className="col-span-2 sm:col-span-1">
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
							<input type="text" name="firstName"
							       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							       required/>
						</div>
						<div className="col-span-2 sm:col-span-1">
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
							<input type="text" name="lastName"
							       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							       required/>
						</div>
						<div className="col-span-2 sm:col-span-1">
							<label htmlFor="category"
							       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
							<select id="category"
							        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
								<option selected="">Select category</option>
								<option value="TV">TV/Monitors</option>
								<option value="PC">PC</option>
								<option value="GA">Gaming/Console</option>
								<option value="PH">Phones</option>
							</select>
						</div>
						<div className="col-span-2">
							<label htmlFor="name"
							       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
							<input type="email" name="email"
							       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							       required/>
						</div>
						<div className="col-span-2">
							<label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
								Description</label>
							<textarea id="description" rows="4"
							          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							          placeholder="Write product description here"></textarea>
						</div>
					</div>
					<button type="submit"
					        class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						<svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
							      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
							      clip-rule="evenodd"></path></svg>
						Add new product
					</button>
				</form>
			)}
		</div>
	);
}

export default QuoteForm;
